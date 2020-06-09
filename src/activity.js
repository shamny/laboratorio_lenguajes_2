
//const miArrayIncial = [1,2,3,4,5,6]
//const unArrayNuevo = [7,8,9,10,11,12]
console.log("Partimos de este Array: ", miArrayIncial);

//1 . Arrays
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y
// devuelva su primer elemento. Utiliza destructuring.

//const head = ([first]) => first;

console.log("Este es el primer elemento del array: ",head(miArrayIncial));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos
// menos el primer elemento. Utiliza rest operator.

//const tail = ([,...elements]) => [...elements];

console.log("Todos menos el primero: ",tail(miArrayIncial));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos
// los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

//const init = (unArray) => unArray.filter((element, index, unArray) => (index< (unArray.length -1))?true:false);

console.log("Todos menos el último: ",init(miArrayIncial));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva 
// el último elemento.

//const last = (array) => array[array.length-1];

console.log("El último: ",last(miArrayIncial));

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

// const concat = (a,b) => [a,b].flat();

// const concat = (a,b) => [...a,...b];

console.log("Concateno 2 arrays: ",concat(miArrayIncial,unArrayNuevo));

// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto 
// con las propiedades de source
//let miObjetoInicial ={
//    id:1,
//    name: "nombre",
//    surname:"apellido"
//}

//const clone = ({...source}) => source; 

//let miNuevoObjeto = clone(miObjetoInicial);

//console.log("Mi nuevo objeto clonado: ",miNuevoObjeto);

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo
// objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre,
// source sobreescribe a target.
//const unObjeto = { name: "Maria", surname: "Ibañez", country: "SPA" };
//const otroObjeto = { name: "Luisa", age: 31, married: true };

//const merge = (a,b) => Object.assign(a,b);

//console.log(merge(unObjeto,otroObjeto));