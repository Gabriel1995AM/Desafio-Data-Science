//1ª Parte -  Pensamento Criativo 

// 1.1  Encontrarão um quebra-cabeça, o qual parece impossível de resolver com uma abordagem mais direta. Assim sendo, utilizem o pensamento lateral, visando encontrar soluções não convencionais que explorem as mais diversas perspectivas e possibilidades.

    // Eu buscaria informações na parte de trás do quebra-cabeça, verificando se há alguma mensagem, símbolo ou pista na parte de trás.
    // Usaria a luz da lanterna do celular nas peças do quebra-cabeça para verificar se há detalhes ou padrões ocultos que seriam visíveis somente ao colocar luz direta.
    // Verificar se as peças não teriam um adesivo ou “compartimento” que pudesse mostrar mais informações.
    // Tentaria usar algum comando de voz para ativar ou abrir algo que ajudasse a desmistificar o quebra cabeças. Uma frase ou palavra secreta, quem sabe.
    // Talvez o quebra cabeças seja só uma distração, então enquanto um investiga o quebra cabeças ooutro explora o ambiente para verificar portas de saída,passagens secretas, fundos falsos ou chaves escondidas.
    // O quebra-cabeça pode ser uma distração enquanto o verdadeiro desafio está em outro lugar, usamos
    // uma porta e vamos para outro cômodo em busca de mais informações. É bom anotar no nosso bloco de notas as possibilidades do cômodo anterior para caso seja necessário voltar lá.

//1.2 Vocês devem procurar uma sala de objetos aparentemente aleatórios. Logo, utilizem o brainstorming para gerar ideias sobre como esses objetos podem ser combinados de maneiras criativas com o objetivo de resolver especificamente o problema específico proposto na casa.

    // Livro antigo ao examinar minuciosamente, descobrimos um fundo falso descobrimos um fundo falso que esconde uma chave. Essa chave pode ser a peça chave para abrir uma das portas trancadas na casa.
    // A planta da casa, encontramos ela em uma cômoda antiga. Com a planta, podemos estudar a disposição dos cômodos e identificar as possíveis portas que a chave pode abrir.
    // Uma baússola tilizamos a bússola para nos orientar na direção correta conforme indicado na planta da casa.

//1.3 Em alguma parte da referida casa, vocês encontrarão vários enigmas que são representações metafóricas de alguns problemas do mundo real. Portanto, usem a criatividade para decifrá-los e aplicar as soluções correspondentes aos problemas que encontraram.

    //A sala possui várias portas e vários espelhos que distorcem nossa imagem, mas compreendemos que devemos focar no reflexo da nossa realidade.
    //Observamos que existe um relógio onde o tempo passa muito mais rápido, em vez de nos preocuparmos entendemos que cada um tem seu próprio tempo e só devemos continuar seguindo nosso objetivo.
    // Percebemos que as portas desse cômodo tem símbolos colados nelas, ao juntar todos os símbolos(podemos usar a analogia de juntar nossas energias e manter o foco em nosso objetivo futuro) conseguimos ver a mensagem na parte de trás deles que tem a direção para onde devemos seguir.

//1.4 4. Procurem uma área onde possam experimentar livremente as soluções para o problema específico. Experimentem suas ideias desenvolvidas, aprendam com os resultados dos experimentos realizados e ajustem as estratégias conforme necessário, a fim de avançar e escapar da casa.

// Após seguir a direção indicada pela bússola, chegamos à garagem da casa. Sem uma mesa para reunir as informações, improvisamos um espaço no chão para usar como área de trabalho. Utilizando a chave encontrada no livro antigo, tentamos abrir uma das portas da garagem, porém sem sucesso. 
//Somente após um tempo notamos um cadeado lateral no portão da garagem. Usamos a chave nele e finalmente conseguimos acesso! Ao escapar da casa, percebemos que nem todos os desafios eram reais; alguns exigiam mais atenção para identificar pistas significativas e outros não.

//2ª Parte – Aplicação dos conceitos estudados da lógica:     

// 1. Question Elabore um algoritmo que contenha uma função chamada “Operacao”, a qual recebe 2 parâmetros e, após as operações, 
//imprima a soma da exponenciação, o resto da divisão do primeiro pelo segundo e a subtração do segundo pelo primeiro.

let primeiroNumero = parseFloat(prompt('Digite o primeiro número: '));
let segundoNumero = parseFloat(prompt('Digite o segundo número: '));

function Operacao(num1, num2){
  let somaExponenciacao = num1 ** num2;
  console.log('Soma da exponenciação:', somaExponenciacao);

  let restoDivisao;
    if (num2 !==0){
  restoDivisao = num1 % num2;
  console.log('Resto da divisão do primeiro pelo segundo:', restoDivisao)
}   else {
  alert('Impossivel calcular a divisão se o numero for 0', restoDivisao);
}

  let subtracao = num2 - num1;
  console.log('Subtração do segundo pelo primeiro:', subtracao);
}

Operacao(primeiroNumero, segundoNumero);

//2.  	Um Banco contratou-lhe para implementar uma operação no seu sistema que aplica a taxa de rendimento sobre o valor aplicado na poupança. 
//Logo, o supervisor de TI pediu para implementar uma função que receba dois parâmetros: “CapitalAplicado” e “TempoDeAplicacao:

function calcularRendimento(CapitalAplicado, TempoDeAplicacao) {
    let taxaDeRendimentoMensal = 0.006022; // 0.6022% ao mês

    let valorDoRendimento = CapitalAplicado * (1 + taxaDeRendimentoMensal) ** TempoDeAplicacao;

    return valorDoRendimento;
}

// 2.a) Implemente um algoritmo que solicite ao usuário o valor, em dinheiro, aplicado e a quantidade de meses em aplicação, considerando que a taxa de juros, por mês, é de 0,6022%. 
//Ao final, imprima o valor aplicado inicialmente, a quantidade de meses e o valor final com o acréscimo de juros, em “Template String”, da seguinte forma: A quantia de R$[CapitalAplicado] 
//aplicada em [TempoDeAplicacao] meses, rendeu R$[ValorRendimento] a juros de [TaxaDeJuros]. Caso o valor informado for menor que 0 ou diferente de um número, o algoritmo deve apresentar uma alerta na tela com a seguinte mensagem: 
//“Valor informado inválido! Por favor, informe o valor depositado na poupança”.Em seguida, solicite novamente ao cliente o valor aplicado na poupança e a quantidade de meses, até que o valor válido seja informado.

function rendimentos() {
  let TaxaDeJuros = 0.6022 / 100;
  let CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  let TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));

  if (CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <=  0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.');
      rendimentos(); 
 }  else {
  let valoDoRendimento = CapitalAplicado * (1 + TaxaDeJuros) ** TempoDeAplicacao;
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
  let CapitalAplicado = parseFloat(prompt('Informe o valor aplicado na poupança:'));
  let TempoDeAplicacao = parseInt(prompt('Informe a quantidade de meses em aplicação:'));
  let TaxaDeJuros = 0;

  if (CapitalAplicado === 0 || TempoDeAplicacao === 0 || CapitalAplicado <= 0 || TempoDeAplicacao <= 0) {
      alert('Valor informado inválido! Por favor, informe o valor depositado na poupança e a quantidade de meses em aplicação.");
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

