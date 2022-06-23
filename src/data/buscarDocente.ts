import { connection } from "../connection";

export const buscarDocente = async (nome: string) => {
    const resultado = await connection("Estudante").where('nome', 'like', `%${nome}%`)
    return resultado
}