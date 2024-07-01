import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @MinLength(3)
  uploadedImage: string;

  @IsNotEmpty()
  @MinLength(3)
  textRecognition: string;

  @IsNotEmpty()
  @MinLength(3)
  description: string;
}

export class ImageDto {
  @IsNotEmpty()
  id: bigint;

  @IsNotEmpty()
  @MinLength(3)
  uploadedImage: string;

  @IsNotEmpty()
  @MinLength(3)
  description: string;

  @IsNotEmpty()
  @MinLength(3)
  uploadedAt: Date;
}
