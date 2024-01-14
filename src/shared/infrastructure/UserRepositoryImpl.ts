import { Repository } from 'typeorm';
import { UserEntity } from '../domain/entities/UserEntity';
import { UserModel } from '../domain/models/UserModel';
import { UserRepository } from '../domain/repositories/UserRepository';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private mySQLRepository: Repository<UserEntity>,
  ) {}
  async find(): Promise<UserModel[]> {
    return await this.mySQLRepository.find();
  }
}
