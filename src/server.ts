import express from "express";
import { dependenteRouter, funcionariosRouter, departamentosRouter, produtosRouter, categoriaRouter, clientesRouter } from "./routes/router";

const routes = [
    funcionariosRouter,
    departamentosRouter,
    produtosRouter,
    categoriaRouter,
    clientesRouter,
    dependenteRouter
]

export class Api {
    public server: express.Application;
    constructor() {
        this.server = express();
        this.middleware();
        this.router();
    }
    private middleware() {
        this.server.use(express.json());
    }
    private router() {
        this.server.use(routes);
    }
}