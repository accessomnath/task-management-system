import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination: "uploads/pdf/",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, file.originalname.replace(ext, "") + "-" + Date.now() + ext);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // Limit file size to 10MB
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"));
    }
    cb(null, true);
  },
});

// Middleware function to handle single file upload
export const pdfUploadMiddleware = (req, res, next) => {
  upload.single("pdf_path")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      next(err);
    } else if (err) {
      next(err);
    } else {
      next();
    }
  });
};
