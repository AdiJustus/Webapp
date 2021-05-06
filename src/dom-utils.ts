//Outsorcing HTML elemtens
export let previewPrice = document.getElementById("previewPrice");
//export const clothing = document.getElementsByClassName("clothing");
export const size = document.getElementsByClassName("sizeSelection");
export const colorFields = (document.querySelectorAll(".colorField") as unknown) as Array<HTMLElement>;
export const shoppingCartList = document.getElementById("shoppingCart");
export const sizeSelector = document.getElementById("sizeSelector") as HTMLSelectElement;
export const materialSelector = document.getElementById("materialSelector") as HTMLSelectElement;
export const shoppingCartButton = document.getElementById("shoppingCartButton") as HTMLButtonElement;
export const sizeChartButton = document.getElementById("sizeChartButton") as HTMLButtonElement;
export const resetButton = document.getElementById("reset") as HTMLButtonElement;
export const addToCartButton = document.getElementById("addToCart") as HTMLButtonElement;
export const overlay = document.getElementById("overlay") as HTMLButtonElement;