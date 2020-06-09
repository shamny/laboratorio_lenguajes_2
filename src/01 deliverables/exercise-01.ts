console.log("************** DELIVERABLE 01 *********************");

const miArrayInicial: number[] = [1,2,3,4,5,6];

console.log("Partimos de este Array: ", miArrayInicial);

//1 . Arrays
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y
// devuelva su primer elemento. Utiliza destructuring.

const head = <T>([first]:T[]):T => first;
console.log("Este es el primer elemento del array: ",head(miArrayInicial));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos
// menos el primer elemento. Utiliza rest operator.

const tail = <T>([,...elements]:T[]):T[] => [...elements];
console.log("Todos menos el primero: ",tail(miArrayInicial));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
// los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init  = <T>(unArray:T[]):T[] => unArray.filter((element, index, unArray) => (index< (unArray.length -1))?true:false);
console.log("Todos menos el último: ",init(miArrayInicial));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva 
// el último elemento.
const last = <T>(array:T[]):T => array[array.length-1];
console.log("El último: ",last(miArrayInicial));

