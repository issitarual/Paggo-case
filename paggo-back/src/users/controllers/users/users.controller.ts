import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  // Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';
import { UserEntity } from 'src/typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

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
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put()
  async findUser(@Body() createUserDto: CreateUserDto) {
    const {username, password} = createUserDto;
    const users = this.userService.findAll()
    const user = (await users).find((u) => u.username == username)
    if (user.password !== password){
      return HttpStatus.NOT_FOUND
    }
    return user
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id);
  }
}
