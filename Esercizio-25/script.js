const API_KEY ="Ljs1I7NhIXXcItjSenIT3fsrwoU290BI5J7mtaqgFWLGoFJVOq7YTM7E"


function resetContent(){
    let content = document.querySelectorAll('.col-md-4');
    content.forEach(c => {
        c.classList.add('d-none');
    })
}


function queryInput(query){
    fetch(`https://api.pexels.com/v1/search?query=${query}`, {method: 'GET',
        headers: {
            Authorization: API_KEY
}
})
    .then(response => response.json())
    .then(data => {
    resetContent(); // RESET DELLA QUERY ANTERIORE
    console.log(data);
    data.photos.forEach(j =>{
    console.log(j.src.small)
            
       
            //col
            let colDiv = document.createElement('div');
            colDiv.classList.add('col-md-4');
            //card
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'mb-4', 'shadow-sm');
            //img
            let img = document.createElement('img');
            img.classList.add('bd-placeholder-img', 'card-img-top');
            img.setAttribute('src', j.src.small);
            img.setAttribute('width', '100%');
            img.setAttribute('height', '225');
            img.addEventListener('click',(e)=>{
                e.preventDefault();
               localStorage.setItem('thisImage', JSON.stringify(j));
               window.open('Details.html', '_blank');
                

            })
            //img title
            let title = document.createElement('title');
            title.textContent = "Placeholder";
            //card body
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            //h5 card
            let h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = j.alt;
           
            h5.addEventListener('click',(e)=>{
                e.preventDefault();
               localStorage.setItem('thisImage', JSON.stringify(j));
               window.open('Details.html', '_blank');
                

            })
            //p card
            let p = document.createElement('p');
            p.classList.add('card-text');
            p.textContent = "Photohrapher: " + j.photographer;
            // DIV Button group
            let buttonGroup = document.createElement('div');
            buttonGroup.classList.add('d-flex', 'justify-content-between', 'align-items-center');
            // DIV 2 Button group
            let btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');
            // Button View
            let btnView = document.createElement('button');
            btnView.setAttribute('type', 'button');
            btnView.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnView.textContent = 'View';
            btnView.addEventListener('click',(e)=>{
                e.preventDefault();
                alert('HolA!')
            })
            // Button Edit
            let btnEdit = document.createElement('button');
            btnEdit.setAttribute('type', 'button');
            btnEdit.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnEdit.textContent = 'Hide';
            btnEdit.addEventListener('click',(e)=>{
                e.preventDefault();
                colDiv.classList.add('d-none');

            })
            // Small Text
            let smallText = document.createElement('small');
            smallText.classList.add('text-muted');
            smallText.textContent = 'id: ' + j.id;

            // APPENDS
            let superDiv = document.getElementById('superDiv') //Get element SuperDiv DOM
            superDiv.appendChild(colDiv);
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(buttonGroup);
            buttonGroup.appendChild(btnGroup);
            btnGroup.appendChild(btnView);
            btnGroup.appendChild(btnEdit);
            buttonGroup.appendChild(smallText);

            
            


        })
    })
    .catch(error => console.log(error))


    
    console.log("works!")
}

    
    let form = document.querySelector(".form-inline")  //RICHIESTA FORM
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let input = form.querySelector('input');
        console.log('it works')
        queryInput(input.value)
    })
    





let loadBtn = document.getElementById("load"); 

