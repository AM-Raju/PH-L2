// const express = require("express");
import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// Parsers
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World. Its me!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("Got data");
});

export default app;
