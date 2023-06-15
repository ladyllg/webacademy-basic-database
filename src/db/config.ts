import { Sequelize } from "sequelize-typescript";
import { Categoria } from "../models/Categoria";
import { Produto } from "../models/Produto";
import { Cliente } from "../models/Cliente"
import { Venda } from "../models/Venda"

const connection = new Sequelize({
    dialect: "mysql",
    port: 3308,
    host: "localhost",
    username: "ladylaura",
    password: "d7f593",
    database: "banco",
    logging: false,
    models: [Produto, Categoria, Cliente, Venda],
});
export default connection;