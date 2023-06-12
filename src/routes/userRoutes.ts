import { Router } from "express";
import { ListUsersController } from './../controllers/ListUsersController';
import { ShowUserController } from "../controllers/ShowUserController";
import { CreateUserController } from "../controllers/CreateUserController";
const userRoutes = Router();

const showUserController = new ShowUserController();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();

userRoutes.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

userRoutes.get("/user", showUserController.handle);
userRoutes.get("/users", listUsersController.handle);
userRoutes.post("/users", createUserController.handle);
// userRoutes.delete("/users", teste3);
// userRoutes.put("/users", teste4);
// userRoutes.get("/users/access", teste5);

export { userRoutes };
