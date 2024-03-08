import { Task } from "../../repositories/index.js";

/**
 * Create Task Service
 * @param {object} taskData - Object containing data for the new task.
 * @returns {object} - Object containing success status and created task data.
 */
export const createTasks = async (taskData) => {
  try {
    const newTask = await Task.createTasks(taskData);
    return {
      success: true,
      task: newTask,
    };
  } catch (error) {
    console.error("Error in createTask service:", error);
    return {
      success: false,
      message: "An error occurred while creating the task.",
    };
  }
};
