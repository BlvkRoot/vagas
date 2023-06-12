import { Router } from "express";
import { ShowUserController } from "../controllers/ShowUserController";
const userRoutes = Router();

const showUserController = new ShowUserController();

userRoutes.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

userRoutes.get("/users/{name}", showUserController.handle);
// userRoutes.get("/users", teste1.getUsers);
// userRoutes.post("/users", teste2);
// userRoutes.delete("/users", teste3);
// userRoutes.put("/users", teste4);
// userRoutes.get("/users/access", teste5);

export { userRoutes };
