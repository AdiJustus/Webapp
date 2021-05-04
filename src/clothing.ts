export enum clothingTypes {
    TShirt = "T-Shirt",
    Shirt = "Shirt",
    Hoodie = "Hoodie",
    Sweater = "Sweater"
}

export enum clothingPreviewBox {
    tshirtBox = "previewBox",
    shirtBox = "previewBox2",
    hoodieBox = "previewBox3",
    sweaterBox = "previewBox4"
}

export const prices = {
[clothingTypes.TShirt]:20,
[clothingTypes.Shirt]:30,
}

const priceTShirt = prices[clothingTypes.TShirt];
const priceShirt = prices[clothingTypes.TShirt];