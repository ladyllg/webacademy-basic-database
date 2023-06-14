import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/Funcionarios";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "webacademy",
    password: "Web@cad123",
    database: "banco",
    logging: false,
    models: [Funcionarios],
});
export default connection;