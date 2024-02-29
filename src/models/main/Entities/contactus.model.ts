import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactUs {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  message: string;
}
