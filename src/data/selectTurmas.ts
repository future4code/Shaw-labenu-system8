import { connection } from "../connection";

export async function selectTurmas(isActive:boolean|undefined) {
        if(isActive === true) {
            let response = await connection('Turma').select('*').where('modulo', '>', 0);
            return response
        }
        else if(isActive === false){
            let response = await connection('Turma').select('*').where('modulo', '=', 0);
            return response
        }

        else{
            let response = await connection('Turma').select('*'); 
            return response; 
        }
}