import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/students/student.route";
const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/students", StudentRoutes);

// It's just for understanding
const getAController = (req: Request, res: Response) => {
  res.send("Hello World4!");
};

app.get("/", getAController);

export default app;
