import { Router } from "express";
import { ListUsersController } from './../controllers/ListUsersController';
import { ShowUserController } from "../controllers/ShowUserController";
const userRoutes = Router();

const showUserController = new ShowUserController();
const listUsersController = new ListUsersController();

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
// userRoutes.post("/users", teste2);
// userRoutes.delete("/users", teste3);
// userRoutes.put("/users", teste4);
// userRoutes.get("/users/access", teste5);

export { userRoutes };
