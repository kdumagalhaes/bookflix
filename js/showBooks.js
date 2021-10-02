import books from './books.js'

const searchForm = document.getElementById('search-form')
searchForm.addEventListener('submit', (e) => e.preventDefault())
const searchBar = document.getElementById('search-bar')
let booksGrid = document.getElementById('books-grid')
let booksResult = []
let term = null

function searchBooks() {
    searchBar.addEventListener('keyup', (e) => {
        term = e.target.value.toLowerCase()
        showBooks(term)
    })
}

function showBooks(term) {
    if (term === undefined || term === '') {
        booksGrid.innerHTML = ''
        books.forEach(({ name }) => {
            const bookImg = `<img class="books__cover" src="./img/books/${name}.jpeg" alt="${name}">`
            booksGrid.innerHTML += bookImg
        })
    } else {
        booksGrid.innerHTML = ''
        books.forEach(({ name }) => {
            if (name.includes(term)) {
                const bookImg = `<img class="books__cover" src="./img/books/${name}.jpeg" alt="${name}">`
                booksGrid.innerHTML += bookImg
            }
        })
    }
}

searchBooks()
export default showBooks()