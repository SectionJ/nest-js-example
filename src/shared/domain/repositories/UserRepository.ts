import { UserModel } from '../models/UserModel';

export interface UserRepository {
  find(): Promise<UserModel[]>;
}
