import { connection } from "../connection";

export const mudarTurmaDocente = async (turma_id: string, id:string) => {
    const resultado = await connection("Estudante").update({turma_id}).where({id})
    return resultado
}