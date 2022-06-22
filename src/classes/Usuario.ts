//classe abstrata usuario que vai ser pai de docente e estudante 
//abstrata porq n tem tabela para ele, e nao vamos fazer instancia dele


abstract class Usuario{
    constructor(
        protected id:string,
        public nome:string, 
        public email:string, 
        public data_nasc:Date, 
        public turma_id:string
    ){
    }

    getId():string{
        return this.id; 
    }
}

export default Usuario; 