import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";
import { Cliente } from '../models/Cliente';

import { Router } from "express";
import { Request, Response } from "express";

const categoriaRouter: Router = Router()
const produtosRouter: Router = Router()
const clientesRouter: Router = Router()

// CATEGORIAS 

categoriaRouter.get("/categorias", async (req: Request, res: Response): Promise<Response> => {
    const categorias: Categoria[] = await Categoria.findAll()
    console.log()
    return res.status(200).json(categorias)
});

categoriaRouter.post("/categorias", async (req: Request, res: Response): Promise<Response> => {
    const categoria: Categoria = await Categoria.create({ ...req.body });
    return res.status(200).json(categoria)
});

categoriaRouter.put("/categorias/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Categoria.update({ ...req.body }, { where: { id } });
    const updatedCategoria: Categoria | null = await Categoria.findByPk(id);
    return res.status(200).json(updatedCategoria);
});

categoriaRouter.delete("/categorias/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedDepartamento: Categoria | null = await Categoria.findByPk(id);
    await Categoria.destroy({ where: { id } });
    return res.status(200).json(deletedDepartamento);
    }
);

// PRODUTOS
produtosRouter.get("/produtos", async (req: Request, res: Response): Promise<Response> => {
    const produtos: Produto[] = await Produto.findAll()
    return res.status(200).json(produtos)
});

produtosRouter.post("/produtos", async (req: Request, res: Response): Promise<Response> => {
    const produto: Produto = await Produto.create({ ...req.body });
    return res.status(200).json(produto)
});

produtosRouter.put("/produtos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Produto.update({ ...req.body }, { where: { id } });
    const updatedProduto: Produto | null = await Produto.findByPk(id);
    return res.status(200).json(updatedProduto);
});

produtosRouter.delete("/produtos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedProduto: Produto | null = await Produto.findByPk(id);
    await Produto.destroy({ where: { id } });
    return res.status(200).json(deletedProduto);
    }
);

// CLIENTE
clientesRouter.get("/clientes", async (req: Request, res: Response): Promise<Response> => {
    const clientes: Cliente[] = await Cliente.findAll()
    return res.status(200).json(clientes)
});

clientesRouter.post("/clientes", async (req: Request, res: Response): Promise<Response> => {
    const cliente: Cliente = await Cliente.create({ ...req.body });
    return res.status(200).json(cliente)
});

clientesRouter.put("/clientes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Cliente.update({ ...req.body }, { where: { id } });
    const updatedCliente: Cliente | null = await Cliente.findByPk(id);
    return res.status(200).json(updatedCliente);
});

clientesRouter.delete("/clientes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedCliente: Cliente | null = await Cliente.findByPk(id);
    await Cliente.destroy({ where: { id } });
    return res.status(200).json(deletedCliente);
    }
);

export { produtosRouter, categoriaRouter, clientesRouter }