import { taskService } from "../../services/index.js";

/**
 * Controller function to create a task.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const createTask = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;

    const taskData = {
      title,
      description,
      status,
      createdAt: new Date(),
    };

    if (req.file) {
      taskData.pdf_path = req.file.filename;
    }

    const response = await taskService.createTask(taskData);

    res.send(response);
  } catch (error) {
    console.error("Error in createTask controller:", error);
    next(error);
  }
};
