import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";
import { container } from 'tsyringe';

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = Number(request.params.id);
      const data = request.body;
      const updateUserService = container.resolve(UpdateUserService);
      const user = await updateUserService.execute(id, data);
      
      return response.json(user);
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
