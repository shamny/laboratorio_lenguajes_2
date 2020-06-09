console.log("************** DELIVERABLE 03 *********************");
// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto 
// con las propiedades de source
let miObjetoInicial = {
    id:1,
    name: "nombre",
    surname:"apellido"
}
const clone = <T>({...source}:T):T => source; 

let miNuevoObjeto = clone(miObjetoInicial);
console.log("Mi nuevo objeto clonado: ",miNuevoObjeto);

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo
// objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre,
// source sobreescribe a target.
const unObjeto = { name: "Maria", surname: "Ibañez", country: "SPA" };
const otroObjeto = { name: "Luisa", age: 31, married: true };

const merge = (a,b) => Object.assign(a,b);
console.log("Mi nuevo objeto mergeado: ",merge(unObjeto,otroObjeto));
