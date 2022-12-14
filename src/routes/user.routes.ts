import { GetAllUsersController } from './../modules/users/useCases/GetAllUsers/getAllUsersController';
import { CreateUserController } from './../modules/users/useCases/createUser/CreateUserController';
import { Router } from 'express';

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);

export { userRoutes };