let previewBox = document.getElementById("previewBox") as HTMLInputElement;
const Kleidung = document.getElementsByClassName("Kleidung");
const size = document.getElementsByClassName("sizeSelection");
const Tshirt = document.querySelector("#tshirt") as SVGElement;
const colorFields = document.querySelectorAll(".colorField") as unknown as Array<HTMLElement>;
/*const enum Clothings {
    tshirt = 'T-Shirt',
    tshirt = 'T-Shirt',
    hoodie = 'Hoodie',
    pulli = 'Sweater'
    }
    */
let preisKleidung: number;

var kleidung: string;

function changeColor(color:string) {

    if (kleidung === 'T-Shirt') {

        const tshirt = document.querySelector("#inlinePath") as SVGElement;
        tshirt!.setAttribute("fill", color);

    } 
    else if (kleidung === 'Shirt') {

        const shirt = document.querySelector("#inlinePath2") as SVGElement;
        shirt!.setAttribute("fill", color);

    }
    else if (kleidung === 'Hoodie') {

        const hoodie = document.querySelector("#inlinePath3") as SVGElement;
        hoodie!.setAttribute("fill", color);

    }
    else if (kleidung === 'Sweater') {

        const sweater = document.querySelector("#inlinePath4") as SVGElement;
        sweater!.setAttribute("fill", color);

    }
}

function hideElements() {

    const tshirt = document.querySelector("#previewBox") as HTMLElement;
    tshirt!.style.display = "none";

    const shirt = document.querySelector("#previewBox2") as HTMLElement;
    shirt!.style.display = "none";

    const hoodie = document.querySelector("#previewBox3") as HTMLElement;
    hoodie!.style.display = "none";

    const sweater = document.querySelector("#previewBox4") as HTMLElement;
    sweater!.style.display = "none";

}

function ausgabe(ArtDerKleidung:string):void {

    hideElements();

    kleidung = ArtDerKleidung;

    if (ArtDerKleidung === 'T-Shirt') {

        const tshirt = document.querySelector("#previewBox") as HTMLElement;
        tshirt!.style.display = "inline";
        preisKleidung = 10;

    }

    else if (ArtDerKleidung === 'Shirt') {

        const shirt = document.querySelector("#previewBox2") as HTMLElement;
        shirt!.style.display = "inline";
        preisKleidung = 20;

    }

    else if (ArtDerKleidung === 'Hoodie') {

        const hoodie = document.querySelector("#previewBox3") as HTMLElement;
        hoodie!.style.display = "inline";
        preisKleidung = 30;
    }

    else if (ArtDerKleidung === 'Sweater') {

        const sweater = document.querySelector("#previewBox4") as HTMLElement;
        sweater!.style.display = "inline";
        preisKleidung = 40;
    }
}

function viewSizeChart() {
    document.getElementById("overlay")!.style.display = "block";
  }
  
function hideSizeChart() {
    document.getElementById("overlay")!.style.display = "none";
  }



  function rabatt() {
    preisKleidung = preisKleidung + 5;
    console.log(preisKleidung);
    
  }

  function extraKosten() {
    preisKleidung +5;
}

    

