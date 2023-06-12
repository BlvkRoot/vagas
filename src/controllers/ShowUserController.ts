import { Request, Response } from "express";
import { ShowUserService } from "../services/ShowUserService";
import { container } from 'tsyringe';

export class ShowUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const name = request.query.name as string;
      const showUserService = container.resolve(ShowUserService);
      const users = await showUserService.execute(name);

      return response.json(users);
    } catch (error) {
      return response.json(error);
    }
  }
}
