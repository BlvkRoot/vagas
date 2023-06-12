import { Request, Response } from "express";
import { DeleteUserService } from "../services/DeleteUserService";
import { container } from 'tsyringe';

export class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = Number(request.query.id);
      const deleteUserService = container.resolve(DeleteUserService);
      await deleteUserService.execute(id);
      
      return response.json('User deleted successfully!');
    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}
