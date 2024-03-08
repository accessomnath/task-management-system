import { Router } from "express";
import { TaskRouter } from "./task.js";

const tRouter = Router();

tRouter.use("/", TaskRouter);

export { tRouter as v1TaskRouter };
