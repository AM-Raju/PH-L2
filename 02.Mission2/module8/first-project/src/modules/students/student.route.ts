import express from "express";
import { studentControllers } from "./student.controller";

const router = express.Router();

// this rout will call controller function
router.post("/create-student", studentControllers.createStudent);
