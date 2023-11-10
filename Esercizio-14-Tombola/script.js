let tabellaGrande = document.querySelector("table tr");


tuttaTabella();
estrazione();


function tuttaTabella (){
    for(let i=0; 77>i; i++){
        let cellaSingola = document.createElement("td")
        cellaSingola.textContent = i;
        tabellaGrande.appendChild(cellaSingola)
    }
}

function estrazione () {
    let randomNumber = Math.floor(Math.random() *76);
    let tutteCelle = document.querySelectorAll("td");
    let scelta = tutteCelle[randomNumber];
    scelta.className = "scelta";
    
    console.log(scelta)

}