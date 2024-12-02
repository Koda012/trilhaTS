interface Produto{
    nome: string;
    preco: number;
    quantidade: number;
    calcularTotal(): number;
}

class Calcular implements Produto{
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number){
        this.nome = nome
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    public calcularTotal():number {
        return this.preco * this.quantidade;
    }
}
const produtoT = new Calcular ("aaaa",10.5, 30);
console.log(produtoT.calcularTotal());