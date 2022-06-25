class Hobby{
    protected id:string = ''
    constructor(
        public nome:string
    ){
    }

    getId():string{
        return this.id; 
    }

    setId(id:string):void{
        this.id = id 
    }
}

export default Hobby; 