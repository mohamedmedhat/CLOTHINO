import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/models/register/Dto/createUser.dto';
import { Register } from 'src/models/register/Entities/reg.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Register) readonly userRepositort: Repository<Register>,
  ) {}

  async validateUser(email: string, password: string): Promise<Register> {
    const user = this.userRepositort.findOneBy({ email });
    if (user && bcrypt.compareSync(password, (await user).password)) {
        return user;
      }
      throw new UnauthorizedException('Invalid credentials');
  }

  async GenerateToken(payload: Register): Promise<string> {
    const tokenPayload = {
      id: payload.id,
      name: payload.name,
      mobile: payload.mobile,
      email: payload.email,
    };
    return this.jwtService.sign(tokenPayload);
  }

  async SignUp(email: string, createuserdto: CreateUserDto): Promise<Register> {
    const userExist = this.userRepositort.findOneBy({ email });
    if (userExist) {
      throw new Error('This email not Valid');
    }
    const hashPassword = bcrypt.hashSync(createuserdto.password,10);
    const newUser = this.userRepositort.create({
      ...createuserdto,
      password: hashPassword,
      
    });
    return await this.userRepositort.save(newUser);
  }

  async LogIn(email: string, password: string): Promise<{user:Register, token: string}> {
    try {
      const user = await this.validateUser(email,password);
      const token = await this.GenerateToken(user);
      return {user,token};
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
