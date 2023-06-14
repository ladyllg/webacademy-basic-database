import { Funcionarios } from "../models/Funcionarios";
import { Departamentos } from "../models/Departamentos";

import { Router } from "express";
import { Request, Response } from "express";


const funcionariosRouter: Router = Router()
const departamentosRouter: Router = Router()

funcionariosRouter.get("/funcionarios", async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios[] = await Funcionarios.findAll()
    let fruits: string[] = ['Apple', 'Orange', 'Banana']
    return res.status(200).json(funcionarios)
});

departamentosRouter.post("/departamentos", async (req: Request, res: Response):
    Promise<Response> => {
    const departamento: Departamentos = await Departamentos.create({ ...req.body });
    return res.status(201).json(departamento);
});

export { funcionariosRouter, departamentosRouter }