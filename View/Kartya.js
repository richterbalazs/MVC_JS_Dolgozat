export default class Kartya {
    #allapot;
    #index;
    #szuloElem;

    constructor(allapot, index, szuloElem) {
        this.#allapot = allapot;
        this.#index = index;
        this.#szuloElem = szuloElem;
        this.kiir();
        this.gombElem = $(".card:last")
        this.#kosarba();
        this.#kattintasEsemeny();
    }

    kiir(){
        this.#szuloElem.append(`
        <div class="card col-lg-3" id="box">
        <p class="card-text"></p>
        <div><button id="${i}" class="kosarba">Kosárba</button></div>
        </div>`)
    };

    #kosarba(){
        if(this.#allapot) {
            
        }
    }

    #kattintasEsemeny(){
        this.gombElem.on("click", () =>{
            const e = new CustomEvent("kattintas", { detail: this.#index});
            window.dispatchEvent(e);
        });
    }
}
