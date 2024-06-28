import {
  BadRequestException,
  //   BadRequestException,
  Injectable,
  //   InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { JwtService } from '@nestjs/jwt';
// import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { generateFromEmail } from 'unique-username-generator';
// import { UserEntity } from 'src/typeorm';
// import { CreateUserDto } from 'src/users/users.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  UsersService: UsersService;
  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.UsersService.createUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  // async registerUser(user: CreateUserDto) {
  //   try {
  //     const newUser = this.UsersService.createUser(user);
  //     (await newUser).username = generateFromEmail(user.email, 5);

  //     await this.userRepository.save(newUser);

  //     return this.generateJwt({
  //       sub: newUser.id,
  //       email: newUser.email,
  //     });
  //   } catch {
  //     throw new InternalServerErrorException();
  //   }
  // }

  async findUserByEmail(email) {
    const findUsers = await this.UsersService.findAll();
    const user = findUsers.find((u) => u.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}
