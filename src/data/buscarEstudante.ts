import { connection } from "../connection";

export const buscarEstudante = async (nome:string) => {
    const result = await connection("Estudante").where('nome', 'like', `%${nome}%`)
    return result
}