loadBtn.addEventListener('click', (e)=>{ // RICHIESTA LOAD IMAGES
    e.preventDefault();
    fetch('https://api.pexels.com/v1/search?query=cat', {method: 'GET',
    headers: {
        Authorization: API_KEY
}
})
    .then(response => response.json())
    .then(data => {
        resetContent(); // RESET DELLA QUERY ANTERIORE
        console.log(data);
        data.photos.forEach(j =>{
            console.log(j.src.small)
            
       
            //col
            let colDiv = document.createElement('div');
            colDiv.classList.add('col-md-4');
            //card
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'mb-4', 'shadow-sm');
            //img
            let img = document.createElement('img');
            img.classList.add('bd-placeholder-img', 'card-img-top');
            img.setAttribute('src', j.src.small);
            img.setAttribute('width', '100%');
            img.setAttribute('height', '225');
            //img title
            let title = document.createElement('title');
            title.textContent = "Placeholder";
            //card body
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            //h5 card
            let h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = j.alt;
            //p card
            let p = document.createElement('p');
            p.classList.add('card-text');
            p.textContent = "Photohrapher: " + j.photographer;
            // DIV Button group
            let buttonGroup = document.createElement('div');
            buttonGroup.classList.add('d-flex', 'justify-content-between', 'align-items-center');
            // DIV 2 Button group
            let btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');
            // Button View
            let btnView = document.createElement('button');
            btnView.setAttribute('type', 'button');
            btnView.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnView.textContent = 'View';
            // Button Edit
            let btnEdit = document.createElement('button');
            btnEdit.setAttribute('type', 'button');
            btnEdit.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnEdit.textContent = 'Hide';
            btnEdit.addEventListener('click',(e)=>{
                e.preventDefault();
                colDiv.classList.add('d-none');

            })
            // Small Text
            let smallText = document.createElement('small');
            smallText.classList.add('text-muted');
            smallText.textContent = 'id: ' + j.id;

            // APPENDS
            let superDiv = document.getElementById('superDiv') //Get element SuperDiv DOM
            superDiv.appendChild(colDiv);
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(buttonGroup);
            buttonGroup.appendChild(btnGroup);
            btnGroup.appendChild(btnView);
            btnGroup.appendChild(btnEdit);
            buttonGroup.appendChild(smallText);

            
            


        })
    })
    .catch(error => console.log(error))


    
  
})

//***************************************************************************************************************************************** */

let loadSecondary = document.getElementById("secondary");

loadSecondary.addEventListener("click", (e)=>{ // RICHIESTA SECONDARY IMAGES
    e.preventDefault();
    fetch('https://api.pexels.com/v1/search?query=dog', {method: 'GET',
    headers: {
        Authorization: API_KEY
}
})
    .then(response => response.json())
    .then(data => {
        resetContent(); // RESET DELLA QUERY ANTERIORE
        console.log(data);
        data.photos.forEach(j =>{
            console.log(j.src.small);
            
            //col
            let colDiv = document.createElement('div');
            colDiv.classList.add('col-md-4');
            //card
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card', 'mb-4', 'shadow-sm');
            //img
            let img = document.createElement('img');
            img.classList.add('bd-placeholder-img', 'card-img-top');
            img.setAttribute('src', j.src.small);
            img.setAttribute('width', '100%');
            img.setAttribute('height', '225');
            //img title
            let title = document.createElement('title');
            title.textContent = "Placeholder";
            //card body
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            //h5 card
            let h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = j.alt;
            //p card
            let p = document.createElement('p');
            p.classList.add('card-text');
            p.textContent = "Photohrapher: " + j.photographer;
            // DIV Button group
            let buttonGroup = document.createElement('div');
            buttonGroup.classList.add('d-flex', 'justify-content-between', 'align-items-center');
            // DIV 2 Button group
            let btnGroup = document.createElement('div');
            btnGroup.classList.add('btn-group');
            // Button View
            let btnView = document.createElement('button');
            btnView.setAttribute('type', 'button');
            btnView.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnView.textContent = 'View';
            // Button Edit
            let btnEdit = document.createElement('button');
            btnEdit.setAttribute('type', 'button');
            btnEdit.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
            btnEdit.textContent = 'Hide';
            btnEdit.addEventListener('click',(e)=>{
                e.preventDefault();
                colDiv.classList.add('d-none');

            })
            // Small Text
            let smallText = document.createElement('small');
            smallText.classList.add('text-muted');
            smallText.textContent = 'id: ' + j.id;

            // APPENDS
            let superDiv = document.getElementById('superDiv') //Get element SuperDiv DOM
            superDiv.appendChild(colDiv);
            colDiv.appendChild(cardDiv);
            cardDiv.appendChild(img);
            cardDiv.appendChild(title);
            cardDiv.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(buttonGroup);
            buttonGroup.appendChild(btnGroup);
            btnGroup.appendChild(btnView);
            btnGroup.appendChild(btnEdit);
            buttonGroup.appendChild(smallText);
        })
    })
    .catch(error => console.log(error))



    console.log("works!")
});

