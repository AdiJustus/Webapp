import { clothingTypes, priceTShirt, priceShirt, priceHoodie, priceSweater, tshirtBox, shirtBox, hoodieBox, sweaterBox, getSVG } from "./clothing";
import { sizeSelector, materialSelector, previewPrice, shoppingCartList, shoppingCartButton, sizeChartButton, resetButton, addToCartButton, overlay, totalPriceText } from "./dom-utils";


const priceSize: number[] = [0, 0, 0, 5, 5, 10];
const priceMaterial: number[] = [15, 10, 5];

let totalPrice: number = 0;
let lastPrice: number = 0;
let chosenClothing: number;
let clothes: string;
let color: string;

function output(e: UIEvent): void {
  hideElements();

  const target = e.target as HTMLImageElement;
  const typeOfClothing = target.id;
  clothes = typeOfClothing;

  changeColor("black");

  switch (typeOfClothing)  {

    case clothingTypes.TShirt:
      hideElements();
      tshirtBox.style.display = "inline";
      chosenClothing = priceTShirt;
      break;

    case clothingTypes.Shirt:
      hideElements();
      shirtBox.style.display = "inline";
      chosenClothing = priceShirt;
      break;

    case clothingTypes.Hoodie:
      hideElements();
      hoodieBox.style.display = "inline";
      chosenClothing = priceHoodie;
      break;

    case clothingTypes.Sweater:
      hideElements();
      sweaterBox.style.display = "inline";
      chosenClothing = priceSweater;
      break;
  }
  showPrice();
}

function hideElements() {
  tshirtBox.style.display = "none";
  shirtBox.style.display = "none";
  hoodieBox.style.display = "none";
  sweaterBox.style.display = "none";
}

function changeColor(e: string) {
  
  color = e;
 
   switch (clothes) {
 
     case clothingTypes.TShirt:
      const tshirt = document.querySelector("#inlinePath") as SVGElement;
      tshirt!.setAttribute("fill", color);
      break;
 
     case clothingTypes.Shirt:
      const shirt = document.querySelector("#inlinePath2") as SVGElement;
      shirt!.setAttribute("fill", color);
      break;
 
     case clothingTypes.Hoodie:
      const hoodie = document.querySelector("#inlinePath3") as SVGElement;
      hoodie!.setAttribute("fill", color);
      break;
 
     case clothingTypes.Sweater:
      const sweater = document.querySelector("#inlinePath4") as SVGElement;
      sweater!.setAttribute("fill", color);
      break;
   }
 }

function viewSizeChart(enabled: boolean) {
  if (enabled) {
    document.getElementById("overlay")!.style.display = "block";
  } else {
    document.getElementById("overlay")!.style.display = "none";
  }
}

function sizeSelection() {
  showPrice();
}

function materialSelection() {
  showPrice();
}

function showPrice() {
  lastPrice = 0;

  lastPrice += chosenClothing;

  lastPrice += priceSize[sizeSelector.selectedIndex];

  lastPrice += priceMaterial[materialSelector.selectedIndex];

  previewPrice!.innerHTML = "Price: " + lastPrice + "€";
}

function reset() {
  sizeSelector.selectedIndex = 0;
  materialSelector.selectedIndex = 0;
  hideElements();
  previewPrice!.innerHTML = "Preis: 0€";
  lastPrice = 0;
}

function addToShoppingCart() {
  let shoppingCartItemBox = document.createElement("div");

  switch (clothes) {
    
    case clothingTypes.TShirt:
      shoppingCartItemBox!.innerHTML = getSVG(clothes, color);
      break;

    case clothingTypes.Shirt:
      shoppingCartItemBox!.innerHTML = getSVG(clothes, color);
      break;

    case clothingTypes.Hoodie:
      shoppingCartItemBox!.innerHTML = getSVG(clothes, color);
      break;
    
    case clothingTypes.Sweater:
      shoppingCartItemBox!.innerHTML = getSVG(clothes, color);
      break;
  }

  updatePriceText(lastPrice);

  //set tooltip
  shoppingCartItemBox!.setAttribute("title", "Price: " + lastPrice + "€");  
  shoppingCartItemBox!.setAttribute("price", String(lastPrice));
  shoppingCartItemBox!.addEventListener("click", function () {
    const price = parseInt(this.getAttribute("price")!);
    updatePriceText(-price);
    
    this.remove();
  });
  shoppingCartList!.appendChild(shoppingCartItemBox);
}

function updatePriceText(price: number) {
  totalPrice += price;
  totalPriceText!.innerHTML = "Total price: " + totalPrice + "€";
}


//Function to remove items from shopping cart

function emptyShoppingCart() {
  while (shoppingCartList!.firstChild) {
    shoppingCartList!.firstChild.remove();
  }
}

//Initialize function

function initialize () {
  document.querySelectorAll<HTMLSpanElement>(".colorField").forEach((el)=> {el.addEventListener("click", function(){changeColor(el.id);});});
  document.querySelectorAll<HTMLImageElement>(".choice").forEach((el)=> {el.addEventListener("click", output)});  
  
  sizeChartButton.onclick = () => viewSizeChart(true);
  overlay.onclick = () => viewSizeChart(false);

  addToCartButton.onclick = () => addToShoppingCart();
  shoppingCartButton.onclick = emptyShoppingCart;
  
  materialSelector.onchange = () => materialSelection();
  sizeSelector.onchange = () => sizeSelection();

  resetButton.onclick = () => reset();
  
}

initialize();
