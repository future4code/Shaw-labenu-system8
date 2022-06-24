import { connection } from "../connection";

export const pesquisarDocente = async (nome: string) => {
    const resultado = await connection("Estudante").where('nome', 'like', `%${nome}%`)
    return resultado
}