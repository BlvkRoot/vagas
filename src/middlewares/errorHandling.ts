import { Request, Response, NextFunction } from 'express';
import ErrorsApp from '../utils/ErrorsApp';

export const errorHandling = async (
  err: Error | any,
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<Response> => {
  console.log(err);

  if (err instanceof ErrorsApp) {
    return response
      .status(err.statusCode)
      .json({ success: false, message: err.message });
  }

  return response.status(500).json({
    success: false,
    message: 'Erro interno no servidor.',
  });
};