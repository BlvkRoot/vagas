import { injectable } from "tsyringe";
import { users } from "..";
import { UserDTO } from "../dto/UserDTO";

@injectable()
export class CreateUserService {
  async execute(user: UserDTO): Promise<UserDTO> {
    const lastUser = users[users.length - 1];
    // Atualizar o user object e incrementar o id
    Object.assign(user, { id: lastUser.id + 1});
    users.push(user);
    return user;
  }
}
