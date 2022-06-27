import Usuario from "./Usuario";

export enum Especialidades{
    JS = "JS", 
    CSS = "CSS",
    REACT = "React",
    TYPESCRIPT = "Typescript",
    POO = 'POO (Programação Orientada a Objetos)'  
}

export default class Docente extends Usuario{

    public especialidades:Especialidades[] = [];
    constructor(
        protected id:string,
        public nome:string, 
        public email:string, 
         data_nasci: string, 
        public turma_id:string,
        esps:Especialidades[]
        
    ){
        let data_nasc = new Date(Date.parse(data_nasci))
        super(id, nome, email, data_nasc, turma_id);
        for(let esp of esps)
        {
            this.especialidades.push(esp)
        }
    }



}
