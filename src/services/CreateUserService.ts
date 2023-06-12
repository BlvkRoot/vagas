import { injectable } from "tsyringe";
import { users } from "..";
import { UserDTO } from "../dto/UserDTO";

@injectable()
export class CreateUserService {
  async execute(user: UserDTO): Promise<UserDTO> {
    const lastUser = users[users.length - 1];
    const newId = lastUser ? lastUser.id + 1 : 1;
    // Atualizar o user object e incrementar o id
    Object.assign(user, { id: newId});
    users.push(user);
    return user;
  }
}
