import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column()
  name: string;
}
