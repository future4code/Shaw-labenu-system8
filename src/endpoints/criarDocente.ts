import { Request, Response } from "express";
// import * as data from "../data";
import { v4 as uuidv4 } from 'uuid';
import Docente from "../classes/Docente";
import { registrarDocente } from "../data/registrarDocente";

export const criarDocente = async (req: Request, res: Response) => {    
    let errorCode: number = 400;
    try {
        let id = uuidv4();        
        let {nome, email, data_nasc, turma_id} = req.body;
        
        if (!id || !nome || !email || !new Date(data_nasc) || !turma_id) {
        errorCode = 422;

        throw new Error ("Por favor, confira o preenchimento dos campos")
        };
        
        let novoDocente = new Docente (
            id,
            nome,
            email,
            data_nasc,
            turma_id
        );
    
        // const resposta = await data.criarDocente(novoDocente)
        registrarDocente(novoDocente).then((response)=>{
            res.status(201).send({message: "Docente registrado", docente: novoDocente})

        }).catch( (error) => {
            console.log(error); 
        })      
        
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