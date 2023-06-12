import { Router } from "express";
import { ListUsersController } from './../controllers/ListUsersController';
import { ShowUserController } from "../controllers/ShowUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { AccessUserController } from "../controllers/AccessUserController";
const userRoutes = Router();

const showUserController = new ShowUserController();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const accessUserController = new AccessUserController();

userRoutes.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/1 </br>
  `);
});

userRoutes.get("/user", showUserController.handle);
userRoutes.get("/users", listUsersController.handle);
userRoutes.post("/users", createUserController.handle);
userRoutes.delete("/users/:id", deleteUserController.handle);
userRoutes.put("/users/:id", updateUserController.handle);
userRoutes.get("/users/access", accessUserController.handle);

export { userRoutes };
