import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { MobileUser } from '../entities/mobile-user';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class MobileUserRepository {
  constructor(
    @InjectRepository(MobileUser)
    private readonly mobileUserRepository: EntityRepository<MobileUser>,
  ) {}

  async getMobileUserDetailInfo(idx) {
    return this.mobileUserRepository.findOne({ idx }, {});
  }
}
