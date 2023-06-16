import { Sequelize } from "sequelize-typescript";
import { Projetos } from "../models/Projetos";
import { Dependentes } from "../models/Dependentes";
import { Departamentos } from "../models/Departamentos";
import { Funcionarios } from "../models/Funcionarios";
import { Categoria } from "../models/Categoria";
import { Produto } from "../models/Produto";
import { Cliente } from "../models/Cliente"
import { Venda } from "../models/Venda"

const connection = new Sequelize({
    dialect: "mysql",
    port: 3308,
    host: "localhost",
    username: "webacademy",
    password: "Web@cad123",
    database: "banco",
    logging: false,
    models: [Produto, Categoria, Cliente, Venda, Funcionarios, Departamentos, Projetos, Dependentes],
});

export default connection;