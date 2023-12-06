let inputName = document.getElementById("justName");
let form = document.getElementById("myForm");
let btnElimina = document.getElementById("btn-elimina");
let timeShow = document.querySelector("header span");
let storageCount = sessionStorage.getItem("count");
let count = storageCount ? parseInt(storageCount) : 0;

timeShow.textContent = count;

let showName = document.querySelector("header h3");
showName.textContent = localStorage.getItem("name");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.setItem("name", inputName.value);
    showName.textContent = inputName.value;

});

btnElimina.addEventListener("delete", (e)=>{
    e.preventDefault();
    localStorage.removeItem("name");
})


//timer//
let timer = () =>{
    count++;
    timeShow.textContent = count;
    sessionStorage.setItem("count", count.toString())
}



setInterval(timer,1000);



