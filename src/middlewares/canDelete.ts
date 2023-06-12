import { permissions } from "..";
import ErrorsApp from "../utils/ErrorsApp";
import { Request, Response, NextFunction } from "express";

const canDelete = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const id = Number(request.params.id);
    const hasPermission = permissions["can_delete"].find(
      (userId) => userId == id
    );
    if (!hasPermission) throw new ErrorsApp(`Usuário sem permissão.`, 403);
    return next();
  } catch ({ message, statusCode }) {
    return response.status(statusCode).json({ message });
  }
};

export { canDelete };
