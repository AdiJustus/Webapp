let previewBox = document.getElementById("previewBox") as HTMLInputElement;
const Kleidung = document.getElementsByClassName("Kleidung");
const Tshirt = document.querySelector("#tshirt") as SVGElement;
const color = document.querySelector("#colorMaker") as HTMLInputElement;
const colorFields = document.querySelectorAll(".colorField") as unknown as Array<HTMLElement>;



for (let colorField of colorFields) {
    console.log("Klappt");
    
    colorField.addEventListener("click", (event) => {changeColor(event.target)})
    }


function changeColor(element:any) {

const selection = element.style.background;
const preview = document.getElementById("previewBox") as HTMLElement;
const previewElement = document.querySelector("#inlinePath") as HTMLElement;
console.log(previewElement);
previewElement.style.fill = selection;
/*document.getElementById("inlinePath").setAttribute("fill", "red")as unknown as SVGElement;*/
}


function ausgabe(ArtDerKleidung:string):void {
    console.log(ArtDerKleidung);
    if (ArtDerKleidung === 'T-Shirt') {
        previewBox.innerHTML = `<?xml version="1.0" class="svgs" encoding="iso-8859-1"?>
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 407.7 407.7" style="enable-background:new 0 0 407.7 407.7;" xml:space="preserve">
        <g>
            <g>
                <path id="inlinePath" d="M405.5,118.021c-0.094-0.099-0.191-0.196-0.29-0.29l-84.16-74.8c-0.768-0.7-1.664-1.243-2.64-1.6l-60.88-21.76
                    c-4.153-1.508-8.742,0.637-10.25,4.79c-0.272,0.749-0.43,1.534-0.47,2.33c0,1.76-2.64,42.32-43.2,42.96
                    c-40.8-0.64-43.36-41.2-43.44-42.96c-0.236-4.412-4.004-7.797-8.416-7.561c-0.758,0.041-1.507,0.189-2.224,0.441l-60.8,22
                    c-0.976,0.357-1.872,0.9-2.64,1.6l-83.6,74.56c-3.203,3.043-3.333,8.107-0.29,11.31c0.094,0.099,0.191,0.196,0.29,0.29
                    l66.56,67.28v184c0,4.418,3.582,8,8,8h253.6c4.418,0,8-3.582,8-8v-184l66.56-67.28C408.413,126.288,408.543,121.225,405.5,118.021
                    z M338.41,173.811v-37.12c0-4.418-3.582-8-8-8s-8,3.582-8,8v235.52H84.73v-235.52c0-4.418-3.582-8-8-8s-8,3.582-8,8v37.2
                    l-49.2-49.84l76.16-68.16l50.08-18.08c6.204,31.966,37.147,52.851,69.113,46.647c23.607-4.582,42.065-23.04,46.647-46.647
                    l50.08,18.08l75.92,68.16L338.41,173.811z" fill="currentColor"/>
            </g>
        </g>
        </svg>`;
        console.log("T-Shirt");
    }
    else if (ArtDerKleidung === 'Shirt') {
        previewBox.innerHTML = `<?xml version="1.0"?>
        <svg xmlns="http://www.w3.org/2000/svg" id="outline" viewBox="0 0 512 512" width="512" height="512"><path d="M118.168,463.78711l136,32a7.98923,7.98923,0,0,0,3.66406,0l136-32A7.99845,7.99845,0,0,0,400,456V416h40a8.00091,8.00091,0,0,0,7.88184-6.62891l32-184a8.01025,8.01025,0,0,0-.33789-4.0332l-48-136a7.99736,7.99736,0,0,0-5.60352-5.09863L332.561,56.89453,302.24707,19.002a8.004,8.004,0,0,0-6.167-3.002H215.91992a8.004,8.004,0,0,0-6.167,3.002L179.439,56.89453,86.05957,80.23926a7.99736,7.99736,0,0,0-5.60352,5.09863l-48,136a8.01025,8.01025,0,0,0-.33789,4.0332l32,184A8.00091,8.00091,0,0,0,72,416h40v40A7.99845,7.99845,0,0,0,118.168,463.78711ZM256,59.50439,233.07983,32h45.84058ZM400,400V376h37.44531l-4.17383,24Zm63.75977-175.30957L440.228,360H400V176H384V449.66406L264,477.89893V91.31445l26.34277,26.34278A8.00364,8.00364,0,0,0,295.999,120c.2627,0,.52637-.0127.78907-.03906a7.99891,7.99891,0,0,0,5.86816-3.52344l28.873-43.30933,86.3584,21.5896ZM318.09863,64.42969,294.75684,99.44336l-27.9336-27.93457L295.874,36.64844ZM216.126,36.64844l29.05078,34.86035-27.9336,27.93457L193.90137,64.42969ZM94.1123,94.71777l86.3584-21.5896,28.87305,43.30933a7.99891,7.99891,0,0,0,5.86816,3.52344q.39552.03954.78907.03906a8.00364,8.00364,0,0,0,5.65625-2.34277L248,91.31445V477.89893L128,449.66406V176H112V360H71.772L48.24023,224.69043ZM74.55469,376H112v24H78.72852Z"/><path d="M288,168a8.00039,8.00039,0,0,0-8,8v64a8.00039,8.00039,0,0,0,8,8h64a8.00039,8.00039,0,0,0,8-8V176a8.00039,8.00039,0,0,0-8-8Zm56,64H296V184h48Z"/></svg>
        `;
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


