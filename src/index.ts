let previewBox = document.getElementById("previewBox") as HTMLInputElement;
const Kleidung = document.getElementsByClassName("Kleidung");
const Tshirt = document.querySelector("#tshirt") as SVGElement;
const color = document.querySelector("#colorMaker") as HTMLInputElement;
const colorFields = document.querySelectorAll(".colorField") as unknown as Array<HTMLElement>;
var kleidung: string;

function changeColor(color:string) {
    if (kleidung === 'T-Shirt') {
        const tshirt = document.querySelector("#inlinePath") as SVGElement;
        tshirt!.setAttribute("fill", color);
    } else if (kleidung === 'Shirt') {
        const shirt = document.querySelector("#inlinePath2") as SVGElement;
        shirt!.setAttribute("fill", color);
    }
}

function hideElements() {

    const tshirt = document.querySelector("#previewBox") as HTMLElement;
    tshirt!.style.display = "none";

    const shirt = document.querySelector("#previewBox2") as HTMLElement;
    shirt!.style.display = "none";

}

function ausgabe(ArtDerKleidung:string):void {
    hideElements();
    console.log(ArtDerKleidung);
    kleidung = ArtDerKleidung;
    if (ArtDerKleidung === 'T-Shirt') {
        const tshirt = document.querySelector("#previewBox") as HTMLElement;
        tshirt!.style.display = "inline";
        console.log("T-Shirt");
    }
    else if (ArtDerKleidung === 'Shirt') {
        const shirt = document.querySelector("#previewBox2") as HTMLElement;
        shirt!.style.display = "inline";
        console.log("Shirt");
    }
    else if (ArtDerKleidung === 'Hoodie') {
        previewBox.innerHTML = '<img src="../Bilder/hoodie.svg">';
        console.log("Hoodie");
    }
    else if (ArtDerKleidung === 'Sweater') {
        previewBox.innerHTML = '<img src="../Bilder/sweater.svg">';
        console.log("Sweater");
    }
}


