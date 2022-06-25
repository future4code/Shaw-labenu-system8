import Estudante from "../classes/Estudante";
import Hobby from "../classes/Hobby";
import { connection } from "../connection";
import { v4 as uuidv4 } from 'uuid';

const verificarHobby = async (estudante: Estudante) => {
    estudante.hobbies.map(async(hobby) => {
        const existe:any = await connection('Hobby').select().where({nome: hobby.nome})
        if(existe.length){
            hobby.setId(existe[0].id)
        }else {
            const id = uuidv4()
            await connection('Hobby').insert({
                nome: hobby.nome,
                id: id
            })
            hobby.setId(id)
        }
        return hobby
    })
    return estudante
}

const adicionaHobby = async(estudante: Estudante) => {
    estudante.hobbies.forEach(async(hobby) => {
        await connection('Estudante_Hobby').insert({
        id: uuidv4(),
        estudante_id: estudante.getId(),
        hobby_id: hobby.getId()
        })
    })
}

export const registrarEstudante = async (e: Estudante) => {
    const estudante = await verificarHobby(e)
    console.log(estudante.hobbies)
    await connection("Estudante").insert({
        id: estudante.getId(),
        nome: estudante.nome,
        email: estudante.email,
        data_nasc: estudante.data_nasc,
        turma_id: estudante.turma_id
    })
    await adicionaHobby(estudante)
}