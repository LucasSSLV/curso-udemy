//exemplo de uso
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number === 3) {
    console.log("achei o 3");
    //aqui encontrou o numero 2 e continua a iteração
    continue;
  }
  console.log(number);
  if (number === 6) {
    console.log("achei o 6 e parando");
    //aqui achou o 6 e o break parou a iteração
    break;
  }
}
