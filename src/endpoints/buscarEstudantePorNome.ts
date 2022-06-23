import { Request, Response } from "express"
import { buscarEstudante } from "../data"

export const buscarEstudantePorNome = async (req: Request, res: Response) => {
    try {
        const nome = req.params.nome
        const estudante = await buscarEstudante(nome)

        res.status(200).send(estudante)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}