import { Request, Response } from "express";
import { pesquisarDocente } from "../data/pesquisarDocente";


export const buscarDocente = async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
            

        const docente = await pesquisarDocente()
        res.status(201).send(docente) 


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