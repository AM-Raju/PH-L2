"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Router
const userRouter = express_1.default.Router();
// Parsers
app.use(express_1.default.json());
app.use("/api/v1/users", userRouter);
userRouter.get("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        massage: "User is created successfully",
        data: user,
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => {
    try {
        res.send({ name: "Raju" });
    }
    catch (error) {
        console.log(error);
        next(error);
        /* res.status(400).json({
          success: false,
          message: "Failed to get data",
        }); */
    }
});
app.post("/", (req, res) => {
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
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
