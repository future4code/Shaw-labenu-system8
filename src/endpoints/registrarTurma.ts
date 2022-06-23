import { Request, Response } from "express";
import {v4 as uuidv4} from 'uuid'; 
import { Turma } from "../classes/Turma";
import { criarTurma } from "../data/criarTurma";


export let registrarTurma = async (req:Request, res:Response) =>{
    let statusCode = 400; 
    
    try {
         
        let {nome} = req.body; 

        if(!nome) throw new Error("Turma tem que ter um nome!"); 
        if(typeof nome !== "string") throw new Error("Nome deve ser do formato string"); 

        let id = uuidv4(); 
        let modulo:number = 0;  

        let novaTurma = new Turma(id,nome,modulo); 
        criarTurma(novaTurma).then( (response) => {
            res.status(201).send({message: "Turma Criada!",
                                  turma: novaTurma })
        }).catch( (error) => {
            console.log(error); 
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