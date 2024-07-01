import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UnauthorizedException,
  // Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';
import { UserEntity } from 'src/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

const saltOrRounds = 10;

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findOne(parseInt(id));
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    const { email, password, username } = createUserDto;
    const error_message = 'Algo deu errado, tente novamente';
    if (!email || !password || !username) {
      throw new BadRequestException(error_message);
    }
    const hashPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    createUserDto.password = hashPassword;

    const newUser = await this.userService.createUser(createUserDto);
    if (!Object.keys(newUser).length) {
      throw new BadRequestException(error_message);
    }
    return res.status(HttpStatus.CREATED).send();
  }

  @Put()
  async findUser(@Body() UserDto: CreateUserDto) {
    const { email, password } = UserDto;
    const error_message = 'Usuário ou Senha Inválidos';
    if (!password || !email) {
      throw new UnauthorizedException(error_message);
    }

    const users = this.userService.findAll();
    const user = (await users).find((u) => u.email == email);

    if (!user) {
      throw new UnauthorizedException(error_message);
    }

    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException(error_message);
    }

    return {
      access_token: this.jwtService.sign({ email: user.email }),
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
