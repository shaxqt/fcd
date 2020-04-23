import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service'
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private serv: UserService) {}

    @Get()
    public async getAll(): Promise<UserDTO[]> {
        return await this.serv.getAll();
    }

    @Post()
    public async post(@Body(new ValidationPipe({transform: true})) dto: UserDTO): Promise<UserDTO> {
        return this.serv.create(dto);
    }
}
