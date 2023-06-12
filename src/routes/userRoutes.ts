import { Router } from "express";
import { ListUsersController } from "./../controllers/ListUsersController";
import { ShowUserController } from "../controllers/ShowUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { AccessUserController } from "../controllers/AccessUserController";
import { UserPermissionController } from "../controllers/UserPermissionController";
import { canDelete } from "../middlewares/canDelete";
import { canUpdate } from "../middlewares/canUpdate";

const userRoutes = Router();

const showUserController = new ShowUserController();
const listUsersController = new ListUsersController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();
const accessUserController = new AccessUserController();
const userPermissionController = new UserPermissionController();

userRoutes.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/:id </br>
  put users/:id </br>
  get users/access </br>
  put users/permission/:id </br>
  `);
});

userRoutes.get("/user", showUserController.handle);
userRoutes.get("/users", listUsersController.handle);
userRoutes.post("/users", createUserController.handle);
userRoutes.delete("/users/:id", canDelete, deleteUserController.handle);
userRoutes.put("/users/:id", canUpdate, updateUserController.handle);
userRoutes.get("/users/access", accessUserController.handle);
userRoutes.put("/users/permission/:id", userPermissionController.handle);

export { userRoutes };
