import { connection } from "../connection";

export async function mudarModuloTurma(idTurma:string, modulo:number){

 let response = await connection('Turma').where('id', '=', `${idTurma}`).update({modulo: modulo}); 
 
 
}