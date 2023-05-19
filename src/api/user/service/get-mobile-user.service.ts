import { Injectable } from '@nestjs/common';
import { MobileUserRepository } from '../../../repository/mobile-user.repository';

@Injectable()
export class GetMobileUserService {
  constructor(private readonly mobileUserRepository: MobileUserRepository) {}

  async exec(idx: number) {
    return this.mobileUserRepository.getMobileUserDetailInfo(idx);
  }
}
