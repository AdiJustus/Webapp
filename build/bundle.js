(function () {
    'use strict';

    var clothingTypes;
    (function (clothingTypes) {
        clothingTypes["TShirt"] = "T-Shirt";
        clothingTypes["Shirt"] = "Shirt";
        clothingTypes["Hoodie"] = "Hoodie";
        clothingTypes["Sweater"] = "Sweater";
    })(clothingTypes || (clothingTypes = {}));
    var clothingPreviewBox;
    (function (clothingPreviewBox) {
        clothingPreviewBox["tshirtBox"] = "previewBox";
        clothingPreviewBox["shirtBox"] = "previewBox2";
        clothingPreviewBox["hoodieBox"] = "previewBox3";
        clothingPreviewBox["sweaterBox"] = "previewBox4";
    })(clothingPreviewBox || (clothingPreviewBox = {}));
    var clothingPaths;
    (function (clothingPaths) {
        clothingPaths["tshirtPath"] = "inlinePath";
        clothingPaths["shirtPath"] = "inlinePath2";
        clothingPaths["hoodiePath"] = "inlinePath3";
        clothingPaths["sweaterPath"] = "inlinePath4";
    })(clothingPaths || (clothingPaths = {}));
    // prices for the clothes
    const pricesClothing = {
        [clothingTypes.TShirt]: 10,
        [clothingTypes.Shirt]: 20,
        [clothingTypes.Hoodie]: 30,
        [clothingTypes.Sweater]: 40,
    };
    const priceTShirt = pricesClothing[clothingTypes.TShirt];
    const priceShirt = pricesClothing[clothingTypes.Shirt];
    const priceHoodie = pricesClothing[clothingTypes.Hoodie];
    const priceSweater = pricesClothing[clothingTypes.Sweater];
    const priceSize = [1, 2, 3, 4, 5, 6];
    const priceMaterial = [15, 10, 5];
    const tshirtBox = document.querySelector(`#${clothingPreviewBox.tshirtBox}`);
    const shirtBox = document.querySelector(`#${clothingPreviewBox.shirtBox}`);
    const hoodieBox = document.querySelector(`#${clothingPreviewBox.hoodieBox}`);
    const sweaterBox = document.querySelector(`#${clothingPreviewBox.sweaterBox}`);
    const tshirtPath = document.querySelector(`#${clothingPaths.tshirtPath}`);
    const shirtPath = document.querySelector(`#${clothingPaths.shirtPath}`);
    const hoodiePath = document.querySelector(`#${clothingPaths.hoodiePath}`);
    const sweaterPath = document.querySelector(`#${clothingPaths.sweaterPath}`);
    //function to how SVG-images in the shopping cart
    function getSVG(type, color) {
        switch (type) {
            case clothingTypes.TShirt:
                return `<svg class="svgCart" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 407.7 407.7" style="enable-background:new 0 0 407.7 407.7;" xml:space="preserve"><g><g><path fill= "${color}" d="M405.5,118.021c-0.094-0.099-0.191-0.196-0.29-0.29l-84.16-74.8c-0.768-0.7-1.664-1.243-2.64-1.6l-60.88-21.76c-4.153-1.508-8.742,0.637-10.25,4.79c-0.272,0.749-0.43,1.534-0.47,2.33c0,1.76-2.64,42.32-43.2,42.96c-40.8-0.64-43.36-41.2-43.44-42.96c-0.236-4.412-4.004-7.797-8.416-7.561c-0.758,0.041-1.507,0.189-2.224,0.441l-60.8,22c-0.976,0.357-1.872,0.9-2.64,1.6l-83.6,74.56c-3.203,3.043-3.333,8.107-0.29,11.31c0.094,0.099,0.191,0.196,0.29,0.29l66.56,67.28v184c0,4.418,3.582,8,8,8h253.6c4.418,0,8-3.582,8-8v-184l66.56-67.28C408.413,126.288,408.543,121.225,405.5,118.021z M338.41,173.811v-37.12c0-4.418-3.582-8-8-8s-8,3.582-8,8v235.52H84.73v-235.52c0-4.418-3.582-8-8-8s-8,3.582-8,8v37.2l-49.2-49.84l76.16-68.16l50.08-18.08c6.204,31.966,37.147,52.851,69.113,46.647c23.607-4.582,42.065-23.04,46.647-46.647l50.08,18.08l75.92,68.16L338.41,173.811z"/></g></g></svg>`;
            case clothingTypes.Shirt:
                return `<svg class="svgCart" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 512 512" width="512" height="512"><path  fill= "${color}" d="M118.168,463.78711l136,32a7.98923,7.98923,0,0,0,3.66406,0l136-32A7.99845,7.99845,0,0,0,400,456V416h40a8.00091,8.00091,0,0,0,7.88184-6.62891l32-184a8.01025,8.01025,0,0,0-.33789-4.0332l-48-136a7.99736,7.99736,0,0,0-5.60352-5.09863L332.561,56.89453,302.24707,19.002a8.004,8.004,0,0,0-6.167-3.002H215.91992a8.004,8.004,0,0,0-6.167,3.002L179.439,56.89453,86.05957,80.23926a7.99736,7.99736,0,0,0-5.60352,5.09863l-48,136a8.01025,8.01025,0,0,0-.33789,4.0332l32,184A8.00091,8.00091,0,0,0,72,416h40v40A7.99845,7.99845,0,0,0,118.168,463.78711ZM256,59.50439,233.07983,32h45.84058ZM400,400V376h37.44531l-4.17383,24Zm63.75977-175.30957L440.228,360H400V176H384V449.66406L264,477.89893V91.31445l26.34277,26.34278A8.00364,8.00364,0,0,0,295.999,120c.2627,0,.52637-.0127.78907-.03906a7.99891,7.99891,0,0,0,5.86816-3.52344l28.873-43.30933,86.3584,21.5896ZM318.09863,64.42969,294.75684,99.44336l-27.9336-27.93457L295.874,36.64844ZM216.126,36.64844l29.05078,34.86035-27.9336,27.93457L193.90137,64.42969ZM94.1123,94.71777l86.3584-21.5896,28.87305,43.30933a7.99891,7.99891,0,0,0,5.86816,3.52344q.39552.03954.78907.03906a8.00364,8.00364,0,0,0,5.65625-2.34277L248,91.31445V477.89893L128,449.66406V176H112V360H71.772L48.24023,224.69043ZM74.55469,376H112v24H78.72852Z"/></svg>`;
            case clothingTypes.Hoodie:
                return `<svg class="svgCart" id="o3" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path fill= "${color}" d="m443.217 173.333c-.003-.004-.006-.009-.009-.013-.005-.008-.011-.015-.016-.022-9.031-12.967-19.436-24.962-30.968-35.74 4.935-7.028 8.265-14.504 8.265-21.896 0-35.329-61.775-115.662-163.512-115.662-101.739 0-163.514 80.333-163.514 115.662 0 7.008 2.922 14.073 7.467 20.825-11.991 11.05-22.78 23.4-32.112 36.797-.011.015-.022.03-.032.045l-.004.005c-26.352 37.852-40.282 82.228-40.282 128.33v102.836c0 12.563 8.472 23.178 20 26.452v13.548c0 15.164 12.336 27.5 27.5 27.5h32.5v12.5c0 15.164 12.336 27.5 27.5 27.5h240c15.164 0 27.5-12.336 27.5-27.5v-12.5h32.5c15.164 0 27.5-12.336 27.5-27.5v-13.548c11.528-3.274 20-13.889 20-26.452v-102.836c0-46.102-13.93-90.478-40.283-128.331zm-367.217 283.667c-6.893 0-12.5-5.607-12.5-12.5v-12.5h45v25zm312.5 27.5c0 6.893-5.607 12.5-12.5 12.5h-240c-6.893 0-12.5-5.607-12.5-12.5v-60c0-.266-.015-.528-.042-.786.027-.258.042-.52.042-.786v-60.13c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v54.202h-52.5c-6.893 0-12.5-5.607-12.5-12.5v-102.836c0-40.647 11.609-79.853 33.631-113.85 19.503 13.462 31.369 35.749 31.369 59.686v85.298c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-85.298c0-28.856-14.283-55.724-37.765-71.973 7.424-9.851 15.697-19.047 24.725-27.436 13.431 13.951 31.141 25.259 38.775 29.827 13.905 8.32 28.627 15.304 43.35 20.712-11.163 23.861-24.242 65.985-10.649 115.7.912 3.333 3.933 5.524 7.23 5.524.654 0 1.321-.086 1.982-.268 3.996-1.092 6.349-5.217 5.256-9.212-12.67-46.338.186-85.523 10.518-106.976 17.529 5.211 34.68 8.039 50.053 8.039 15.089 0 31.503-2.58 48.374-7.46 10.369 21.746 22.78 60.552 10.245 106.397-1.092 3.996 1.261 8.12 5.256 9.212.662.181 1.328.268 1.982.268 3.297 0 6.319-2.19 7.23-5.524 13.445-49.175.833-90.895-10.343-115.038 11.254-4.069 22.599-9.092 33.794-15.049 3.656-1.946 5.043-6.488 3.098-10.145-1.946-3.657-6.487-5.043-10.145-3.098-30.377 16.166-62.996 25.437-89.492 25.437-29.791 0-67.188-11.735-100.04-31.391-33.305-19.927-48.474-39.568-48.474-49.384.003-25.058 52.675-100.662 148.517-100.662 95.841 0 148.513 75.604 148.513 100.662 0 7.136-8.684 21.722-33.159 39.344-3.361 2.42-4.125 7.107-1.704 10.469s7.106 4.124 10.469 1.704c6.239-4.492 14.267-10.82 21.449-18.15 8.638 8.132 16.574 17.015 23.721 26.498-23.483 16.25-37.766 43.117-37.766 71.973v175.428c0 .266.015.528.042.786-.027.258-.042.52-.042.786zm47.5-27.5h-32.5v-25h45v12.5c0 6.893-5.607 12.5-12.5 12.5zm32.5-52.5c0 6.893-5.607 12.5-12.5 12.5h-52.5v-169.5c0-23.937 11.866-46.223 31.369-59.685 22.021 33.997 33.631 73.203 33.631 113.849z"/></g></svg>`;
            case clothingTypes.Sweater:
                return `<svg class="svgCart" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 399.199 399.199" style="enable-background:new 0 0 399.199 399.199;" xml:space="preserve"><path  fill= "${color}" d="M354.334,118.897c-11.729-51.721-25.311-75.372-25.311-75.372C301.385,18.658,256.984,1.211,254.81,0.351c-1.539-0.609-3.279-0.417-4.65,0.515c-0.379,0.258-11.037,10.668-50.561,10.668h-0.002l0,0c-39.627,0-50.223-10.439-50.561-10.668c-1.371-0.932-3.113-1.124-4.65-0.515C142.213,1.21,94.488,18.658,70.17,43.522c-0.762,0.779-13.578,23.654-25.307,75.375c-10.734,47.333-22.34,129.157-16.695,250.19v25.111c0,2.76,2.238,5,5,5h45.336c2.416,0,4.486-1.729,4.918-4.105l4.568-25.082l9.141-38.57c1.355,5.461,2.895,10.711,4.635,15.709l4.525,25.914c0.418,2.393,2.496,4.141,4.926,4.141H287.98c2.43,0,4.508-1.748,4.926-4.141l4.525-25.914c1.74-4.998,3.279-10.248,4.635-15.711l9.139,38.572l4.568,25.082c0.434,2.377,2.504,4.105,4.92,4.105h45.338c2.762,0,5-2.24,5-5v-25.111C376.676,248.054,365.068,166.23,354.334,118.897zM199.597,21.533L199.597,21.533h0.002c23.824,0,38.176-3.4,46.559-6.779c-5.727,15.147-24.424,26.286-46.559,26.286h-0.002l0,0c-22.135,0-40.832-11.139-46.557-26.286C161.424,18.133,175.773,21.533,199.597,21.533z M210.361,50.254l-10.764,11.517l-10.762-11.517c3.488,0.515,7.086,0.786,10.762,0.786l0,0h0.002C203.275,51.04,206.871,50.769,210.361,50.254z M74.332,389.199H38.168v-15.215h38.934L74.332,389.199z M94.793,126.687c-4.342,47.976-11.029,121.925-2.295,180.933L79.14,363.984H37.947c-5.066-116.893,6.127-196.08,16.498-242.118c8.771-38.941,18.416-61.26,22.438-69.556c6.85,3.216,20.727,12.565,20.727,35.573C97.609,95.57,96.367,109.302,94.793,126.687z M115.418,367.204l-2.842-16.287h174.045l-2.844,16.287H115.418z M296.705,306.87c-0.018,0.086-4.371,23.752-7.721,34.047H110.213c-3.35-10.291-7.703-33.963-7.723-34.06c-8.717-57.789-2.057-131.547,2.262-179.268c1.596-17.636,2.857-31.567,2.857-39.706c0-25.794-14.723-38.092-24.143-43.32c16.563-13.689,45.807-26.953,58.471-32.365c2.756,13.782,13.293,25.549,27.938,32.412l26.07,27.899c0.984,1.054,2.318,1.586,3.654,1.586c1.223,0,2.449-0.446,3.414-1.347c0.084-0.079,26.307-28.139,26.307-28.139c14.646-6.862,25.184-18.631,27.939-32.413c12.662,5.41,41.9,18.667,58.471,32.365c-9.42,5.228-24.141,17.527-24.141,43.321c0,8.139,1.26,22.068,2.855,39.704C298.765,175.311,305.426,249.077,296.705,306.87zM361.031,389.199h-36.166l-2.771-15.215h38.938V389.199z M361.25,363.984h-41.195l-13.355-56.367c8.736-59.006,2.047-132.956-2.295-180.93c-1.572-17.385-2.814-31.116-2.814-38.803c0-23.015,13.885-32.363,20.721-35.573 C331.474,71.278,369.935,163.781,361.25,363.984z"/></svg>`;
        }
    }

    //Outsorcing HTML elemtens
    let totalPriceText = document.getElementById("shoppingCartPrice");
    let previewPrice = document.getElementById("previewPrice");
    const shoppingCartList = document.getElementById("shoppingCart");
    const sizeSelector = document.getElementById("sizeSelector");
    const materialSelector = document.getElementById("materialSelector");
    const shoppingCartButton = document.getElementById("shoppingCartButton");
    const sizeChartButton = document.getElementById("sizeChartButton");
    const resetButton = document.getElementById("reset");
    const addToCartButton = document.getElementById("addToCart");
    const overlay = document.getElementById("overlay");

    let totalPrice = 0;
    let lastPrice = 0;
    let chosenClothing;
    let clothes;
    let color;
    function output(e) {
        hideElements();
        const target = e.target;
        const typeOfClothing = target.id;
        clothes = typeOfClothing;
        changeColor("black");
        switch (typeOfClothing) {
            case clothingTypes.TShirt:
                tshirtBox.style.display = "inline";
                chosenClothing = priceTShirt;
                break;
            case clothingTypes.Shirt:
                shirtBox.style.display = "inline";
                chosenClothing = priceShirt;
                break;
            case clothingTypes.Hoodie:
                hoodieBox.style.display = "inline";
                chosenClothing = priceHoodie;
                break;
            case clothingTypes.Sweater:
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
    function changeColor(e) {
        color = e;
        switch (clothes) {
            case clothingTypes.TShirt:
                tshirtPath.setAttribute("fill", color);
                break;
            case clothingTypes.Shirt:
                shirtPath.setAttribute("fill", color);
                break;
            case clothingTypes.Hoodie:
                hoodiePath.setAttribute("fill", color);
                break;
            case clothingTypes.Sweater:
                sweaterPath.setAttribute("fill", color);
                break;
        }
    }
    function viewSizeChart(enabled) {
        if (enabled) {
            document.getElementById("overlay").style.display = "block";
        }
        else {
            document.getElementById("overlay").style.display = "none";
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
        previewPrice.innerHTML = "Price: " + lastPrice + "???";
    }
    function reset() {
        sizeSelector.selectedIndex = 0;
        materialSelector.selectedIndex = 0;
        hideElements();
        previewPrice.innerHTML = "Price: 0???";
        lastPrice = 0;
    }
    function addToShoppingCart() {
        let shoppingCartItemBox = document.createElement("div");
        switch (clothes) {
            case clothingTypes.TShirt:
                shoppingCartItemBox.innerHTML = getSVG(clothes, color);
                break;
            case clothingTypes.Shirt:
                shoppingCartItemBox.innerHTML = getSVG(clothes, color);
                break;
            case clothingTypes.Hoodie:
                shoppingCartItemBox.innerHTML = getSVG(clothes, color);
                break;
            case clothingTypes.Sweater:
                shoppingCartItemBox.innerHTML = getSVG(clothes, color);
                break;
        }
        updatePriceText(lastPrice);
        //set tooltip
        shoppingCartItemBox.setAttribute("title", "Price: " + lastPrice + "???");
        shoppingCartItemBox.setAttribute("price", String(lastPrice));
        shoppingCartItemBox.addEventListener("click", function () {
            const price = parseInt(this.getAttribute("price"));
            updatePriceText(-price);
            this.remove();
        });
        shoppingCartList.appendChild(shoppingCartItemBox);
    }
    function updatePriceText(price) {
        totalPrice += price;
        totalPriceText.innerHTML = "Total price: " + totalPrice + "???";
    }
    //Function to remove items from shopping cart
    function emptyShoppingCart() {
        while (shoppingCartList.firstChild) {
            shoppingCartList.firstChild.remove();
        }
        totalPrice = 0;
        totalPriceText.innerHTML = "Total price: " + totalPrice + "???";
    }
    //Initialize function
    function initialize() {
        document.querySelectorAll(".colorField").forEach((el) => { el.addEventListener("click", function () { changeColor(el.id); }); });
        document.querySelectorAll(".choice").forEach((el) => { el.addEventListener("click", output); });
        sizeChartButton.onclick = () => viewSizeChart(true);
        overlay.onclick = () => viewSizeChart(false);
        addToCartButton.onclick = () => addToShoppingCart();
        shoppingCartButton.onclick = emptyShoppingCart;
        materialSelector.onchange = () => materialSelection();
        sizeSelector.onchange = () => sizeSelection();
        resetButton.onclick = () => reset();
    }
    initialize();

}());
