export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly LANGCHAIN = new Tag('LangChain', 'green');
    static readonly PYTHON = new Tag('Python', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'aqua');
    static readonly JAVASCRIPT = new Tag('JavaSCript', 'yellow');
    static readonly STREAMLIT = new Tag('Streamlit', 'purple');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'rgb(105, 150, 38)');
    static readonly HTML = new Tag('HTML', 'pink');
    static readonly CSS = new Tag('CSS', 'blue');

    private constructor(private readonly key: string, public readonly color: string){

    }


    toString(){
        return this.key;
    }
}