
import { Request, Response } from "express";
import { selectTurmas } from "../data/selectTurmas";



export let buscarTurmas  = async (req:Request, res:Response) =>{
    let statusCode = 400; 
    let Active:boolean|undefined; 
    
    try {
        if(req.query.Active && (req.query.Active as string).toLowerCase() === 'true') Active = true; 
        else if(req.query.Active && (req.query.Active as string).toLowerCase() === 'false') Active = false; 
        else Active = undefined; 

        let response = await selectTurmas(Active); 
        
        res.status(200).send(response); 

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