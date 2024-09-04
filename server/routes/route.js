import express from "express";
import { login, register } from "../controller/auth.js";
import {
  create_Categories,
  get_Categories,
  delete_Transaction,
  create_Transaction,
  get_Transaction,
  get_Labels,
} from "../controller/controller.js";

const routes = express.Router();

routes.route("/auth/register").post(register);
routes.route("/auth/login").post(login);

routes.route("/api/categories").post(create_Categories).get(get_Categories);

routes
  .route("/api/transaction")
  .post(create_Transaction)
  .get(get_Transaction)
  .delete(delete_Transaction);

routes.route("/api/labels").get(get_Labels);

export default routes;
