import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/models/register/Dto/createUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async Login(email:string, password:string){
        return this.authService.LogIn(email,password);
    }

    @Post('/register')
    async SignUp(email:string,createuserdto:CreateUserDto){
        return this.authService.SignUp(email,createuserdto);
    }

}
