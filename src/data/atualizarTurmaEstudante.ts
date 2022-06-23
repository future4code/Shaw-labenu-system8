import { connection } from "../connection";

export const atualizarTurmaEstudante = async (turma_id: string, id:string) => {
    const result = await connection("Estudante").update({turma_id}).where({id})
    return result
}