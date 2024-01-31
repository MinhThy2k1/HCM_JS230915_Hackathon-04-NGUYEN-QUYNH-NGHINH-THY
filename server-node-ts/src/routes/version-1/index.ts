import express from "express";
const Router = express.Router();

import todoApi from './apis/todo.api'
Router.use("/todo", todoApi)
export default Router;