

document.querySelector(".newBook-hover").addEventListener('click', () =>
document.querySelector('.screen').classList.toggle('blurry')
)

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