import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/models/register/Dto/createUser.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string,createuserdto:CreateUserDto): Promise<any> {
//     // const user = await this.authService.Validate();
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
   }
}