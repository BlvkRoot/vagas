import { Request, Response } from "express";
import { AccessUserService } from "../services/AccessUserService";
import { container } from 'tsyringe';

export class AccessUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const name = request.query.name as string;
      const accessUserService = container.resolve(AccessUserService);
      const access = await accessUserService.execute(name);
      
      return response.json(`Usuário ${name} foi lido ${access} vezes.`);
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
