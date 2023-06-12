import { injectable } from "tsyringe";
import { users } from "..";
import ErrorsApp from "../utils/ErrorsApp";
import { BaseUserService } from "./BaseUserService";

@injectable()
export class DeleteUserService extends BaseUserService {
  async execute(id: number): Promise<void> {
    const findIndex = this.getUserIndexById(id);
    users.splice(findIndex, 1);
  }
}
