import { Module } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UserController } from './user.controller';
import { CreateUserService } from './service/create-user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MobileUser } from '../../entities/mobile-user';
import { GetMobileUserService } from './service/get-mobile-user.service';
import { MobileUserRepository } from '../../repository/mobile-user.repository';

@Module({
  imports: [MikroOrmModule.forFeature([MobileUser])],
  controllers: [UserController],
  providers: [
    CreateUserService,
    UserRepository,
    GetMobileUserService,
    MobileUserRepository,
  ],
  exports: [],
})
export class UserModule {}
