import { Task } from "../../repositories/index.js";

/**
 * Get Task by ID Service
 * @param {string} taskId - The ID of the task to retrieve.
 * @returns {object} - Object containing success status and the retrieved task.
 */
export const getTaskById = async (taskId) => {
  try {
    const task = await Task.getTaskById(taskId);

    if (task) {
      return {
        success: true,
        task: task,
      };
    } else {
      return {
        success: false,
        message: "Task not found.",
      };
    }
  } catch (error) {
    console.error("Error in getTaskById service:", error);
    return {
      success: false,
      message: "An error occurred while fetching the task.",
    };
  }
};
