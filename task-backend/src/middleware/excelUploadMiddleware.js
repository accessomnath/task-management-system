import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/excel/",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, file.originalname.replace(ext, "") + "-" + Date.now() + ext);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      return cb(new Error("Only Excel files (xlsx) are allowed"));
    }
    cb(null, true);
  },
});

export const excelUploadMiddleware = (req, res, next) => {
  upload.single("excel_path")(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: "Something went wrong" });
    }

    next();
  });
};
