"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bicycle_route_1 = require("./modules/bicycle/bicycle.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use('/api/v1/products', bicycle_route_1.ProductRoutes);
const getAController = (req, res) => {
    const a = 10;
    res.send(a);
};
app.get('/', getAController);
exports.default = app;
