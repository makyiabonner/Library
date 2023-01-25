let hover = document.querySelector(".newBook-hover");
let blur = document.querySelector('.screen');
let form = document.querySelector('.enterBook');
let submit = document.querySelector('#submit');
hover.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "flex";
}
)
submit.addEventListener('click', () => {
    blur.classList.toggle('blurry');
    form.style.display = "none";
})

let book = (bookName,pagesRead, pagesTotal, completed) => {
    let completePerc = completion(pagesRead,pagesTotal)
    return {bookName, pagesRead, completePerc , completed};
}
let r = book("rey", 40, 120, false)
console.log(r)
createBook
editBook
deleteBook
function completion(a,b){
    let percent = Math.floor((a / b) * 100);
    return `${percent}% DONE`
}