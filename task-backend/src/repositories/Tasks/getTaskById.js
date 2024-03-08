import { TASK } from "../../models/index.js";

/**
 * Get Task Details by Task ID Repository
 * @param {number} taskId - The ID of the task to retrieve.
 * @returns {Object|null} The task details object or null if not found.
 */
export async function getTaskById(taskId) {
  try {
    const task = await TASK.findOne({ where: { id: taskId } });

    return task ? task.toJSON() : null;
  } catch (error) {
    console.error("Error fetching task by ID:", error);
    throw error;
  }
}
