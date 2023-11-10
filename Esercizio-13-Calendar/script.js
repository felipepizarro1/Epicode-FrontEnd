let now = new Date();
let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    let lastDayofTheMonth = lastDayDate.getDate();
let calendar = document.querySelector("#calendar")
let appoinments = [];
creaCalendario();
creaArrayAppuntamenti();

function creaCalendario(){
    
    let h2 = document.querySelector("h1+h2");
    h2.innerText = nomeMese(now.getMonth() + 1);
for(let i = 1; 1 <= lastDayofTheMonth; i++){
    const dayCellNode = document.createElement("div");
    dayCellNode.className = "day";

    
    const day = document.createElement("h3");
    day.innerText = i;
    let today = now.getDate();
    if(today ===i){
        day.className = "color-epic";
    }
    dayCellNode.appendChild(day);
    calendar.appendChild(dayCellNode);
}

}


function nomeMese(m){
    switch(m){
        case 1: return "Gennaio"
        case 2: return "Febbraio"
        case 3: return "Marzo"
        case 4: return "Aprile"
        case 5: return "Maggio"
        case 6: return "Giugno"
        case 7: return "Luglio"
        case 8: return "Agosto"
        case 9: return "Settembre"
        case 10: return "Ottubre"
        case 11: return "Novembre"
        case 12: return "Decembre"
    }
}

function creaArrayAppuntamenti(){
    for(let i=0; i< lastDayofTheMonth; i++){
        appoinments[i] = "O"
    }
    console.log(appoinments)
    
}