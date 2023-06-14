import { Sequelize } from "sequelize-typescript";
import { Departamentos } from "../models/Departamentos";
import { Funcionarios } from "../models/Funcionarios";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "webacademy",
    password: "Web@cad123",
    database: "banco",
    logging: false,
    models: [Funcionarios, Departamentos],
});
export default connection;