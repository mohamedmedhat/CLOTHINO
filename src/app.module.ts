import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlController } from './controllers/html.controller';
import { AuthModule } from './modules/auth.module';
import { AuthController } from './controllers/auth/auth.controller';
import { MainController } from './controllers/main/main.controller';
import { MainService } from './controllers/main/main.service';
import { AuthService } from './controllers/auth/auth.service';
import { MainModule } from './modules/main.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Register } from './models/register/Entities/reg.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 30,
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 50
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100
      }
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: process.env.TYPEORM_USER_NAME,
      password: process.env.TYPEORM_PASS,
      database: process.env.TYPEORM_DB,
      entities: [Register],
      synchronize: true,
    }),
    AuthModule,MainModule],
  controllers: [AppController, HtmlController, AuthController, MainController],
  providers: [AppService, MainService, AuthService],
})
export class AppModule {}
