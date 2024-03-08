import { Task } from "../../repositories/index.js";
import { StatusError } from "../../config/index.js";

/**
 * Service function to update a task.
 *
 * @param {number} taskId - Task ID.
 * @param {object} updatedTaskData - Object containing updated data for the task.
 * @returns {object} - Object containing success status and updated task data.
 */
export const updateTask = async (taskId, updatedTaskData) => {
  try {
    const updatedTask = await Task.updateTask(taskId, updatedTaskData);

    if (!updatedTask) {
      return StatusError.notFound("Task not found.");
    }

    return {
      success: true,
      task: updatedTask,
    };
  } catch (error) {
    console.error("Error in updateTask service:", error);
    return {
      success: false,
      message: "An error occurred while updating the task.",
    };
  }
};
