let blur = document.querySelector('.screen');
let form = document.querySelector('.enterBook');
let submit = document.querySelector('#submit');
let bookN = document.querySelector("#bookName");
let pagesR  = document.querySelector("#currPage");
let pagesT = document.querySelector("#bookPage");
let main = document.querySelector(".main");
let complete = document.querySelector('input[name = "yes-no"]:checked');
const prevBook = document.createElement('div');
const bookTitle = document.createElement('div');
const titleText = document.createElement('p')
const bookHover = document.createElement('div');
const comp = document.createElement('p');
const perc = document.createElement('p');
const nbHover = document.createElement('div');
const newBook = document.createElement('div');
const sign = document.createElement('p');
const signText = document.createElement('p');

prevBook.className = 'prevBook';
bookTitle.className = 'bookTitle';
titleText.className = 'bookTitle-text';
bookHover.className = 'prevBook-hover';
comp.className = 'completion';
perc.className = 'percent';
nbHover.className = 'newBook-hover';
newBook.className = 'newBook';

prevBook.appendChild(bookTitle);
bookTitle.appendChild(titleText);
prevBook.appendChild(bookHover);
bookHover.appendChild(comp);
bookHover.appendChild(perc);
main.appendChild(nbHover);
nbHover.appendChild(newBook);
newBook.appendChild(sign);
nbHover.appendChild(signText);

sign.textContent = '+';
signText.textContent = 'Add New Book';

let permDelete = document.querySelector('.permDelete');
let edit = document.querySelector('#edit');
let del = document.querySelector('#delete');
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
    for(i = 0; i <= library.length - 1; i++){
        main.appendChild(prevBook);
        titleText.textContent = library[i].bookName;
        comp.textContent = 'completion';
        perc.textContent = completion(library[i].pagesRead, library[i].pagesTotal);
        
        //        <input type="button" id="delete" name="Delete" value="Delete" />
        //        <input type="button" id="edit" name="Edit" value="Edit" />
    }
    //change the DOM content for library
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
}
function completion(a,b){
    let percent = Math.floor((a / b) * 100);
    return `${percent}%`;
}