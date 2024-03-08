import { taskService } from "../../services/index.js";

/**
 * Controller function to update a task.
 * @param {*} req - Express request object.
 * @param {*} res - Express response object.
 * @param {*} next - Express next middleware function.
 */
export const updateTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, status } = req.body;
    console.log(status);
    const updatedTaskData = {
      title,
      description,
      status,
      updatedAt: new Date(),
    };
    if (req.file) {
      updatedTaskData.pdf_path = req.file.filename;
    }
    const response = await taskService.updateTask(id, updatedTaskData);
    res.ok(response);
  } catch (error) {
    console.error("Error in updateTask controller:", error);
    next(error);
  }
};
