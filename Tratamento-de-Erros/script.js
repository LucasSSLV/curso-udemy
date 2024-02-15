//exemplo de uso do throw

const soma = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new ReferenceError('os valores devem ser numeros')
    }
}

console.log(soma(2,'lucas'));

//exemplo de try/catch/finally obs: o finally sempre é executado

try {
    // console.log(a);
    console.log('abri arquivo');
    console.log('manipulei o arquivo e fechei')
} catch (error) {
    console.log(`houve erro aqui! ${error}`);
} finally {
    console.log('sempre sou executado')
}
