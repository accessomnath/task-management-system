import { TASK } from "../../models/index.js";

/**
 * Update a task in the database.
 * @param {number} taskId - ID of the task to update.
 * @param {object} updatedTaskData - Object containing updated data for the task.
 * @returns {Promise<number>} - Promise resolving to the number of updated rows.
 */
export const updateTask = async (taskId, updatedTaskData) => {
  try {
    const [updatedRowsCount] = await TASK.update(updatedTaskData, {
      where: {
        id: taskId,
      },
    });

    return updatedRowsCount;
  } catch (error) {
    console.error("Error in updateTask repository:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};
