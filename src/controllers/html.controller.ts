import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('html')
export class HtmlController {
    @Get()
    root(@Res() res: Response): void{
        res.sendFile(join(__dirname,'..','views','index.hbs'));
    }
}
