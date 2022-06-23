export class Turma {

    constructor(
        protected id:string, 
        public nome:string, 
        public modulo:number
    ){}

    getId():string{
        return this.id; 
    }
}



export class TurmaAtiva extends Turma{

    protected estudantes:number[] = []
    protected docentes:number[] = []
    constructor(
        id:string, 
        nome:string, 
        modulo:number, 
    ){
        super(id,nome,modulo); 
        
    }

    getEstudantes():number[]{
        return this.estudantes; 
    }

    getDocentes():number[]{
        return this.docentes; 
    }

    setEstudantes(novosEstudantes:number[]):void{
        this.estudantes = novosEstudantes; 
    }
}


//app.post("/turma",registrarTurma)
//app.put("/turma/:turmaId", mudarTurmaDeModulo)
//app.get("/turma", buscarTurmas) devolve todas as turmas
//app.get("/turma?Active=true") devolve turmas ativas (modulo acima de 0)
//app.get("turma?Active=false") devolve turmas inativas (modulo igual a zero)