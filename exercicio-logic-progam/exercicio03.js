//escrever uma função que retorne
//numero é divisivel por 3 = Fizz
//numero é divisível por 5 = Buzz
//o numero é divisível por ambos os numeros acima = FizzBuzz
//se não for divisível por ambos retornar o próprio numero
//checar se o numero é realmente um numero

const fizzBuzz = (num) => {
  if (typeof num !== 'number') {
    return "digite um numero";
  }
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  }
  if (num % 3 == 0) {
    return "Fizz";
  }
  if (num % 5 == 0) {
    return "Buzz";
  }
};

for (i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
