import { Module } from '@nestjs/common';
import { ImagesController } from './controllers/images/images.controller';
import { ImagesService } from './services/images/images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/services/users/users.service';
import { UserEntity } from 'src/typeorm';
import { ImagesEntity } from 'src/typeorm/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImagesEntity, UserEntity])],
  controllers: [ImagesController],
  providers: [ImagesService, UsersService],
})
export class ImagesModule {}
