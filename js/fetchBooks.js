const books = [{
        "name": "harry-potter",
        "thumb": './img/books/harry-potter.jpeg'
    },
    {
        "name": "coraline",
        "thumb": "./img/books/coraline.jpeg"
    },
    {
        "name": "cortico",
        "thumb": "./img/books/cortico.jpeg"
    },
    {
        "name": "culinaria",
        "thumb": "./img/books/culinaria.jpeg"
    },
    {
        "name": "geografia",
        "thumb": "./img/books/geografia.jpeg"
    },
    {
        "name": "harry-pedra",
        "thumb": "./img/books/harry-pedra.jpeg"
    },
    {
        "name": "novelas",
        "thumb": "./img/books/novelas.jpeg"
    },
    {
        "name": "pele",
        "thumb": "./img/books/pele.jpeg"
    },
    {
        "name": "pequeno-principe",
        "thumb": "./img/books/.jpeg"
    },
    {
        "name": "poemas",
        "thumb": "./img/books/.jpeg"
    },
    {
        "name": "quarta",
        "thumb": "./img/books/.jpeg"
    },
    {
        "name": "saude",
        "thumb": "./img/books/.jpeg"
    }
]

let booksGrid = document.getElementById('books')
const bookImg =

    books.forEach(({ thumb, name }) => {
        console.log(thumb, name)
        const bookImg = `<img class="books__cover" src="./img/books/${name}.jpeg" alt="${name}">`
        booksGrid.innerHTML += bookImg
    })