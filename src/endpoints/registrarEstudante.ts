import { Request, Response } from "express"
import * as data from "../data"
import { v4 as uuidv4 } from 'uuid';
import Estudante from "../classes/Estudante";

export const registrarEstudante = async (req: Request, res: Response) => {
    try {
        const estudante = new Estudante(uuidv4(), req.body.nome, req.body.email, new Date(req.body.data_nasc), req.body.turma_id)
        const result = await data.registrarEstudante(estudante)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}