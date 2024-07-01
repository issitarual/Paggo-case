import {
  Controller,
  Get,
  ValidationPipe,
  UsePipes,
  Post,
  HttpStatus,
  BadRequestException,
  Body,
  Res,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { CreateImageDto } from 'src/images/images.dto';
import { ImagesService } from 'src/images/services/images/images.service';
import { ImagesEntity } from 'src/typeorm/images.entity';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('images')
export class ImagesController {
  constructor(
    private jwtService: JwtService,
    private readonly imagesService: ImagesService,
    private usersService: UsersService,
  ) {}

  @Get(':user')
  async findOne(@Req() req: Request): Promise<ImagesEntity[]> {
    const payload = await this.verifyToken(req);
    const userEmail = payload.email;
    const user = await this.usersService.findUserByEmail(userEmail);
    return await this.imagesService.find(user)
  }

  @Get()
  findAll(): Promise<ImagesEntity[]> {
    return this.imagesService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(
    @Body() createImageDto: CreateImageDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { uploadedImage, textRecognition } = createImageDto;
    const error_message = 'Algo deu errado, tente novamente';
    if (!uploadedImage || !textRecognition) {
      throw new BadRequestException(error_message);
    }
    const payload = await this.verifyToken(req);
    const userEmail = payload.email;
    const user = await this.usersService.findUserByEmail(userEmail);
    createImageDto['user'] = user;
    const newImage = await this.imagesService.createImage(createImageDto);
    if (!Object.keys(newImage).length) {
      throw new BadRequestException(error_message);
    }

    return res.status(HttpStatus.CREATED).send();
  }

  private extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private async verifyToken(req: Request) {
    const token = this.extractTokenFromHeader(req);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const tokenDecode = await this.jwtService.decode(token);
      const payload = { email: tokenDecode.email };
      return payload;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
