let data = new Date();

const timer = setInterval(
  () => {
    //neste bloco escrevo o que desejar ser executado
    console.log(data.toLocaleTimeString());
  },
  //aqui descrevo o tempo que leva até
  // o bloco anterior ser executado novamente, em milissegundos
  1000
);

//esta função serve para definir o tempo q leva ate o que for passado seja parado
setTimeout(
  () => {
    // neste bloco chamo a função clearInterval() e passo
    //como paramentro a função que desejo interromper
    clearInterval(timer);
  },
  //aqui descrevo o tempo que vai levar até a execução acima ser
  //interrompida, em millisegundos
  5000
);
