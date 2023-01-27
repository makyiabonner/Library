let hover = document.querySelector(".newBook-hover");
let blur = document.querySelector('.screen');
let form = document.querySelector('.enterBook');
let submit = document.querySelector('#submit');
let bookN = document.querySelector("#bookName");
let pagesR  = document.querySelector("#currPage");
let pagesT = document.querySelector("#bookPage");
let complete = document.querySelector('input[name = "yes-no"]:checked');

let library = [];

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
    console.log(library);
}
function editBook(){
    //when click opens selected library index
    //redisplays the selected library index's content in appropriate format
    //when submitted it replaces the selected index with refurbished model
}
function deleteBook(){
    //deletes the library index and DOM content while maintaining order
}
function completion(a,b){
    let percent = Math.floor((a / b) * 100);
    return `${percent}% DONE`
}