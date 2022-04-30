const objeto = { pai : `nako`, mae: `tania`, carro : 2};

console.log(objeto.carro);

objeto.carro = 3;

console.log(objeto.carro);

Object.freeze(objeto); //Este metódo proíbe/congela todos os tipos de alteração

objeto.carro = 23;

console.log(objeto.carro);
