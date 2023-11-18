// const express = require("express");
import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// Parsers
app.use(express.json());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);

  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World. Its me!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got data");
});

export default app;
