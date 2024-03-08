import express from "express";
import { taskController } from "../controllers/index.js";
import {
  excelUploadMiddleware,
  pdfUploadMiddleware,
  parseExcelMiddleware,
} from "../middleware/index.js";

const TaskRouter = express.Router();

// List tasks
TaskRouter.get("/tasks", taskController.listTasks);

// Create task
TaskRouter.patch("/tasks", pdfUploadMiddleware, taskController.createTask);

// Update task
TaskRouter.put("/tasks/:id", pdfUploadMiddleware, taskController.updateTask);

// Delete task
TaskRouter.delete("/tasks/:id", taskController.deleteTask);

// Single task
TaskRouter.get("/task/:id", taskController.viewTask);

// excel Create task with uploads
TaskRouter.post("/upload", excelUploadMiddleware, parseExcelMiddleware, taskController.uploadTasks);

export { TaskRouter };
