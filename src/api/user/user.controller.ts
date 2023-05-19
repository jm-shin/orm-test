import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserService } from './service/create-user.service';
import { GetMobileUserService } from './service/get-mobile-user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getMobileUserService: GetMobileUserService,
  ) {}

  @Post()
  async createUserInfo(@Body() user) {
    return this.createUserService.exec(user);
  }

  @Get(':idx')
  async getUserDetail(@Param('idx') idx: number) {
    console.log(idx, typeof idx);
    return this.getMobileUserService.exec(+idx);
  }
}
