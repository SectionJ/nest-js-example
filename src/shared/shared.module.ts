import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './domain/entities/UserEntity';
import { UserRepositoryImpl } from './infrastructure/UserRepositoryImpl';
import { GetUserServices } from './application/GetUser.service';
import { GetUsersController } from './infrastructure/controllers/GetUsers.controller';

const controllers = [GetUsersController];

const services = [GetUserServices];

const repositories = [
  {
    provide: 'UserRepository',
    useClass: UserRepositoryImpl,
  },
];

@Module({
  controllers: controllers,
  providers: [...services, ...repositories],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity
    ]),
  ],
})
export class SharedModule { }
