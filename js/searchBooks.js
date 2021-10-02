const searchBar = document.getElementById('search-bar')
let term = null


function searchBooks() {
    searchBar.addEventListener('keyup', (e) => {
        term = e.target.value.toLowerCase()
        fetchBooks(term)
    })
}