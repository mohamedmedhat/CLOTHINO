import { Injectable } from '@nestjs/common';
import { CreateContactUs } from './dto/createContact.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactUs } from 'src/models/main/Entities/contactus.model';
import { Repository } from 'typeorm';

@Injectable()
export class MainService {
    constructor(
        @InjectRepository(ContactUs) private readonly contactRepo: Repository<ContactUs>,
    ){}

    async createContactUs(createContactus: CreateContactUs): Promise<ContactUs>{
        const newUser = this.contactRepo.create({
            ...createContactus,
        })
        return  await this.contactRepo.save(newUser);
    }
}
