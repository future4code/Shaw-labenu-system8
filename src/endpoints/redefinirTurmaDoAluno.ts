import { Request, Response } from "express"
import * as data from "../data"

export const redefinirTurmaDoAluno = async (req: Request, res: Response) => {
    try {
        await data.atualizarTurmaEstudante(req.body.turma_id, req.params.id)
        res.status(200).send()
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}