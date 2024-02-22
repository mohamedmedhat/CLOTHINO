import { Module } from '@nestjs/common';
import { AuthService } from 'src/controllers/auth/auth.service';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from 'src/models/register/Entities/reg.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Register]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: {expiresIn: '1h'},
    }),
  ],
  providers:[AuthService],
  controllers:[AuthController]
})
export class AuthModule {}
