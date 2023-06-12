import ErrorsApp from '../utils/ErrorsApp';
import { users } from '..';

export class BaseUserService {
   getUserIndexById(id: number): number {
    const findIndex = users.findIndex((user) => user.id === id);

    if (findIndex === -1)
      throw new ErrorsApp(`User with id {${id}} not found!`);

    return findIndex;
  }
}