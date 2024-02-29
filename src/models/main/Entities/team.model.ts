import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  image: string;

  @Column()
  name: string;

  @Column()
  desc: string;
}
