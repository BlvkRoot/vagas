import { Request, Response } from "express";
import { UserPermissionService } from "../services/UserPermissionService";
import { container } from 'tsyringe';

export class UserPermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const id = Number(request.params.id);
      const userPermissionService = container.resolve(UserPermissionService);
      
      await userPermissionService.execute(id, { userPermissions: data?.permissions});
      
      return response.json('Permissions updated successfully!');
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
