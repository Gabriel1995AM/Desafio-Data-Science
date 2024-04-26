// 1. Question Elabore um algoritmo que contenha uma função chamada “Operacao”, a qual recebe 2 parâmetros e, após as operações, 
//imprima a soma da exponenciação, o resto da divisão do primeiro pelo segundo e a subtração do segundo pelo primeiro.

let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));

function Operacao(n1, n2){
 somaExponenciacao = n1 ** n2;
   console.log('Soma da exponenciação:', somaExponenciacao);
 restoDivisao = n1 % n2;
   console.log('Resto da divisão do primeiro pelo segundo:', restoDivisao);
 subtracao = n2 - n1;
console.log('Subtração do segundo pelo primeiro:', subtracao);
}

Operacao(n1, n2);

// 2.a) Implemente um algoritmo que solicite ao usuário o valor, em dinheiro, aplicado e a quantidade de meses em aplicação, considerando que a taxa de juros, por mês, é de 0,6022%. 
//Ao final, imprima o valor aplicado inicialmente, a quantidade de meses e o valor final com o acréscimo de juros, em “Template String”, da seguinte forma: A quantia de R$[CapitalAplicado] 
//aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento] a juros de [TaxaDeJuros]. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem: 
//“Valor informado inválido! Por favor, informe o valor depositado na poupança”.Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.

function rendimentos() {
  TaxaDeJuros = 0.6022 / 100;
  CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));

  if (CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <=  0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.');
      rendimentos(); 
 }  else {
      valoDoRendimento = CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
      console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${valoDoRendimento.toFixed(2)} a juros de ${TaxaDeJuros * 100}%.`);
}
}

rendimentos();

// 2.b) Faça um algoritmo que, se o capital aplicado for maior ou igual a R$999,99 e menor ou igual R$10.000,00 e o tempo de aplicação for maior que 5 meses e menor que 12 meses, a taxa de rendimento deve ser 2%. 
//O algoritmo deve solicitar ao cliente o valor do capital aplicado e o tempo de aplicação e, após a operação, o programa deve exibir na tela, o valor aplicado, a quantidade de meses em aplicação e o valor de rendimento em R$, utilizando o “Tamplate string”, da seguinte forma: 
//A quantia de R$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento]. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem:
//“Valor informado inválido! Por favor, informe o valor depositado na poupança”. Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.


function rendimento() {
  let CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  let TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));
  let TaxaDeJuros = 0;

  if(CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <=  0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado e a quantidade de meses em aplicação.');
      calcularRendimento(); 
      return; 
}

  if (CapitalAplicado >= 999.99 && CapitalAplicado <= 10000 && TempoDeAplicacao > 5 && TempoDeAplicacao < 12) {
      TaxaDeJuros = 0.02;
} else {
      TaxaDeJuros = 0.006022; 
}

  let valorDoRendimento = CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
  console.log(`A quantia de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${valorDoRendimento.toFixed(2)}.`);
}

rendimento();

// 2.c) c) Elabore um algoritmo que se o valor da poupança do cliente for maior que R$ 50.000,00 e menor ou igual R$100.000,00 e, se o tempo de aplicação for maior que 12 (meses) e menor ou igual a 24(meses), 
//a taxa de juro de ser 5 %. Caso o tempo de aplicação for maior ou igual a 12 (meses) e menor ou igual a 24 (meses), a taxa de juros deverá ser de 10%. Por fim, imprima a mensagem na tela, em “Template String” da seguinte forma:
//“A poupança de  R$[CapitalAplicado] aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento]”. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem:
//“Valor informado inválido! Por favor, informe o valor depositado na poupança!”. Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.


function rendimento() {
  let CapitalAplicado = parseFloat(prompt("Informe o valor aplicado na poupança:"));
  let TempoDeAplicacao = parseInt(prompt("Informe a quantidade de meses em aplicação:"));
  let TaxaDeJuros = 0;

  if (CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <= 0 || TempoDeAplicacao <= 0) {
      alert("Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.");
      return; 
  }

   if (CapitalAplicado > 50000 && CapitalAplicado <= 100000 && TempoDeAplicacao > 12 && TempoDeAplicacao <= 24) {
      TaxaDeJuros = 0.05;
  } else if (CapitalAplicado > 50000 && CapitalAplicado <= 100000 && TempoDeAplicacao >= 12 && TempoDeAplicacao <= 24) {
      TaxaDeJuros = 0.10;
  } else {
      TaxaDeJuros = 0.006022;
  }

  let valorDoRendimento= CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
  console.log(`A poupança de R$${CapitalAplicado} aplicada em ${TempoDeAplicacao} meses, rendeu R$${valorDoRendimento.toFixed(2)} com uma taxa de juros de ${(TaxaDeJuros * 100).toFixed(2)}%.`);
}

rendimento();

// 3. 3.  O seu primo pretende desenvolver um jogo de acerto para que o filho dele possa brincar, mas como ele não possui o conhecimento em programa, solicitou a sua ajuda, 
//tendo em conta que você havia lhe dito que está fazendo o programa trilhas e aprendendo sobre o algoritmo e lógica de programação. Neste contexto, ele definiu as funcionalidades que gostaria que o jogo tenha:

//- O programa deve criar um número secreto e solicitar ao usuário que chute um número entre 20 e 30;
//- Se o número secreto for igual ao de chute, o programa deve exibir uma mensagem de acerto;
//- Se o número secreto for diferente do número de chute, o programa deve exibir uma mensagem de erro, solicitando novamente um número entre 20 e 30;
//- O programa deve oferecer 3 tentativas para o chute e, por fim, exibir uma mensagem de tentativas esgotadas e finalizar.

alert('Bem-vindo ao jogo do número secreto! Você tem 3 tentativas !');

function gerarNumeroSecreto() {
    let numeroSecreto = Math.floor(Math.random() * 11) + 20;
    let tentativas = 3;

    while (tentativas > 0) {
       let chute = parseInt(prompt(`Tentativa ${4 - tentativas}: Digite um número entre 20 e 30:`));
        if (chute >= 20 && chute <= 30) {
            
            if (chute === numeroSecreto) {
                alert('Parabéns! Você acertou o número secreto!');
                return;

            } else if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
            } else {
            alert('Número fora do intervalo! Por favor, digite um número entre 20 e 30.');
        }

        tentativas--;
    }

    alert(`Tentativas esgotadas! O número secreto era ${numeroSecreto} ! você perdeu :(. `);
}

gerarNumeroSecreto();

