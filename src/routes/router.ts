import { Produto } from "../models/Produto";
import { Categoria } from "../models/Categoria";
import { Cliente } from '../models/Cliente';
import { Funcionarios } from "../models/Funcionarios";
import { Departamentos } from "../models/Departamentos"

import { Router } from "express";
import { Request, Response } from "express";
import { Projetos } from "../models/Projetos";
import { Dependentes } from "../models/Dependentes";
import { Venda } from "../models/Venda";

const categoriaRouter: Router = Router()
const produtosRouter: Router = Router()
const clientesRouter: Router = Router()
const vendasRouter: Router = Router()

const funcionariosRouter: Router = Router()
const departamentosRouter: Router = Router()
const dependenteRouter: Router = Router()
const projetoRouter: Router = Router()

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
categoriaRouter.get("/categorias/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const categoria: Categoria | null = await Categoria.findByPk(id);
    return res.status(201).json(categoria);
});
categoriaRouter.put("/categorias/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Categoria.update({ ...req.body }, { where: { id } });
    const updatedCategoria: Categoria | null = await Categoria.findByPk(id);
    return res.status(200).json(updatedCategoria);
});
categoriaRouter.delete("/categorias/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedCategoria: Categoria | null = await Categoria.findByPk(id);
    await Categoria.destroy({ where: { id } });
    return res.status(200).json(deletedCategoria);
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
clientesRouter.get("/clientes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const cliente: Cliente | null = await Cliente.findByPk(id);
    return res.status(201).json(cliente);
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
});

// VENDAS
vendasRouter.get("/vendas", async (req: Request, res: Response): Promise<Response> => {
    const vendas: Venda[] = await Venda.findAll()
    return res.status(200).json(vendas)
});
vendasRouter.post("/vendas", async (req: Request, res: Response): Promise<Response> => {
    const venda: Venda = await Venda.create({ ...req.body });
    return res.status(200).json(venda)
});

vendasRouter.delete("/vendas/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedVenda: Venda | null = await Venda.findByPk(id);
    await Cliente.destroy({ where: { id } });
    return res.status(200).json(deletedVenda);
});

// FUNCIONARIOS
funcionariosRouter.get("/funcionarios", async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios[] = await Funcionarios.findAll()
    let fruits: string[] = ['Apple', 'Orange', 'Banana']
    return res.status(200).json(funcionarios)
});
funcionariosRouter.post("/funcionarios", async (req: Request, res: Response): Promise<Response> => {
    const funcionario: Funcionarios = await Funcionarios.create({ ...req.body });
    return res.status(200).json(funcionario)
});
funcionariosRouter.put("/funcionarios/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Funcionarios.update({ ...req.body }, { where: { id } });
    const updatedFuncionario: Funcionarios | null = await Funcionarios.findByPk(id);
    return res.status(200).json(updatedFuncionario);
});
funcionariosRouter.delete("/clientes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedFuncionario: Funcionarios | null = await Funcionarios.findByPk(id);
    await Cliente.destroy({ where: { id } });
    return res.status(200).json(deletedFuncionario);
});

// Projetos
projetoRouter.get("/projetos", async (req: Request, res: Response): Promise<Response> => {
    const projetos: Projetos[] = await Projetos.findAll()
    return res.status(200).json(projetos)
});
projetoRouter.post("/projetos", async (req: Request, res: Response): Promise<Response> => {
    const projeto: Projetos = await Projetos.create({ ...req.body });
    return res.status(200).json(projeto)
});
projetoRouter.put("/projetos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Projetos.update({ ...req.body }, { where: { id } });
    const updatedProjeto: Projetos | null = await Projetos.findByPk(id);
    return res.status(200).json(updatedProjeto);
});
projetoRouter.delete("/projetos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedProjeto: Projetos | null = await Projetos.findByPk(id);
    await Projetos.destroy({ where: { id } });
    return res.status(200).json(deletedProjeto);
});

// Departamento
departamentosRouter.get("/departamentos", async (req: Request, res: Response): Promise<Response> => {
    const departamentos: Departamentos[] = await Departamentos.findAll();
    return res.status(201).json(departamentos);
});
departamentosRouter.get("/departamentos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const departamento: Departamentos | null = await Departamentos.findByPk(123, {
        include: Funcionarios,
    });
    return res.status(201).json(departamento);
});
departamentosRouter.post("/departamentos", async (req: Request, res: Response): Promise<Response> => {
    const departamento: Departamentos = await Departamentos.create({ ...req.body });
    return res.status(200).json(departamento)
});
departamentosRouter.put("/departamentos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Departamentos.update({ ...req.body }, { where: { id } });
    const updatedDepartamento: Departamentos | null = await Departamentos.findByPk(id);
    return res.status(200).json(updatedDepartamento);
});
departamentosRouter.delete("/departamentos/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedDepartamento: Departamentos | null = await Departamentos.findByPk(id);
    await Departamentos.destroy({ where: { id } });
    return res.status(200).json(deletedDepartamento);
});

// Dependente
dependenteRouter.post("/dependentes", async (req: Request, res: Response): Promise<Response> => {
    const dependentes: Dependentes = await Dependentes.create({ ...req.body });
    return res.status(201).json(dependentes);
});
dependenteRouter.post("/dependentes", async (req: Request, res: Response): Promise<Response> => {
    const dependente: Dependentes = await Dependentes.create({ ...req.body });
    return res.status(200).json(dependente)
});
dependenteRouter.put("/dependentes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await Dependentes.update({ ...req.body }, { where: { id } });
    const updatedDependente: Dependentes | null = await Dependentes.findByPk(id);
    return res.status(200).json(updatedDependente);
});
dependenteRouter.delete("/dependentes/:id", async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const deletedDependente: Dependentes | null = await Dependentes.findByPk(id);
    await Dependentes.destroy({ where: { id } });
    return res.status(200).json(deletedDependente);
});

export { funcionariosRouter, departamentosRouter, produtosRouter, categoriaRouter, clientesRouter, dependenteRouter, vendasRouter }