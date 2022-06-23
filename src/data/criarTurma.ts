import { Turma } from "../classes/Turma";
import { connection } from "../connection";

export async function criarTurma(novaTurma:Turma){

    let response = await connection('Turma').insert(novaTurma); 
    return response; 
}