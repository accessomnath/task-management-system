import { taskService } from "../../services/index.js";
import { StatusError } from "../../config/index.js";

/**
 * Callback function to filter out completed tasks from a list of tasks.
 * @param {Array} tasks - List of tasks.
 */
const filterCompletedTasks = (tasks) => {
  // Filter out completed tasks
  const filteredTasks = tasks.filter((task) => task.status !== "Completed");
  return {
    success: true,
    taskList: filteredTasks,
  };
};

/**
 * Controller function to list tasks.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const listTasks = async (req, res, next) => {
  try {
    const response = await taskService.getTask();

    if (response.success) {
      const filteredTasks = filterCompletedTasks(response.taskList);
      res.ok(filteredTasks);
    } else {
      next(StatusError.internalServerError("Failed to fetch task list."));
    }
  } catch (error) {
    console.error("Error in listTasks controller:", error);
    next(error);
  }
};
