import { zeneLista } from "./adat.js";

export default class Model {
    #lista = [];
    #index;
    #kosarlista = [];
    #db

    constructor(){
        this.#lista = zeneLista;
        
    }

    setLista(id, ertek) {
        for (let index = id-1; index < this.#lista.length; index++) {
            ertek--;
        }
      }

    getList(){
        return this.#lista;
    }
}