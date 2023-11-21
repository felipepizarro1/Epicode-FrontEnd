let tabellaGrande = document.querySelector("table tr");
let numeriScelti= [];


tuttaTabella();



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
    numeriScelti.push(scelta.textContent);
    if (numeriScelti.includes(scelta)){
        do{
            scelta = tutteCelle[randomNumber]
            numeriScelti.push(scelta.textContent);
            scelta.className="scelta";
        } while(numeriScelti.includes(scelta))

       
    } else scelta.className = "scelta";
        
    
    
    
    
    
    
    console.log(scelta)

}