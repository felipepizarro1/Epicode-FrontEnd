document.addEventListener('DOMContentLoaded', function(){
    let j = JSON.parse(localStorage.getItem('thisImage'));
    console.log(j) //test

    //col
    let colDiv = document.createElement('div');
    colDiv.classList.add('col-md-5');
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
        window.open('Starting-template.html','_self');
        

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
   

    //p card
    let p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = "Photographer: " + j.photographer;
     //p card2
     let p2 = document.createElement('p');
     p2.classList.add('card-text');
     let link = j.photographer_url;
     let a = document.createElement('a');
     a.href = link;
     p2.textContent = "Website: ";
     a.textContent =  link;

     a.addEventListener('click', (e)=>{
        e.preventDefault();
        window.open(link,'_blank');
     })
   
     
    // DIV Button group
    let buttonGroup = document.createElement('div');
    buttonGroup.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    // DIV 2 Button group
    let btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    // Button Indietro
    let indietro = document.createElement('button');
    indietro.setAttribute('type', 'button');
    indietro.classList.add('btn', 'btn-sm', 'btn-outline-secondary');
    indietro.textContent = 'Indietro';
    indietro.addEventListener('click',(e)=>{
        e.preventDefault();
        window.open('Starting-template.html', '_self');
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
    p2.appendChild(a);
    cardBody.appendChild(p2);
    cardBody.appendChild(p);
    cardBody.appendChild(buttonGroup);
    buttonGroup.appendChild(btnGroup);
    btnGroup.appendChild(indietro);
 
    buttonGroup.appendChild(smallText);

    //EXTRAS
    let bgr = document.getElementById('background')
    let color = j.avg_color;

    bgr.classList.add('background-color')
    bgr.style.backgroundColor = color;
})