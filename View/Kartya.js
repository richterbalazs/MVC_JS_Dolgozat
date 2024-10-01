export default class Kartya{
    #objektumAdat;
    #index
    #szuloElem;

    constructor(objektum, index, szuloElem){
        this.#objektumAdat = objektum;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.kepOsszeallit();
        this.kattintottElem = $(".card:last-child");
        this.kosarba = $(".kosarba:last-child")
        this.kattintasEsemeny();
    }

    kepOsszeallit(){
        this.szuloElem.append(`
        <div class="card col-3 col-md-4">
        <div class="card-body">
            <h1 class="card-text">${this.#objektumAdat.eloado}</h1>
            <h3 class="card-title">${this.#objektumAdat.cim}</h3>
            <div class="card-body"><img src="${this.#objektumAdat.kep}"class="kepek" ></div>
            <button type="button" class="btn btn-success">Kosárba</button>
        </div>
        </div>`)
    }

    kosarbaRak() {
        this.kosGomb.on("click", () => {
          const e = new CustomEvent("kosarba", { detail: this.#index });
          window.dispatchEvent(e);
          console.log("Kosárba téve")
        });
      }
      
    kattintasEsemeny(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail:this.#index});
            window.dispatchEvent(e);
            console.log("Sikeres kattintás");
        })
    }
}