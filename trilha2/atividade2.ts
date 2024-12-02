interface Livro {
    titulo: string;
    autor: string;
    lido: boolean;
    paginas: number;
    marcarlido():void;
}
class Biblioteca implements Livro {
    titulo: string;
    autor: string;
    lido: boolean;
    paginas: number;

    constructor(titulo: string, autor: string, paginas: number, lido:boolean = false){
        this.titulo = titulo;
        this.autor = autor;
        this.lido = lido;
        this.paginas = paginas;
    }
    public marcarlido(): void{
        this.lido = true;
    }
}
const livroA = new Biblioteca("a", "a", 10);
livroA.marcarlido();

console.log(livroA.lido);