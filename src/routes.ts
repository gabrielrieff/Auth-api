import { Router } from "express";
import {UserController} from "./app/Controllers/UserController";
import { AuthController } from "./app/Controllers/AuthController";

const routes = Router();

routes.post("/users", new UserController().store);
routes.post("/auth", new AuthController().authenticate);

export default routes;