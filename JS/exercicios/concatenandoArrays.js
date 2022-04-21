const a1 = [1,2,3]
const a2 = [4,5,6]

// Utilizando spread
const a3 = [...a1, ...a2]

//Utilizando .concat
const a4 = a2.concat(a1)

console.log(a3)
console.log(a4)
