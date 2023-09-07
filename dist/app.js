"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT || 1200;
app.get('/', (req, res) => {
    res.status(200).json("Hello Done With TypeScript");
});
app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
