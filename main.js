document.querySelector(".newBook-hover").addEventListener('click', () =>
document.querySelector('.screen').classList.toggle('blurry')
)

let book = (bookName,pagesRead,completed) => {
    return {bookName, pagesRead, completed};
}
createBook
editBook
deleteBook
function completion(a,b){
    let percent = (a / b) * 100;
    return `${percent}% DONE`
}