import { Controller, Post } from '@nestjs/common';
import { MainService } from './main.service';
import { CreateContactUs } from './dto/createContact.dto';

@Controller('index')
export class MainController {
    private readonly mainService: MainService

    @Post('/submit-contactForm')
    async ContactUsInfo(createContactUs:CreateContactUs){
        return await this.mainService.createContactUs(createContactUs);
    }
}
