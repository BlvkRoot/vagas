import { UserDTO } from "../dto/UserDTO";
import { injectable } from "tsyringe";
import { users } from "..";
import { BaseUserService } from "./BaseUserService";

@injectable()
export class UpdateUserService extends BaseUserService  {
  async execute(id: number, data: UserDTO): Promise<UserDTO> {
    const findIndex = this.getUserIndexById(id);
    const user = users[findIndex];
    Object.assign(user, { ...data});
    return user;
  }
}
