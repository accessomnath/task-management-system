import { Task } from "../../repositories/index.js";

/**
 * Repository function to delete a task.
 *
 * @param {number} id - Task ID.
 * @returns {object} - Object containing success status and error (if any).
 */
export const deleteTask = async (id) => {
  try {
    const deletedTaskCount = await Task.deleteTask(id);
    if (deletedTaskCount === 1) {
      return { success: true };
    } else {
      return {
        success: false,
        message: "Task not found.",
      };
    }
  } catch (error) {
    console.error("Error in deleteTask repository:", error);
    return {
      success: false,
      message: "An error occurred while deleting the task.",
    };
  }
};
