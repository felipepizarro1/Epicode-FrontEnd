
let newRequest = new XMLHttpRequest(); //readyState = 0;

newRequest.open('GET', 'https://striveschool-api.herokuapp.com/books'); //readyState = 1;

newRequest.send(); //readyState = 2;


newRequest.onreadystatechange = function () {
    if(newRequest.readyState ==4 && newRequest.status == 200){
        
        console.log("Success!")
        let json = newRequest.responseText;
        let obj = JSON.parse(json);
        console.log(obj)
        console.log(obj[0].img) //test
        createList(obj);
        
    }
}



function createList(books){
    let row = document.querySelector('.row');
    books.forEach(b =>{
        //col
        let col = document.createElement('div');
        col.classList.add('col-3');
        //card
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        //img + info
        let img = document.createElement('img');
        img.classList.add('card-img-top');
        img.setAttribute('src', b.img);
        img.setAttribute('alt','Card image cap');
        //boyd
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        //title
        let title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = b.title;
        //card text
        let text = document.createElement('p');
        text.classList.add('card-text');
        text.textContent = "Category " + b.category;
        //a (button)
        let link = document.createElement('a');
        link.classList.add('btn','btn-danger');
        link.setAttribute('href','#');
        link.textContent = 'Scarta';
        link.addEventListener('click', (e) =>{
            e.preventDefault();
            col.classList.add('d-none');

        })

        //APPENDS
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);




    })
    
}



