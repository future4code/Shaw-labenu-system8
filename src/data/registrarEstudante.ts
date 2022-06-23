import Estudante from "../classes/Estudante";
import { connection } from "../connection";

export const registrarEstudante = async (estudante: Estudante) => {
    const result = await connection("Estudante").insert({
        id: estudante.getId(),
        nome: estudante.nome,
        email: estudante.email,
        data_nasc: estudante.data_nasc,
        turma_id: estudante.turma_id
    })

    return result
}