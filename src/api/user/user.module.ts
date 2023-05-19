import { Module } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UserController } from './user.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MobileUser } from '../../entities/mobile-user';
import { GetMobileUserService } from './service/get-mobile-user.service';
import { MobileUserRepository } from '../../repository/mobile-user.repository';

@Module({
  imports: [MikroOrmModule.forFeature([MobileUser])],
  controllers: [UserController],
  providers: [UserRepository, GetMobileUserService, MobileUserRepository],
  exports: [],
})
export class UserModule {}
