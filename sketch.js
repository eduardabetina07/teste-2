let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 8) {
    if(idade >= 20) {
      return "gossip girl";
    } else {
      return "As aventuras de pi";
    }
  } else {
    return "A viagem de chihiro";
  }
}