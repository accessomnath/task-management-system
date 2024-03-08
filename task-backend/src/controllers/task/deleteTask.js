import { taskService } from "../../services/index.js";

/**
 * Controller function to delete a task.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const response = await taskService.deleteTask(id);

    res.ok(response);
  } catch (error) {
    console.error("Error in deleteTask controller:", error);
    next(error);
  }
};
