"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionariosRouter = void 0;
const Funcionarios_1 = require("../models/Funcionarios");
const express_1 = require("express");
const funcionariosRouter = (0, express_1.Router)();
exports.funcionariosRouter = funcionariosRouter;
funcionariosRouter.get("/funcionarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const funcionarios = yield Funcionarios_1.Funcionarios.findAll();
    let fruits = ['Apple', 'Orange', 'Banana'];
    return res.status(200).json(funcionarios);
}));
