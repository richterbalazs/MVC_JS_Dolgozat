import Model from "../Model/Model";
import View from "../View/View";
import { zeneLista } from "../Model/adat.js";

export default class Controller {
    constructor(){
        this.#adatTer = $(".adatok");
        this.model = new Model;
        new View(this.model.getList(), this.adatok)
        this.#esemenyKezelo()
    }

    esemenyKezelo(){
        $(window).on("kattintas",(event) =>{
            new View(this.model.getList(), this.adatTer);
        })
    }
}