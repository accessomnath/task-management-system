import { taskService } from "../../services/index.js";

/**
 * Controller function to view a task by ID.
 * @param {Object} req - Express request object containing task ID.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const viewTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const response = await taskService.getTaskById(taskId);
    res.ok(response);
  } catch (error) {
    console.error("Error in viewTask controller:", error);
    next(error);
  }
};
