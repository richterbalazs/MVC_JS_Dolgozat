import Model from "../Model/Model.js";
import View from "../View/View.js";


export default class Controller {
    constructor(){
        this.taroloELEM = $(".tartalom");
        this.model = new Model;
        new View(this.model.getList(), this.taroloELEM)
        this.#esemenyKezelo()
    }

    #esemenyKezelo(){
        $(window).on("kattintas",(event) =>{
            new View(this.model.getList(), this.taroloELEM);
        })
    }
}