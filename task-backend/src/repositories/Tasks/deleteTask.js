import { TASK } from "../../models/index.js";

/**
 * Delete a task from the database.
 * @param {number} taskId - ID of the task to delete.
 * @returns {Promise<number>} - Promise resolving to the number of deleted rows.
 */
export const deleteTask = async (taskId) => {
  try {
    const deletedRowsCount = await TASK.destroy({
      where: {
        id: taskId,
      },
    });
    return deletedRowsCount;
  } catch (error) {
    console.error("Error in deleteTask repository:", error);
    throw error;
  }
};
