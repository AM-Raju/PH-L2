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
app.get("/", logger, (req, res) => {
    res.send("Hello World. Its me!");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Got data");
});
exports.default = app;
