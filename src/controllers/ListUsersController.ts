import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";
import { container } from 'tsyringe';

export class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listUsersService = container.resolve(ListUsersService);
      const users = await listUsersService.execute();
      
      return response.json(users);
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
