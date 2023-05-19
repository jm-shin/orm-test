import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetMobileUserService } from './service/get-mobile-user.service';

@Controller('user')
export class UserController {
  constructor(private readonly getMobileUserService: GetMobileUserService) {}

  @Get(':idx')
  async getUserDetail(@Param('idx') idx: number) {
    console.log(idx, typeof idx);
    return this.getMobileUserService.exec(+idx);
  }
}
