import ErrorsApp from "../utils/ErrorsApp";
import { users } from "..";
import { UserDTO } from "../dto/UserDTO";

export class BaseUserService {
  getUserIndexById(id: number): number {
    const findIndex = users.findIndex((user) => user.id === id);

    if (findIndex === -1)
      throw new ErrorsApp(`User with id {${id}} not found!`);

    return findIndex;
  }

  getUserByName(name: string): UserDTO {
    const user = users.find((user) => user.name == name);

    if (!user) throw new ErrorsApp("User not found", 400);

    return user;
  }
}
