export const handleError = (err, req, res) => {
  // Handle multer error
  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({ error: "fileSizeNotMatch" });
  } else if (err.code === "LIMIT_FILE_TYPE") {
    res.status(400).send({ error: "invalidFile" });
  } else if (err.code === "LIMIT_UNEXPECTED_FILE") {
    res.status(400).send({ error: "maximumFileLimit" });
  } else {
    let message;
    let status;

    if (err.statusCode) {
      message = err.message || "serverError";
      status = err.statusCode;
    } else {
      message = "serverError";
      status = 500;
    }

    res.locals.error = message;

    res.status(status).send({
      success: false,
      message: message,
    });
  }
};
