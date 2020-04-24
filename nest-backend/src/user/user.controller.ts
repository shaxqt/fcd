import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async getAll(): Promise<UserDTO[]> {
    return await this.userService.getAll();
  }

  @Post()
  public async post(
    @Body(new ValidationPipe({ transform: true })) dto: UserDTO,
  ): Promise<UserDTO> {
    return this.userService.create(dto);
  }
}
