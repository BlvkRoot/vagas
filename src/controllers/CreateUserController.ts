import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { container } from "tsyringe";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const createUserService = container.resolve(CreateUserService);
      const user = await createUserService.execute(data);

      return response.status(201).json(user);
    } catch (error) {
      return response.status(error.statusCode).json({ message: error.message });
    }
  }
}
