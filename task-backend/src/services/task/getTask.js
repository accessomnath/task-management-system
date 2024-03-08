import { Task } from "../../repositories/index.js";
import { StatusError } from "../../config/index.js";

/**
 * Get Task Service
 * @returns {object} - Object containing success status and taskList.
 */
export const getTask = async () => {
  try {
    // Get all tasks
    const taskList = await Task.getAllTasks();

    if (taskList.length > 0) {
      const updatedTaskList = taskList.map((task) => {
        const updatedTask = {
          id: task.id,
          title: task.title,
          description: task.description,
          status: task.status,
          pdf_path: "http://localhost:5001/uploads/pdf/" + task.pdf_path,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
        };

        if (task.excel_path !== null) {
          updatedTask.excel_path = "http://localhost:5001/uploads/excel/" + task.excel_path;
        }

        return updatedTask;
      });

      return {
        success: true,
        taskList: updatedTaskList,
      };
    } else {
      return new StatusError.notFound("No tasks found.");
    }
  } catch (error) {
    console.error("Error in getTask service:", error);
    return {
      success: false,
      message: "An error occurred while fetching tasks.",
    };
  }
};
