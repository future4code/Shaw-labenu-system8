import { connection } from "../connection";

export const pesquisarDocente = async () => {
    const resultado = await connection("Docente").select('*'); 
    return resultado
}