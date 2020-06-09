console.log("************** DELIVERABLE 04 *********************");
//4. Read Books
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

interface Book{
    title:string;
    isRead:boolean;
}

interface Library{
    books:Book[],
}

function isBookRead(a:Library, b:String) {
  let leido:Boolean = false;
  a.books.filter((element:Book) => (element.title === b)?leido = element.isRead:false);
  return leido;
}


const myLibrary:Library ={ 
    books: [
            { title: "Harry Potter y la piedra filosofal", isRead: true },
            { title: "Canción de hielo y fuego", isRead: false },
            { title: "Devastación", isRead: true },
]};


console.log("He leído Devastación: ", isBookRead(myLibrary, "Devastación")); // true
console.log("He leído Canción de hielo y fuego: ", isBookRead(myLibrary, "Canción de hielo y fuego")); // false
console.log("He leído Los Pilares de la tierra: ",isBookRead(myLibrary, "Los Pilares de la Tierra")); // false
