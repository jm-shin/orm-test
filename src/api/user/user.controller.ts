import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from './service/create-user.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async createUserInfo(@Body() user) {
    return this.createUserService.exec(user);
  }
}
