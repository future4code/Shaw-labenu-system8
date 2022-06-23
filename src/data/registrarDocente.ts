import Docente from "../classes/Docente";
import { connection } from "../connection";

export const registrarDocente = async (docente: Docente)=> {
    let resposta = await connection ("Docente").insert({
        id: docente.getId(),
        nome: docente.nome,
        email: docente.email,
        data_nasc: docente.data_nasc,
        turma_id: docente.turma_id
    })

    return resposta
}