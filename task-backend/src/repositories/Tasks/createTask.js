import { TASK } from "../../models/index.js";

/**
 * Create a new task in the database.
 * @param {object} taskData - Object containing data for the new task.
 * @returns {Promise<Task>} - Promise resolving to the created task.
 */
export const createTask = async (taskData) => {
  try {
    const newTask = await TASK.create(taskData);
    return newTask;
  } catch (error) {
    console.error("Error in createTask repository:", error);
    throw error;
  }
};
