import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { MobileUser } from '../entities/mobile-user';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(MobileUser)
    private readonly userRepository: EntityRepository<MobileUser>,
  ) {}

  async createUser(userInfo) {
    const user = this.userRepository.create(userInfo);
    await this.userRepository.persistAndFlush(user);
    return user;
  }
}
