import { Request, Response } from "express";
import {mudarTurmaDocente} from "../data/mudarTurmaDocente";

export const atualizarTurmaDocente = async (req: Request, res: Response)=>{
    let errorCode = 400;
    try{
        const {turma_id} = req.body
        const {id} = req.params 

        if(turma_id === undefined || turma_id === "number"){
            errorCode = 422;
            throw new Error ("Por favor, verifique se o nome da turma está correto") 
        }

       const resposta = await mudarTurmaDocente(turma_id, id) 
       res.status(201).send({message: "Mudança de Turma feita com sucesso!"})

    } catch (error:any) {
        if(!error.message){
            res.status(500).send({message: "Erro inesperado no servidor"})

        } else if(error.sqlMessage){
            res.status(400).send(error.sqlMessage)
        }else{
            res.status(errorCode).send({message: error.message}); 
        }
    }

}