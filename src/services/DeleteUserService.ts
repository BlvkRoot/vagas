import { injectable } from "tsyringe";
import { permissions, users } from "..";
import { BaseUserService } from "./BaseUserService";

@injectable()
export class DeleteUserService extends BaseUserService {
  async execute(id: number): Promise<void> {
    const findIndex = this.getUserIndexById(id);
    users.splice(findIndex, 1);
    // Remover permissão caso usuário foi deletado
    permissions.can_delete = permissions.can_delete.filter(userId => userId != id);
    permissions.can_update = permissions.can_update.filter(userId => userId != id);
  }
}
