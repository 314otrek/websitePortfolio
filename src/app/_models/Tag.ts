export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly LANGCHAIN = new Tag('LangChain', 'green');
    static readonly PYTHON = new Tag('Python', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'aqua');
    static readonly JAVASCRIPT = new Tag('JavaSCript', 'yellow');

    private constructor(private readonly key: string, public readonly color: string){

    }


    toString(){
        return this.key;
    }
}