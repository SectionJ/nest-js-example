import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/UserRepository';

@Injectable()
export class GetUserServices {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) { }
  public async execute() {
    return await this.userRepository.find();
  }
}
