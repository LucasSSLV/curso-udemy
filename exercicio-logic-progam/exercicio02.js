//escrever uma função que se chama ePaisagem que
//recebe 2 argumentos largura e altura de uma imagem
//retorne true se a imagem estiver no modo paisagem

//por ser apenas uma checagem a função já retorna true ou false
const ePaisagem = (largura, altura) => {
  //esse return pode ser reduzido
  //   return largura > altura ? true : false;
 return largura >= altura;
};

console.log(ePaisagem(1080, 720));
