import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UserEntity } from '../entities/user.entity';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
  ) {}

  async createUser(userInfo) {
    const user = this.userRepository.create(userInfo);
    await this.userRepository.persistAndFlush(user);
    return user;
  }
}
