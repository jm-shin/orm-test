import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../../repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async exec(user: CreateUserDto) {
    return this.userRepository.createUser(user);
  }
}
