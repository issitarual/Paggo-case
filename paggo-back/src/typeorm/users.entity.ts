import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
    unique: true
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;
}
