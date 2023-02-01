let hover = document.querySelector(".newBook-hover");
let blur = document.querySelector('.screen');
let form = document.querySelector('.enterBook');
let submit = document.querySelector('#submit');
let bookN = document.querySelector("#bookName");
let pagesR  = document.querySelector("#currPage");
let pagesT = document.querySelector("#bookPage");
let complete = document.querySelector('input[name = "yes-no"]:checked');
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
hover.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "flex";
}
)
submit.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "none";
    createBook();
})

let book = (bookName,pagesRead, pagesTotal, completed) => {
    let completePerc = completion(pagesRead,pagesTotal)
    return {bookName, pagesRead, completePerc , completed};
}

function createBook(){
    library.push(book(bookN.value,pagesR.value,pagesT.value,complete.value));
    //for loop to iterate thru library array
    //change the DOM content for library
    console.log(library);
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
    return `${percent}% DONE`;
}