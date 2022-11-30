class Usuario {
    constructor(name, lastname, books, pets){
        this.name = name
        this.lastname = lastname
        this.age = age
        this.books = books
        this.pets = pets
    }

    getName = () => this.name
    getLastname = () => this.lastname
    getAge = () => this.age
    getBooks = () => this.books
    getPets = () => this.pets

    printValues = () =>
    console.log(
        Nombre: ${this.name}
        Apellido: ${this.lastname}
        Edad: ${this.age}
        Libros: ${this.books}
        Mascotas: ${this.pets})
} 

const Usuario = new Usuario("Melissa", "Sanchez", 27, ["pajaro espino", "retrato en sangre"], ["Dago", "Kai"])