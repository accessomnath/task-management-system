import xlsx from "xlsx";

/**
 * Middleware function to parse Excel file data.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 */
export const parseExcelMiddleware = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded." });
    }

    const workbook = xlsx.readFile(req.file.path);

    const worksheet = workbook.Sheets["Sheet1"];
    const data = xlsx.utils.sheet_to_json(worksheet);

    const excelFileName = req.file.filename;

    req.excelData = data.map((task) => ({
      ...task,
      excel_path: excelFileName,
    }));

    next();
  } catch (error) {
    console.error("Error in parseExcelMiddleware:", error);
    res.status(500).json({ error: "An error occurred while parsing the Excel file." });
  }
};
