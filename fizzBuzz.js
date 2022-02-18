
function fizzBuzz(numero) {
    if(typeof(numero) !== 'number'){
        console.log('não é numero meu bom')
    }

    if (numero % 5 === 0 && numero % 3 === 0) {
        console.log('FizzBuzz')
    } else 
    if(numero % 5 === 0){
        console.log('Buzz')
    } else
    if(numero % 3 === 0){
        console.log('Fizz')
    } else {
        console.log(numero)
    }
}

fizzBuzz(4)