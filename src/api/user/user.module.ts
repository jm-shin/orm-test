import { Module } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';
import { UserController } from './user.controller';
import { CreateUserService } from './service/create-user.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserEntity } from '../../entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [CreateUserService, UserRepository],
  exports: [],
})
export class UserModule {}
