import { injectable } from 'tsyringe';
import { UserDTO } from './../dto/UserDTO';
import { users } from "..";

@injectable()
export class ListUsersService {
  async execute(): Promise<UserDTO[]> {
    return users;
  }
}
