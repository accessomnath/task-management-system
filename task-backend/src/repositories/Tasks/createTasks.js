import { TASK } from "../../models/index.js";

/**
 * Create new tasks in the database.
 * @param {object[]} taskDataList - Array of objects containing data for the new tasks.
 * @returns {Promise<Task[]>} - Promise resolving to the array of created tasks.
 */
export const createTasks = async (taskDataList) => {
  try {
    const createdTasks = [];

    for (const taskData of taskDataList) {
      const newTask = await TASK.create(taskData);
      createdTasks.push(newTask);
    }

    return createdTasks;
  } catch (error) {
    console.error("Error in createTasks repository:", error);
    throw error;
  }
};
