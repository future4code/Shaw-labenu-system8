import { Request, Response } from "express"
import * as data from "../data"
import { v4 as uuidv4 } from 'uuid';
import Estudante from "../classes/Estudante";
import Hobby from "../classes/Hobby";

export const registrarEstudante = async (req: Request, res: Response) => {
    try {
        if(!req.body.nome || !req.body.email || !req.body.data_nasc || !req.body.turma_id || !req.body.hobbies){
            throw new Error("Os campos precisam ser devidamente preenchidos")
        }
        if(typeof req.body.nome === "string"){
            throw new Error("O campo nome deve ser um texto")
        }
        if(typeof req.body.email === "string"){
            throw new Error("O campo email deve ser um texto")
        }
        if(typeof req.body.data_nasc === "string"){
            throw new Error("O campo data de nascimento deve ser no formato AAAA/MM/DD")
        }
        if(typeof req.body.turma_id === "string"){
            throw new Error("O campo turma_id deve ser um texto")
        }
        const hobbies = req.body.hobbies.map((hobby:string) => {
            return new Hobby(hobby)
        })
        const estudante = new Estudante(uuidv4(), req.body.nome, req.body.email, new Date(req.body.data_nasc), req.body.turma_id, hobbies)
        const result = await data.registrarEstudante(estudante)

        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}