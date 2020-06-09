console.log("************** DELIVERABLE 02 *********************");
const concat1: number[] = [1,2,3,4,5,6];
const concat2: number[] = [7,8,9,10,11,12];

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = <T>(a:T[],b:T[]):T[] => [...a,...b];
console.log("Concateno 2 arrays: ",concat(concat1,concat2));

