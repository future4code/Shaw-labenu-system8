import Hobby from "./Hobby";
import Usuario from "./Usuario";

class Estudante extends Usuario {

    constructor(
        protected id:string,
        public nome:string, 
        public email:string, 
        public data_nasc:Date, 
        public turma_id:string,
        public hobbies:Hobby[]
        ){
        super(id, nome, email, data_nasc, turma_id);
    }

}

export default Estudante;