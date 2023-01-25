document.querySelector(".newBook-hover").addEventListener('click', () =>
document.querySelector('.screen').classList.toggle('blurry')
)

let book = (bookName,pagesRead,completed) => {
    return {bookName, pagesRead, completed};
}
createBook
editBook
deleteBook