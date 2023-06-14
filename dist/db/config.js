"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Funcionarios_1 = require("../models/Funcionarios");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "webacademy",
    password: "Web@cad123",
    database: "banco",
    logging: false,
    models: [Funcionarios_1.Funcionarios],
});
exports.default = connection;
