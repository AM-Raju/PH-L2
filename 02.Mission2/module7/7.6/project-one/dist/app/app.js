"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Parsers
app.use(express_1.default.json());
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
