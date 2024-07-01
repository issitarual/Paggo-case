import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './users.entity';

@Entity('images')
export class ImagesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  uploadedImage: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  textRecognition: string;

  @Column({
    nullable: false,
    default: new Date().toISOString(),
  })
  uploadedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.images)
    user: UserEntity
}
