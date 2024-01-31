import express from "express";
const Router = express.Router();

import version from "./version-1"
Router.use("/v1", version)
export default Router;