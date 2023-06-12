import { injectable } from "tsyringe";
import { users } from "..";
import ErrorsApp from "utils/ErrorsApp";

@injectable()
export class DeleteUserService {
  async execute(id: number): Promise<void> {
    const findIndex = users.findIndex(
      user => user.id === id,
    );
    
    if(findIndex === -1) throw new ErrorsApp(`User with id ${findIndex} not found!`);

    users.splice(findIndex, 1);
  }
}
