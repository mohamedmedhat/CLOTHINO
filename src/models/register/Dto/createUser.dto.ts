import { IsEmail, IsNumber, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto{

    @IsString()
    name: string

    @IsNumber()
    mobile: number

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}