import { injectable } from "tsyringe";
import { users } from "..";
import ErrorsApp from "../utils/ErrorsApp";
import { UserDTO } from "../dto/UserDTO";

@injectable()
export class ShowUserService {
  async execute(name: string): Promise<UserDTO> {
    const user = users.find((user) => user.name == name);

    if (!user) throw new ErrorsApp("User not found", 400);

    return user;
  }
}
