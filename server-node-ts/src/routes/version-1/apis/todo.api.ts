import { todoController } from "../../../controllers/todo.controller"
import express from "express";
const Router = express.Router();

Router.post("/", todoController.create)
Router.get("/", todoController.findAll)
Router.patch("/:id", todoController.edit)
Router.delete("/:id", todoController.delete)
export default Router