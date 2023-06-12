import { injectable } from "tsyringe";
import { permissions } from "..";
import { BaseUserService } from "./BaseUserService";
import ErrorsApp from "../utils/ErrorsApp";

interface IPermissions {
  userPermissions: string[];
}

@injectable()
export class UserPermissionService extends BaseUserService {
  async execute(id: number, { userPermissions }: IPermissions): Promise<void> {
    this.getUserIndexById(id);

    for (const userPermission of userPermissions) {
      const permission = permissions[userPermission];

      if (!permission) throw new ErrorsApp(`Permissão invalida!`, 400);
      // Evitar adicionar permissão duplicada para o mesmo User
      if (!permissions[userPermission].find((userId) => userId == id))
        permissions[userPermission].push(id); // adicionar permissão
    }
  }
}
