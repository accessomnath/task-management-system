import { TASK } from "../../models/index.js";

/**
 * Get all tasks.
 * @returns {Promise<Array<Task>>} - Array of task data.
 */
export const getAllTasks = async () => {
  try {
    const tasks = await TASK.findAll({
      order: [["createdAt", "DESC"]],
    });

    return tasks;
  } catch (error) {
    console.error("Error in getAllTasks:", error);
    return [];
  }
};
