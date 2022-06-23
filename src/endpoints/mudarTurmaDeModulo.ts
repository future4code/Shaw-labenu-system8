import { Request, Response } from "express";
import { mudarModuloTurma } from "../data/mudarModuloTurma";


export let mudarTurmaDeModulo  = async (req:Request, res:Response) =>{
    let statusCode = 400; 
    
    try {
         
        let {modulo} = req.body; 
        let id = req.params.turmaId as string; 


        //tratativa de erros em modulo
        if(modulo === undefined) throw new Error("Por favor inserir campo 'modulo' com o novo modulo da turma"); 

        if(typeof modulo !== "number") throw new Error("Modulo deve ser do formato number"); 

        if(modulo <=0 || modulo >= 7) throw new Error("Modulo invalido, deve ser entre 1-6"); 

        mudarModuloTurma(id,modulo).then( ()=> {
            res.status(200).send({message: "Turma atualizada!"})
        })
       
    } catch (error:any) {
        if(!error.message)
        {
            res.status(500).send({message: "Erro inesperado no servidor"})
        }

        else if(error.sqlMessage)
        {
            res.status(400).send(error.sqlMessage)
        } 
        else {
            res.status(statusCode).send({message: error.message}); 
        }
    }
}