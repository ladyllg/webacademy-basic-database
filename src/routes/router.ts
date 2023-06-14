import { Funcionarios } from "../models/Funcionarios";
import { Router } from "express";
import { Request, Response } from "express";

const funcionariosRouter: Router = Router()

funcionariosRouter.get("/funcionarios", async (req: Request, res: Response): Promise<Response> => {
    const funcionarios: Funcionarios[] = await Funcionarios.findAll()
    let fruits: string[] = ['Apple', 'Orange', 'Banana']
    return res.status(200).json(funcionarios)
});

export { funcionariosRouter }