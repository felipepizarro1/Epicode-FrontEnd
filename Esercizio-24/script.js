// chiamate js

let xhr = new XMLHttpRequest(); // OBJETO EN CONDICIÓN DE EFECTUAR UNA SOLICITUD AL SERVER - readyState = 0;
xhr.open('GET', 'https://swapi.dev/api/people/') // defino el metodo y la url readyState = 1
xhr.send() // ejecuto la llamada - readyState = 2;

//readyState = 3 Loading downloading; responseText holds partial data.

//readyState = 4 DONE the operation is complete.

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status ==200){
        console.log("the operation is complete");
        let json = xhr.responseText;
        let obj = JSON.parse(json);


        console.log(obj.results);
        createList(obj.results);
    }
}

function createList(users){
    let div = document.querySelector('.users');
    users.forEach(u => {
        let p = document.createElement('p');
        p.innerText = u.name + " (" + u.homeworld + ")";
        div.appendChild(p);
    })
}

