import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Register{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    mobile: number

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn({})
    createdAt : Date
}