import {
//   BadRequestException,
  Injectable,
//   InternalServerErrorException,
} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { generateFromEmail } from 'unique-username-generator';
// import { UserEntity } from 'src/typeorm';
// import { CreateUserDto } from 'src/users/users.dtos';

@Injectable()
export class AuthService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
  //   constructor(
  //     private jwtService: JwtService,
  //     @InjectRepository(UserEntity)
  //     private userRepository: Repository<UserEntity>,
  //   ) {}

  //   generateJwt(payload) {
  //     return this.jwtService.sign(payload);
  //   }

  //   async signIn(user) {
  //     if (!user) {
  //       throw new BadRequestException('Unauthenticated');
  //     }

  //     const userExists = await this.findUserByEmail(user.email);

  //     if (!userExists) {
  //       return this.registerUser(user);
  //     }

  //     return this.generateJwt({
  //       sub: userExists.id,
  //       email: userExists.email,
  //     });
  //   }

  //   async registerUser(user: CreateUserDto) {
  //     try {
  //       const newUser = this.userRepository.create(user);
  //       newUser.username = generateFromEmail(user.email, 5);

  //       await this.userRepository.save(newUser);

  //       return this.generateJwt({
  //         sub: newUser.id,
  //         email: newUser.email,
  //       });
  //     } catch {
  //       throw new InternalServerErrorException();
  //     }
  //   }

  //   async findUserByEmail(email) {
  //     const user = await this.userRepository.findOne({ where: email });

  //     if (!user) {
  //       return null;
  //     }

  //     return user;
  //   }
}
