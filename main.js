let blur = document.querySelector('.screen');
let form = document.querySelector('.enterBook');
let submit = document.querySelector('#submit');
let bookN = document.querySelector("#bookName");
let pagesR  = document.querySelector("#currPage");
let pagesT = document.querySelector("#bookPage");
let main = document.querySelector(".main");
let complete = document.querySelector('input[name = "yes-no"]:checked');

//setting up edit and delete button
const del = document.createElement('input');
del.type = 'button';
del.id = 'delete';
del.name = 'Delete';
del.value = 'Delete';

const bookmark = document.createElement('input');
bookmark.type = 'button';
bookmark.id = 'edit';
bookmark.name = 'Edit';
bookmark.value = 'Edit';

const nbHover = document.createElement('div');
const newBook = document.createElement('div');
const sign = document.createElement('p');
const signText = document.createElement('p');


main.appendChild(nbHover).classList.add('newBook-hover');
nbHover.appendChild(newBook).classList.add('newBook');
newBook.appendChild(sign);
nbHover.appendChild(signText);

sign.textContent = '+';
signText.textContent = 'Add New Book';

let permDelete = document.querySelector('.permDelete');
let deleteYes = document.querySelector('#del-yes');
let deleteNo = document.querySelector('#del-no');


let library = [];

deleteYes.addEventListener('click', () => {
    deleteBook();
}
)
deleteNo.addEventListener('click', () => {
    deleteBook();
}
)
del.addEventListener('click', () => {
    library.pop(1);
    console.log(library);
    blur.classList.toggle('blurry');
    permDelete.style.display = 'flex';
}
)
nbHover.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "flex";
}
)
submit.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "none";
    createBook();
})

let book = (bookName, pagesRead, pagesTotal, completed) => {
    let completePerc = completion(pagesRead,pagesTotal);
    return {bookName, pagesRead, pagesTotal , completed, completePerc};
}

//,complete.value
function createBook(){
    library.push(book(bookN.value,pagesR.value,pagesT.value));
    const prevBook = document.createElement('div');
    const bookTitle = document.createElement('div');
    const titleText = document.createElement('p')
    const bookHover = document.createElement('div');
    const comp = document.createElement('p');
    const perc = document.createElement('p');
    main.appendChild(prevBook).classList.add('prevBook');
    prevBook.appendChild(bookTitle).classList.add('bookTitle');
    bookTitle.appendChild(titleText).classList.add('bookTitle-text');
    prevBook.appendChild(bookHover).classList.add('prevBook-hover');
    bookHover.appendChild(comp).classList.add('completion');
    bookHover.appendChild(perc).classList.add('percent');
    const del = document.createElement('input');
    del.addEventListener('click', () => {
        console.log(library);
        blur.classList.toggle('blurry');
        permDelete.style.display = 'flex';
    }
    )
    const bookmark = document.createElement('input');
    bookHover.appendChild(del);
    bookHover.appendChild(bookmark);
    main.appendChild(nbHover).classList.add('newBook-hover');
    nbHover.appendChild(newBook).classList.add('newBook');

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
}
function editBook(){
    //when click opens selected library index
    //redisplays the selected library index's content in appropriate format
    //when submitted it replaces the selected index with refurbished model
}
function deleteBook(){
    //deletes the library index and DOM content while maintaining order
    blur.classList.toggle('blurry');
    permDelete.style.display = 'none';
    library.pop(1);
    console.log(library);
}
function completion(a,b){
    let percent = Math.floor((a / b) * 100);
    return `${percent}%`;
}
