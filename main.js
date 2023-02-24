let blur = document.querySelector('.screen');



const nbHover = document.createElement('div');
const newBook = document.createElement('div');
const sign = document.createElement('p');
const signText = document.createElement('p');


nbHover.appendChild(newBook).classList.add('newBook');
newBook.appendChild(sign);
nbHover.appendChild(signText);
sign.textContent = '+';
signText.textContent = 'Add New Book';



nbHover.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "flex";
}
)


//Form Setup
    let form = document.querySelector('.enterBook');
    let submit = document.querySelector('#submit');
    let bookN = document.querySelector("#bookName");
    let pagesR  = document.querySelector("#currPage");
    let pagesT = document.querySelector("#bookPage");
    let main = document.querySelector(".main");
    let complete = document.querySelector('input[name = "yes-no"]:checked');


    main.appendChild(nbHover).classList.add('newBook-hover');
    submit.addEventListener('click', () => {
        blur.classList.toggle('blurry');
        form.style.display = "none";
        createBook();
    })

    let library = [];

    function Book(title, pgRead, pgTotal){
        this.title = title;
        this.pgRead = pgRead;
        this.pgTotal = pgTotal;
        let completePerc = completion(pgRead,pgTotal)
    }

    function completion(a,b){
        let percent = Math.floor((a / b) * 100);
        return `${percent}%`;
    }

//,complete.value
function createBook(){
    const prevBook = document.createElement('div');
    const bookTitle = document.createElement('div');
    const titleText = document.createElement('p')
    const bookHover = document.createElement('div');
    const comp = document.createElement('p');
    const perc = document.createElement('p');
    library.push(Book(titleText,pagesR.value,pagesT.value));

    const del = document.createElement('input');
    del.addEventListener('click', () => {
        prevBook.remove();
        library.pop();
    })
    const bookmark = document.createElement('input');
    bookmark.addEventListener('click', () => {
        blur.classList.toggle('blurry');
        form.style.display = "flex";
        titleText.textContent = bookN.value;
        perc.textContent = completion(pagesR.value, pagesT.value);
    });


    titleText.textContent = bookN.value;
    comp.textContent = 'completion';
    perc.textContent = completion(pagesR.value, pagesT.value);
    
    //setting up edit and delete button
    del.type = 'button';
    del.id = 'delete';
    del.name = 'Delete';
    del.value = 'Delete';

    bookmark.type = 'button';
    bookmark.id = 'edit';
    bookmark.name = 'Edit';
    bookmark.value = 'Edit';
        console.log(library);
        console.log(main);
    
    
    main.appendChild(prevBook).classList.add('prevBook');
    prevBook.appendChild(bookTitle).classList.add('bookTitle');
    bookTitle.appendChild(titleText).classList.add('bookTitle-text');
    prevBook.appendChild(bookHover).classList.add('prevBook-hover');
    bookHover.appendChild(comp).classList.add('completion');
    bookHover.appendChild(perc).classList.add('percent');
    bookHover.appendChild(del);
    bookHover.appendChild(bookmark);
    main.appendChild(nbHover).classList.add('newBook-hover');
    nbHover.appendChild(newBook).classList.add('newBook');
}
function editBook(){
    //when click opens selected library index
    //redisplays the selected library index's content in appropriate format
    //when submitted it replaces the selected index with refurbished model
}

