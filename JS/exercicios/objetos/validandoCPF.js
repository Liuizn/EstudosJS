const cpf = '705.484.450-52';
const cpf2 = '983.197.160-47';


//Pode inserir com máscara
function validaCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g ,'').split('');

    let i2 = 0;
    let somador = 0; 
    for (let i = 10; i >= 2; i--) {
        somador += +cpfLimpo[i2] * i 
        i2++;
    }
    let primeiroDigito = 11 - (somador % 11) > 9 ? 0 : 11 - (somador % 11);

    i2 = 0; somador = 0; 
    for (let i = 11; i >= 2; i--) {
        somador += i2 != 9 ? +cpfLimpo[i2] * i : primeiroDigito * i;
        i2++;
    }
    
    let segundoDigito = 11 - (somador % 11) > 9 ? 0 : 11 - (somador % 11);

    
    cpfComDigitos = cpfLimpo.slice(0,9);
    
    [primeiroDigito, segundoDigito].forEach(e=> cpfComDigitos.push(`${e}`));
    

    return +cpfLimpo.join('') === +cpfComDigitos.join('')
    
}

console.log(validaCPF(cpf2));