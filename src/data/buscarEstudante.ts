import { connection } from "../connection";
export const buscarEstudante = async (nome:string) => {
    const estudante = await connection("Estudante").where('nome', 'like', `%${nome}%`)
    const hobbies = await connection
        .select('Hobby.id', 'Hobby.nome')
        .from('Estudante_Hobby')
        .rightJoin('Hobby', function(){
            this.on('Estudante_Hobby.hobby_id', '=', 'Hobby.id')
        })
        .where('estudante_id', '=', estudante[0].id)
    return {
        ...estudante[0],
        hobbies
    }
}