import { injectable } from "tsyringe";
import { users } from "..";
import { UserDTO } from "../dto/UserDTO";
import { BaseUserService } from "./BaseUserService";

@injectable()
export class ShowUserService extends BaseUserService {
  async execute(name: string): Promise<UserDTO> {
    const user = this.getUserByName(name);
    Object.assign(user, { viewCount: user.viewCount + 1});
    return user;
  }
}
