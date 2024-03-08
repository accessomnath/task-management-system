import { taskService } from "../../services/index.js";
import { StatusError } from "../../config/index.js";

/**
 * Controller function to upload tasks from an Excel file.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const uploadTasks = async (req, res, next) => {
  try {
    if (!req.excelData) {
      return next(StatusError.badRequest("No file uploaded."));
    }

    const taskDataList = req.excelData;

    const response = await taskService.createTasks(taskDataList);

    res.ok(response);
  } catch (error) {
    console.error("Error in uploadTasks controller:", error);
    next(error);
  }
};
