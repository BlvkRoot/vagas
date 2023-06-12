import { BaseUserService } from "./BaseUserService";
import { injectable } from "tsyringe";

@injectable()
export class AccessUserService extends BaseUserService {
  async execute(name: string): Promise<number> {
    const user = this.getUserByName(name);

    return user.viewCount;
  }
}
