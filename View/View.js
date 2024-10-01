import Kartya from "./Kartya.js";

export default class View{
    #lista = [];
    #szuloElem;

    constructor(lista, szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.kiir();
    }

    kiir(){
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, index, this.#szuloElem);
        })
    }

 
}