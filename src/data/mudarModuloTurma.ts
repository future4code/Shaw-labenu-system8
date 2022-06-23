import { connection } from "../connection";

export async function mudarModuloTurma(idTurma:string, modulo:number){
console.log(idTurma); 
console.log(modulo)
 let response = await connection('Turma').where('id', '=', `${idTurma}`).update({modulo: modulo}); 
 console.log(response)
 
}