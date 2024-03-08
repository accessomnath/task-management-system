import path, { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import { errors } from "celebrate";
import cors from "cors";

import { StatusSuccess, handleError, connect as connectDB } from "./config/index.js";
import { envs } from "./config/index.js";

import { v1TaskRouter } from "./routes/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(StatusSuccess);

connectDB();

app.use("/", v1TaskRouter);

app.get("/", (req, res) => res.send({ module: "Task management system", status: "running" }));

app.get("*", (req, res) => res.status(404).send({ message: "Not found!" }));
app.post("*", (req, res) => res.status(404).send({ message: "Not found!" }));

app.use(errors());
app.use(handleError);

app.listen(envs.port, () => {
  console.log("Server is running at port " + envs.port);
});
export { app };
