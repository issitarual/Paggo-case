import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from 'src/images/images.dto';
import { UserEntity } from 'src/typeorm';
import { ImagesEntity } from 'src/typeorm/images.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(ImagesEntity)
    private readonly imageRepository: Repository<ImagesEntity>,
  ) {}

  find(user: UserEntity): Promise<ImagesEntity[] | []> {
    return this.imageRepository.find({
      relations: {
        user: true,
      },
      where: {
        user,
      },
    });
  }

  async findAll(): Promise<ImagesEntity[]> {
    return this.imageRepository.find({
      relations: {
          user: true,
      },
  });
  }

  createImage(createImageDto: CreateImageDto) {
    const newImage = this.imageRepository.create(createImageDto);
    return this.imageRepository.save(newImage);
  }
}
