
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
        //SCARTA (button)
        let link = document.createElement('a');
        link.classList.add('btn','btn-danger');
        link.setAttribute('href','#');
        link.textContent = 'Scarta';
        link.addEventListener('click', (e) =>{
            e.preventDefault();
            col.classList.add('d-none');

        })

        //CARRELLO (bUtton)
        let link2 = document.createElement('a');
        link2.classList.add('btn','btn-primary', 'm-2');
        link2.setAttribute('href','#');
        link2.textContent = 'Compra ora';
        link2.addEventListener('click',(e)=>{
            e.preventDefault();
            sessionStorage.setItem('book',b.title);
            let carrello = document.querySelector('.container ul')
            let book = document.createElement('li');
            book.textContent = b.title;
            carrello.appendChild(book);


        })

        //APPENDS
        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(link2);
        cardBody.appendChild(link);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);

        //CARRELLO



    })
    
}



