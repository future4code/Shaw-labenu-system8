import Usuario from "./Usuario";

export default class Docente extends Usuario{
    constructor(
        protected id:string,
        public nome:string, 
        public email:string, 
        public data_nasc: Date, 
        public turma_id:string,
        //public especialidades:string[] - vem pelo body
    ){
        super(id, nome, email, data_nasc, turma_id);
    }

}
