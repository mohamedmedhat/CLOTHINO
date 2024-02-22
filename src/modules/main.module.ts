import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MainController } from 'src/controllers/main/main.controller';
import { MainService } from 'src/controllers/main/main.service';

@Module({
    imports:[
        TypeOrmModule.forFeature(),
    ],
    controllers:[MainController],
    providers:[MainService]
})
export class MainModule {}
