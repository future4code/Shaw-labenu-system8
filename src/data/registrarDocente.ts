import Docente from "../classes/Docente";
import { connection } from "../connection";
import { v4 as uuidv4 } from 'uuid';

export const registrarDocente = async (docente: Docente)=> {

    //criar docente
    let resposta = await connection ("Docente").insert({
        id: docente.getId(),
        nome: docente.nome,
        email: docente.email,
        data_nasc: docente.data_nasc,
        turma_id: docente.turma_id
    })

    //iterar por array de especialidades, achar o id equivalente da especialidade da tabela Especialidade, e inserir valor na tabela 
    //Docente-Especialidade
    for(let especialidade of docente.especialidades)
    {
        //obter id da tabela 'Especialidade
         await connection('Especialidade').select('id').whereRaw(`nome = '${especialidade}'`).then( (response) => {
            console.log(response[0].id)
             //registrar na tabela Docente_Especialidade
             let id = uuidv4();
             let docente_id = docente.getId();

             //fazer async function de inserir na tabela 
             let Docente_Especialidade = async () => { await connection('Docente_Especialidade').insert({
                 id,
                 docente_id,
                 especialidade_id: response[0].id
             })}

             Docente_Especialidade()
         })
        
    }


    return resposta
}