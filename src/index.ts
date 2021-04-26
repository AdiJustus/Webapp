let previewBox = document.getElementById("previewBox") as HTMLInputElement;
const Kleidung = document.getElementsByClassName("Kleidung");
const Tshirt = document.querySelector("#tshirt") as HTMLImageElement;
const color = document.querySelector("#colorMaker") as HTMLInputElement;
color.addEventListener("change", addColor);

function ausgabe(ArtDerKleidung:string):void {
    console.log(ArtDerKleidung);
    if (ArtDerKleidung === 'T-Shirt') {
        previewBox.innerHTML = '<img src="../Bilder/tshirt.svg" class="Kleidung">';
        console.log("T-Shirt");
    }
    else if (ArtDerKleidung === 'Shirt') {
        previewBox.innerHTML = '<img src="../Bilder/shirts.svg">';
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

function addColor() {
    Tshirt.style.color = color.value;
}

