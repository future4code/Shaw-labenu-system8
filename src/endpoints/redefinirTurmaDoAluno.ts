import { Request, Response } from "express"
import * as data from "../data"

export const redefinirTurmaDoAluno = async (req: Request, res: Response) => {
    try {
        if(!req.body.turma_id){
            throw new Error("A turma precisa ser válida para alterar o aluno de sala")
        }
        await data.atualizarTurmaEstudante(req.body.turma_id, req.params.id)
        res.status(200).send({message: "Mudança de turma feita com successo!"})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}