// const express = require("express");
import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// Router
const userRouter = express.Router();

// Parsers
app.use(express.json());
app.use("/api/v1/users", userRouter);

userRouter.get("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    massage: "User is created successfully",
    data: user,
  });
});

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send({ name: "Raju" });
  } catch (error) {
    console.log(error);
    next(error);

    /* res.status(400).json({
      success: false,
      message: "Failed to get data",
    }); */
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got data");
});

app.all("*", (req, res) => {
  res.status(400).json({
    success: false,
    massage: "Route isnt found",
  });
});
// Global error handler

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;
