import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ImagesEntity } from './images.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  @Column({
    nullable: false,
    default: '',
    unique: true,
  })
  email: string;

  @OneToMany(() => ImagesEntity, (images) => images.user)
  images: ImagesEntity[];
}
