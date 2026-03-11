function mostrarCodigo(codigo) {
    document.getElementById("codigo").textContent = codigo
}

//////////////////////////////
// EXERCÍCIOS LÓGICA 1–30
//////////////////////////////

function exercicio1() {
    let nome = prompt("Digite seu nome")
    console.log("Olá " + nome)
}

function exercicio2() {
    let idade = Number(prompt("Digite sua idade"))
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

function exercicio3() {
    let n1 = Number(prompt("Número 1"))
    let n2 = Number(prompt("Número 2"))
    console.log("Soma:", n1 + n2)
}

function exercicio4() {
    let numero = Number(prompt("Digite um número"))
    console.log("Dobro:", numero * 2)
}

function exercicio5() {
    let numero = Number(prompt("Digite um número"))
    console.log("Metade:", numero / 2)
}

function exercicio6() {
    let numero = Number(prompt("Digite um número"))
    if (numero % 2 === 0) {
        console.log("Par")
    } else {
        console.log("Ímpar")
    }
}

function exercicio7() {
    let idade = Number(prompt("Idade"))
    if (idade >= 60) {
        console.log("Idoso")
    } else {
        console.log("Não idoso")
    }
}

function exercicio8() {
    let n1 = Number(prompt("Nota 1"))
    let n2 = Number(prompt("Nota 2"))
    console.log("Média:", (n1 + n2) / 2)
}

function exercicio9() {
    let numero = Number(prompt("Número"))
    console.log("Quadrado:", numero * numero)
}

function exercicio10() {
    let numero = Number(prompt("Número"))
    console.log("Triplo:", numero * 3)
}

function exercicio11() {
    let numero = Number(prompt("Número"))
    console.log("Antecessor:", numero - 1)
}

function exercicio12() {
    let numero = Number(prompt("Número"))
    console.log("Sucessor:", numero + 1)
}

function exercicio13() {
    let valor = Number(prompt("Valor"))
    console.log("Valor com 10%:", valor * 1.10)
}

function exercicio14() {
    let celsius = Number(prompt("Celsius"))
    console.log("Fahrenheit:", (celsius * 9 / 5) + 32)
}

function exercicio15() {
    let numero = Number(prompt("Número"))
    console.log("Raiz:", Math.sqrt(numero))
}

// EXERCICIO 16
function exercicio16() {
    const precoproduto = Number(prompt("Digite o preço do produto:"));
    const valordesconto = Number(prompt("Digite a porcentagem de desconto (sem %):"));

    const resultado = (precoproduto * valordesconto) / 100;

    alert(`Valor do desconto: ${resultado}`);

    // OK 
}

// EXERCICIO 17
function exercicio17() {
    const celsius = Number(prompt("Digite a temperatura em celsius para converter em fahrenheit:"));

    const fahrenheit = celsius * 1.8 + 32;

    alert(`A temperatura em Fahrenheit é: ${fahrenheit} °F`);
    console.log("A temperatura em Fahrenheit é:" + resultado + " °F");

    // Ok
}

// EXERCICIO 18
function exercicio18() {
    const dias = Number(prompt("digite por quantos dias voce ficará com o carro"));
    const km = Number(prompt("digite quantos km será percorrido"));

    const valorDia = 60;
    const valorKM = 0.15;

    const resultado = (dias * valorDia) + (km * valorKM);

    alert(`o preço total a pagar é: ${resultado}`);

}

// EXERCICIO 19
function exercicio19() {
    const idade = Number(prompt("Digite sua idade:"));

    if (idade < 16) {
        alert(`Sua idade é ${idade} anos! Situação: Não votante`)
        console.log("Sua idade é " + idade + " anos! Situação: Não votante")
    }
    else if (idade >= 16 && idade <= 17) {
        alert(`Sua idade é ${idade} anos! Situação: Voto opicional`)
        console.log("Sua idade é " + idade + " anos! Situação: Voto opcional")
    }
    else if (idade >= 18 && idade <= 70) {
        alert(`Sua idade é ${idade} anos! Situação: Voto obrigatório`)
        console.log("Sua idade é " + idade + " anos! Situação: Voto obrigatório")
    }
    else {
        alert(`Seu voto não é obrigatório.`)
        console.log("Sua idade é " + idade + " anos! Situação: Seu voto não é obrigatório.")
    };

}

// EXERCICIO 20
function exercicio20() {
    alert(`Olá! 
Vamos medir seu Indice de Massa Corporal? Clique em OK e descubra o seu.`);

    const peso = Number(prompt("Digite seu peso (kg)"));
    const altura = Number(prompt("Digite sua altura (metros)"));

    const resultado = peso / (altura * altura);

    if (resultado <= 18.5) {
        alert(`Seu IMC é ${resultado}. Classificação: Abaixo do peso.`)
        console.log("Seu IMC é " + resultado + " Classificação: Abaixo do peso.")
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
        alert(`Seu IMC é ${resultado}. Classificação: Peso normal.`);
        console.log("Seu IMC é " + resultado + " Classificação: Peso normal.")
    }
    else if (resultado >= 25 && resultado <= 29.9) {
        alert(`Seu IMC é ${resultado}. Classificação: Sobrepeso.`)
        console.log("Seu IMC é " + resultado + ". Classificação: Sobrepeso.")
    }
    else {
        alert(`Seu IMC é ${resultado}. Classificação: Obesidade.`)
        console.log("Seu IMC é " + resultado + ". Classificação: Obesidade.")
    };

    // Ok
}

// EXERCICIO 21
function exercicio21() {
    const agua = 5.00;
    const refri = 8.00;
    const cafe = 3.00;
    const cafecomleite = 3.50

    alert(`Olá! Essa é a nossa lista de produtos e valores:
        1. Água: R$ ${agua} 
        2. Refrigerante: R$ ${refri}
        3. Café: R$ ${cafe}
        4. Café com leite: R$ ${cafecomleite}
        Obs. Anote o número do produto desejado. (Ex. 1
        O produto 1 é Água)`)

    const nome = prompt("Para iniciar a compra, digite seu nome:");
    const produto = Number(prompt("Qual o NÚMERO do produto? (Você só pode escolher uma especificação de produto. Ex. 1 (Água)"));
    const qtd = Number(prompt("Quantidade:"));

    if (produto === 1) {
        alert(`Você escolheu ${qtd} unidades do produto: Água`);
    }
    else if (produto === 2) {
        alert(`Você escolheu ${qtd} unidades do produto: Refrigerante`);
    }
    else if (produto === 3) {
        alert(`Você escolheu ${qtd} unidades do produto: Café`);
    }
    else if (produto === 4) {
        alert(`Você escolheu ${qtd} unidades do produto: Café com leite`);
    }
    else {
        alert(`O Produto selecionado é Inválido!`);
    }



    let precoproduto = 0;

    if (produto === 1) {
        precoproduto = agua
    }

    else if (produto === 2) {
        precoproduto = refri
    }

    else if (produto === 3) {
        precoproduto = cafe
    }
    else if (produto === 4) {
        precoproduto = cafecomleite
    };

    const resultado = qtd * precoproduto;

    const formaPagamento = Number(prompt(
        `Valor total: R$ ${resultado}

Escolha a opção de pagamento:
1. À vista (10% de desconto)
2. 2x no cartão
3. 3x ou mais`
    ));

    let valorfinal = resultado;

    if (formaPagamento === 1) {
        valorfinal = resultado * 0.9
    }
    else if (formaPagamento === 2) {
        valorfinal = resultado
    }
    else if (formaPagamento >= 3) {
        valorfinal = resultado * 1.2
    }
    else {
        alert(`Inválido!`)
    }

    alert(`Olá ${nome}! Obrigada pela compra!
Você comprou o produto: ${produto}
Quantidade: ${qtd}
Valor final: R$${valorfinal} `);

    // Ok
}

// EXERCICIO 22
function exercicio22() {
    alert(`Oii, vamos descobrir se podemos formar um triangulo ?`);

    const medidaUm = Number(prompt("Digite um comprimento:"));
    const medidaDois = Number(prompt("Digite outro comprimento:"));
    const medidaTres = Number(prompt("Digite o último comprimento:"));

    if (medidaUm + medidaDois > medidaTres && medidaDois + medidaTres > medidaUm && medidaTres + medidaUm > medidaDois) {
        alert(`As retas PODEM formar um triângulo.`)
    }
    else {
        alert(`As retas NÃO PODEM formar um triângulo.`)
    };
    // Ok
}

// EXERCICIO 23
function exercicio23() {
    alert(`Descubra qual o maior número entre três números diferentes`);

    const numero1 = Number(prompt("Digite o primeiro número:"));
    const numero2 = Number(prompt("Digite o segundo número:"));
    const numero3 = Number(prompt("Digite o terceiro número:"));

    if (numero1 > numero2 && numero1 > numero3) {
        alert(`O maior número é: ${numero1}`)
    }
    else if (numero2 > numero1 && numero2 > numero3) {
        alert(`O maior número é: ${numero2}`)
    }
    else {
        alert(`O maior número é: ${numero3}`)
    };

    // Ok
}

// EXERCICIO 24
function exercicio24() {
    const numero1 = Number(prompt("Digite o seu primeiro numero"));
    const numero2 = Number(prompt("Digite o seu segundo numero"));

    if (numero1 > numero2) {
        alert(`O primeiro numero ${numero2} e o segundo numero ${numero1}`)
        console.log("O primeiro numero " + numero2 + " e o segundo numero " + numero1);
    }
    else if (numero1 === numero2) {
        alert(`O primeiro numero ${numero1} e o segundo numero ${numero2}" sao iguais`)
        console.log("O primeiro numero " + numero1 + " e o segundo numero " + numero2 + " sao iguais");
    }
    else {
        alert(`O primeiro numero ${numero1} e o segundo numero ${numero2}`)
        console.log("O primeiro numero " + numero1 + " e o segundo numero " + numero2)
    };
}

// EXERCICIO 25
function exercicio25() {
    const ano = Number(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert(`O ano ${ano} é bissexto`)
    }
    else {
        alert(`O ano ${ano} não é bissexto`)
    };
}

// EXERCICIO 26
function exercicio26() {
    const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));

    const idade = 2025 - anoNascimento;

    if (idade < 18) {
        alert(`Você nasceu em ${anoNascimento} e tem ${idade} anos.
Ainda vai se alistar. Faltam ${18 - idade} anos.`)
    }
    else if (idade === 18) {
        alert(`Você nasceu em ${anoNascimento} e tem ${idade} anos.
Prescisa se alistar esse ano.`)
    }
    else {
        alert(`Você nasceu em ${anoNascimento} e tem ${idade} anos.
Já passou da idade de alistamento`)
    };

    // Ok
}

// EXERCICIO 27
function exercicio27() {
    alert(`Olá!! Vamos calcular sua média? Clique em OK.`);

    const nota1 = Number(prompt("Digite sua primeira nota:"));
    const nota2 = Number(prompt("Digite sua segunda nota:"));

    const resultado = (nota1 + nota2) / 2;

    if (resultado < 5.0) {
        alert(`Reprovado. Sua média é ${resultado}.`)
    }
    else if (resultado >= 5.0 && resultado < 7.0) {
        alert(`Reprovado. Sua média é ${resultado}.`)
    }

    else {
        alert(`APROVADO. Sua média é ${resultado}.`)
    }

    // ok
}

// EXERCICIO 28
function exercicio28() {
    alert(`Jogada de dois jogadores (1-Pedra, 2-Papel, 3-Tesoura) e determinar o vencedor.`);

    const jogador1 = Number(prompt(`JOGADOR 1: Digite sua jogada
(1-Pedra, 2-Papel, 3-Tesoura)`));

    const jogador2 = Number(prompt(`JOGADOR 2: Digite sua jogada
(1-Pedra, 2-Papel, 3-Tesoura)`));

    if (jogador1 === jogador2) {
        alert("Empate!");
    }
    else if (
        (jogador1 === 1 && jogador2 === 3) ||
        (jogador1 === 2 && jogador2 === 1) ||
        (jogador1 === 3 && jogador2 === 2)
    ) {
        alert("Jogador 1 VENCEU!");
    }
    else if (
        (jogador2 === 1 && jogador1 === 3) ||
        (jogador2 === 2 && jogador1 === 1) ||
        (jogador2 === 3 && jogador1 === 2)
    ) {
        alert("Jogador 2 VENCEU!");
    }
    else {
        alert("Jogada inválida! Digite apenas 1, 2 ou 3.");
    };

    // OK
}

// EXERCICIO 29
function exercicio29() {
    const nome = prompt("Digite seu nome:");
    alert(`Olá, ${nome}! Vamos calcular o preço da sua passagem`);

    const km = Number(prompt("Digite a distância em Km:"));

    if (km <= 200) {
        alert(`Distância ${km}, o preço da passagem é: R$${km * 0.50} `)
    }
    else {
        alert(`Distância ${km}, o preço da passagem é: R$${km * 0.45} `)
    };
}

// EXERCICIO 30
function exercicio30() {
    const nome = prompt("Olá, bem vindo ao Banco Kafra! \n Digite seu nome:");
    alert(`Vamos simular um empréstimo bancário? Clique em OK e prossiga.`);

    const valorCasa = Number(prompt("Olá " + nome + ", digite o valor da casa:"));
    const valorSalario = Number(prompt("Agora, digite o seu salário:"));
    const anos = Number(prompt("Digite em quantos anos você quer pagar:"));

    let meses = anos * 12;
    let prestacaoMensal = valorCasa / meses;
    let limite = valorSalario * 0.30;

    if (prestacaoMensal <= limite) {
        alert(`Empréstimo APROVADO. A prestação mensal será de: R$${prestacaoMensal.toFixed(2)}`)
    }
    else {
        alert(`Empréstimo NEGADO!`)
    }

    // ok

}

// Exercícios: Arrays e Objetos

// EXERCICIOS NOVOS 1 AO 10 - ARRAY & OBJETO

// exercicio1
// Lista de Compras
// Peça ao usuário 5 itens (um por vez) e salve-os em um array.
// Mostre a lista final e quantos itens foram adicionados.
// Peça um nome de item para remover; se existir, remova e mostre a lista atualizada; se não existir, 
// informe ao usuário.
function exercicio01() {

    alert(`Oii! Vamos fazer sua lista de compras?`)

    const item1 = prompt("digite o primeiro item:")
    const item2 = prompt("digite o segundo item:")
    const item3 = prompt("digite o terceiro item:")
    const item4 = prompt("digite o quarto item:")
    const item5 = prompt("digite o quinto item:")

    const array = [
        item1,
        item2,
        item3,
        item4,
        item5
    ]

    alert(`Os itens são:
        Item 1: ${item1}
        Item 2: ${item2}
        Item 3: ${item3}
        Item 4: ${item4}
        Item 5: ${item5}
        Foram adicionados: ${array.length} itens`)

    const remover = prompt("Deseja remover um item? Digite sim ou não:")

    if (remover === "sim") {
        const removerResposta = prompt("digite o item que quer remover:")
        // descobrir posição do item
        const indice = array.iOf(removerResposta)
        // includes vai identificar se o item esta na lista
        array.includes(removerResposta)
        // remover do array
        array.splice(indice, 1)
        alert(`O item removido foi: ${removerResposta}, sua lista atualizada é: ${array}`)
    } else {
        alert(`Nenhum item foi removido. A sua lista é: ${array}.`)
    }
}

// Cadastro de Contato
// Peça nome, telefone e email; crie um objeto {nome, telefone, email}.
// Mostre os dados e pergunte se quer atualizar o telefone ou email; aplique a mudança no objeto 
// e mostre o objeto atualizado.
// Implemente a opção de "limpar" o cadastro (tornar campos vazios) caso o usuário confirme.

function exercicio02() {
    alert(`Vamos criar seu cadastro! Clique em OK e preencha os dados.`)
    const nome = prompt("Para começar, digite seu nome:")
    const tel = prompt("Digite seu telefone:")
    const email = prompt("Digite seu email:")

    const dados = {
        nome,
        tel,
        email
    }

    alert(`Seu dados são: 
    Nome: ${dados.nome}
    Telefone: ${dados.tel}
    Email: ${dados.email}`)

    const atualizar = prompt("deseja atualizar telefone ou email? Se telefone digite 1 e se email digite 2, caso não, digite 3")

    if (atualizar === "1") {
        const telAtualizado = prompt("digite o novo numero:")
        dados.tel = telAtualizado
        alert(`Telefone atualizado com sucesso! Seus dados atuais são:
    Nome: ${dados.nome}
    Telefone: ${dados.tel}
    Email: ${dados.email}
    
    Cadastro realizado com sucesso!`)
    }

    else if (atualizar == "2") {
        const emailAtualizado = prompt("digite o novo email:")
        dados.email = emailAtualizado
        alert(`Email atualizado com sucesso! Dados atuais:
    Nome: ${dados.nome}
    Telefone: ${dados.tel}
    Email: ${dados.email}
    
    Cadastro realizado com sucesso!`)

    }

    else {
        alert(`Seus dados são:
    Nome: ${dados.nome}
    Telefone: ${dados.tel}
    Email: ${dados.email}

    Cadastro realizado com sucesso!`)
    }

    // OK
}
// exercicio 3
function exercicio03() {

    const idade1 = Number(prompt("Digite a primeria idade:"));
    const idade2 = Number(prompt("Digite a segunda idade:"));
    const idade3 = Number(prompt("Digite a terceira idade:"));
    const idade4 = Number(prompt("Digite a quarta idade:"));
    const idade5 = Number(prompt("Digite a quinta idade:"));

    const array = [
        idade1,
        idade2,
        idade3,
        idade4,
        idade5
    ]

    alert(`Essas são as idades digitadas: ${array}`)
    // filtro que separa apenas os +18
    const maiores18 = array.filter(idade => idade > 18)
    alert(`Os maiores de 18 anos são: ${maiores18}`)
    // filtro que separa os menores 18
    const menores18 = array.filter(idade => idade < 18)
    // quantidade maior e menor de idade
    alert(`A quantidade de pessoas maiores de idade é: ${maiores18.length} (${maiores18}) e as menores de idade são: ${menores18.length} (${menores18})`)
}

// Calculadora de Preço
// Peça 4 preços e guarde em um array; calcule a soma total e a média.
// Remova o maior preço do array (simulando um desconto/promocão) e recalcule a média sem esse item.

function exercicio04() {
    alert(`Vamos calcular preços!`)
    console.log("Vamos calcular preços!")

    const preco1 = Number(prompt("Digite o primeiro valor:"))
    const preco2 = Number(prompt("Digite o segundo valor:"))
    const preco3 = Number(prompt("Digite o terceiro valor:"))
    const preco4 = Number(prompt("Digite o quarto valor:"))

    const array = [
        preco1,
        preco2,
        preco3,
        preco4
    ]

    const somaPrecos = preco1 + preco2 + preco3 + preco4
    const mediaPrecos = somaPrecos / 4

    alert(`Os valores inseridos foram: ${array}
A soma total é: ${somaPrecos}
E a média é: ${mediaPrecos}`)

    const maiorPreco = Math.max(...array)

    const indiceMaior = array.iOf(maiorPreco)

    // esse remove
    array.splice(indiceMaior, 1)

    let novaSoma = 0

    // criar uma variável chamada i.
    // i < array.length: repetir enquanto i for menor que o tamanho do array.

    for (let i = 0; i < array.length; i++) {
        novaSoma += array[i]
    }
    const novaMedia = novaSoma / array.length

    alert(`Após remover o maior preço (${maiorPreco}):

Novos valores: ${array}
Nova soma: ${novaSoma}
Nova média: ${novaMedia}`)
}


// Inventário Simples
// Crie um objeto produto {nome, quantidade}. Peça nome e quantidade.
// Se quantidade > 0 mostre "Em estoque", senão "Fora de estoque".
// Implemente opções para "repor" (aumentar) ou "retirar" (diminuir) 
// quantidade pelo usuário e mostre o novo estado.

function exercicio05() {
    alert(`Inventário simples!`)

    const nome = prompt("Digite o nome do produto:")
    const quantidade = Number(prompt("Digite a quantidade:"))

    const produto = {
        nome,
        quantidade
    }

    if (quantidade > 0) {
        alert(`Em estoque`)
    }
    else {
        alert(`Fora de estoque`)
    }

    const acao = prompt(`
O que deseja fazer?
1 - Repor
2 - Retirar
3 - Nada
`)

    if (acao === "1") {
        const qtdeAdicionar = Number(prompt("Digite quantas unidades precisa repor:"))

        alert(`Voce adicionou ${qtdeAdicionar} unidades de ${nome}, agora ficou ${qtdeAdicionar + quantidade}`)
    }

    else if (acao === "2") {
        const retirar = Number(prompt("Digite quantas unidades precisa retirar:"))
        alert(`Voce retirou ${retirar} unidades de ${nome}, agora ficou ${quantidade - retirar}.`)
    }

    else {
        alert(`Voce não quer mexer no estoque.`)
    }
}

// Buscar Usuário
// Monte um array com 3 objetos de usuários (nome, email).
// Peça um email e verifique se existe um usuário com esse email; mostre o nome se 
// encontrado, ou "Não encontrado" caso contrário.
// Se encontrado, ofereça a opção de remover o usuário do array e exiba a lista atualizada.

function exercicio06() {

    alert("Olá! Entre em um usuário existente.");

    let arrayUsuarios = [
        { nome: "Kauanny dos Anjos", email: "kau@gmail.com" },
        { nome: "Kayk Junior", email: "kayk@gmail.com" },
        { nome: "Gustavo Henrique", email: "shoggografia@gmail.com" }
    ];

    const usuario = prompt("Digite seu email:");

    // procurar usuario
    let usuarioEncontrado = arrayUsuarios.find(u => u.email === usuario);

    if (usuarioEncontrado) {
        let pedirRemover = prompt(
            "Usuário encontrado!\n" +
            "Nome: " + usuarioEncontrado.nome + "\n" +
            "Email: " + usuarioEncontrado.email + "\n" +
            "Deseja remover seu usuário? Digite 'sim' ou 'nao':"
        );

        if (pedirRemover.toLowerCase() === "sim") {
            arrayUsuarios = arrayUsuarios.filter(u => u.email !== usuario);
            alert("Usuário removido. Lista atualizada:\n" +
                arrayUsuarios.map(u => `${u.nome} - ${u.email}`).join("\n"));
        } else {
            alert("Usuário mantido.");
        }
    } else {
        let cadastrar = prompt("Usuário não encontrado! Deseja se cadastrar? Digite 'sim' ou 'nao':");
        if (cadastrar.toLowerCase() === "sim") {
            let novoNome = prompt("Digite seu nome:");
            let novoEmail = prompt("Digite seu email:");
            arrayUsuarios.push({ nome: novoNome, email: novoEmail });
            alert("Dados enviados para aprovação de cadastro!")
        } else {
            alert("Cadastro não realizado.");
        }
    }
}

// Marcar Tarefas
// Peça 3 tarefas e armazene como objetos {texto, feita:false}.
// Permita que o usuário marque uma tarefa como feita (por índice) e também que remova uma tarefa.
// Mostre a lista antes e depois das alterações e conte quantas tarefas estão concluídas.
function exercicio07() {
    alert(`Bem vindo ao marcador de tarefas!`)

    const nome = prompt("digite seu nome:")
    const tarefa1 = prompt("digite a primeira tarefa:")
    const tarefa2 = prompt("digite a segunda tarefa:")
    const tarefa3 = prompt("digite a terceira tarefa:")

    let objetosTarefas = [
        { texto: tarefa1, feita: false },
        { texto: tarefa2, feita: false },
        { texto: tarefa3, feita: false }
    ]

    alert("Lista inicial:\n" + objetosTarefas.map((t, i) => i + " - " + t.texto + " (Feita: " + t.feita + ")").join("\n"));
    let indiceFeita = parseInt(prompt("Digite o índice da tarefa que deseja marcar como feita (0, 1 ou 2):"));
    objetosTarefas[indiceFeita].feita = true;
    let indiceRemover = parseInt(prompt("Digite o índice da tarefa que deseja remover (0, 1 ou 2):"));
    objetosTarefas.splice(indiceRemover, 1);
    alert("Lista final:\n" + objetosTarefas.map((t, i) => i + " - " + t.texto + " (Feita: " + t.feita + ")").join("\n"));
    let concluidas = objetosTarefas.filter(t => t.feita).length;
    alert("Total de tarefas concluídas: " + concluidas);
}

// Contagem por Categoria
// Peça 6 itens com categoria (ex: comida, limpeza) e armazene em um array de objetos {nome, categoria}.
// Crie um objeto que conte quantos itens existem por categoria (ex: {comida: 3, limpeza:2}).
// Implemente a remoção de todos os itens de uma categoria escolhida e atualize a contagem final.
function exercicio08() {
    const item1 = { nome: prompt("digite o primeiro item:"), categoria: prompt("digite a categoria:") }
    const item2 = { nome: prompt("digite o segundo item:"), categoria: prompt("digite a categoria:") }
    const item3 = { nome: prompt("digite o terceiro item:"), categoria: prompt("digite a categoria:") }
    const item4 = { nome: prompt("digite o quarto item:"), categoria: prompt("digite a categoria:") }
    const item5 = { nome: prompt("digite o quinto item:"), categoria: prompt("digite a categoria:") }
    const item6 = { nome: prompt("digite o sexto item:"), categoria: prompt("digite a categoria:") }


    const arrayObjetos = [
        item1,
        item2,
        item3,
        item4,
        item5,
        item6
    ]

    arrayObjetos.forEach(function (item) {
        alert(`${item.nome} está na categoria ${item.categoria}`)
    })
}

// Ranking de Pontuação
// Peça 4 nomes e pontuações, salve em um array de objetos {nome, pontos}.
// Mostre o maior pontuador (nome e pontos).
// Pergunte se o usuário quer atualizar a pontuação de alguém; se sim, 
// atualize o objeto e calcule o novo vencedor.
function exercicio09() {

    const nome1 = prompt("Digite o primeiro nome:")
    const pontuacao1 = Number(prompt("Digite a pontuação:"))

    const nome2 = prompt("Digite o segundo nome:")
    const pontuacao2 = Number(prompt("Digite a pontuação:"))

    const nome3 = prompt("Digite o terceiro nome:")
    const pontuacao3 = Number(prompt("Digite a pontuação:"))

    const nome4 = prompt("Digite o quarto nome:")
    const pontuacao4 = Number(prompt("Digite a pontuação:"))

    const array = [
        { nome: nome1, pontuacao: pontuacao1 },
        { nome: nome2, pontuacao: pontuacao2 },
        { nome: nome3, pontuacao: pontuacao3 },
        { nome: nome4, pontuacao: pontuacao4 }
    ]

    console.log(array)

    let vencedor = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i].pontuacao > vencedor.pontuacao) {
            vencedor = array[i]
        }
    }

    alert(`O maior pontuador é ${vencedor.nome} com ${vencedor.pontuacao} pontos`)

    const atualizar = prompt("Deseja atualizar a pontuação de alguém? (sim/nao)")

    if (atualizar === "sim") {

        const nomeAtualizar = prompt("Qual nome deseja atualizar?")
        const novaPontuacao = Number(prompt("Digite a nova pontuação"))

        for (let i = 0; i < array.length; i++) {
            if (array[i].nome === nomeAtualizar) {
                array[i].pontuacao = novaPontuacao
            }
        }

        vencedor = array[0]

        for (let i = 1; i < array.length; i++) {
            if (array[i].pontuacao > vencedor.pontuacao) {
                vencedor = array[i]
            }
        }

        alert(`Novo vencedor: ${vencedor.nome} com ${vencedor.pontuacao} pontos`)
    }

    console.log(array)

}


// Carrinho Simples
// Peça o nome e preço de até 5 produtos; armazene em um array de objetos.
// Calcule o total; se o total > 100 mostre "Frete grátis", caso contrário mostre o valor do frete (R$ 10).
// Permita remover um produto pelo nome e recalcule total e frete após a remoção.

function exercicio010() {

    const array = []

    for (let i = 0; i < 5; i++) {

        const nome = prompt("digite o nome do produto")
        const valor = Number(prompt("digite o valor"))

        array.push({ nome, preco: valor })
    }

    console.log(array)

    let total = 0

    for (let i = 0; i < array.length; i++) {
        total += array[i].preco
    }

    alert(`total da compra: R$ ${total}`)

    if (total > 100) {
        alert("frete grátis")
    } else {
        alert("frete: R$ 10")
    }

    const remover = prompt("deseja remover algum produto? digite o nome ou 'nao'")

    if (remover !== "nao") {

        let encontrado = false

        for (let i = 0; i < array.length; i++) {

            if (array[i].nome.toLowerCase() === remover.toLowerCase()) {
                array.splice(i, 1)
                encontrado = true
                break
            }
        }

        if (!encontrado) {
            alert("produto não encontrado")
        }

        total = 0

        for (let i = 0; i < array.length; i++) {
            total += array[i].preco
        }

        alert(`novo total: R$ ${total}`)

        if (total > 100) {
            alert(`frete grátis! total: R$${total}`)
        } else {
            const totalCFrete = total + 10
            alert(`frete: R$10! total: R$${totalCFrete}`)
        }
    }

    console.log(array)
}

// Praticando a Lógica 5.3
// 1. Preencher e Exibir
// Crie um vetor de 5 posições. Use um laço para para pedir ao usuário que digite um número 
// para cada posição. Ao final, exiba todos os números.

function exercicio001() {
    let posicao = ["", "", "", "", ""]
    for (let i = 0; i < posicao.length; i++) {
        posicao[i] = prompt(`digite o número da posição ${i + 1}:`) || `Número ${i + 1}`
    }
    alert(`Posição final:\n1º - ${posicao[0]} \n2º - ${posicao[0]} \n3º - ${posicao[0]} \n4º - ${posicao[0]} \n5º`)
}

// 2. Soma dos Elementos
// Crie um vetor de 6 números inteiros. Preencha-o e, usando um laço, calcule a soma de todos os 
// seus elementos. Mostre o resultado final.
function exercicio002() {
    let numero = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`digite um número ${i + 1}: `))
    }
    const soma = numeros.reduce((a, b) => a + b, 0)
    alert(`A soma dos numeros é:`)
}

// 3. Apenas os Pares
// Crie um vetor de 8 posições. Peça para o usuário preenchê-lo. Use um laço para percorrer o vetor
// e mostrar apenas os números pares.
function exercicio003() {
    let posicoes = [0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < posicoes.length; i++) {
        posicoes[i] = Number(prompt(`digite um numero ${i + 1}: `))
    }
    let resultado = "Números pares:\n"
    for (let i = 0; i < posicoes.length; i++) {
        if (posicoes[i] % 2 === 0) {
            resultado += posicoes[i] + "\n";
        }
    }

    alert(resultado);
}

// 4. Encontrando o Maior Valor
// Crie um vetor de 7 números. Use um laço para encontrar o maior número dentro do vetor e 
// mostre-o no final.
function exercicio004() {
    let numeros = []
    for (let i = 0; i < 7; i++) {
        const element = Number(prompt(`digite o numero da posicao ${i + 1}`))
        numeros.push(element)
    }
    alert(`o maior numero digitado é ${Math.max(...numeros)}`)
    console.log(Math.max(...numeros))

}

// 5. Média da Turma
// Crie um vetor para armazenar a nota de 5 alunos. Use um laço para pedir as 5 notas. Ao final, 
// calcule e mostre a média da turma.
function exercicio005() {
    let notas = [0, 0, 0, 0, 0]
    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(prompt(`Digite a média do aluno número ${i + 1}:`))
    }
    const media = notas.reduce((a, b) => a + b, 0) / notas.length
    alert(`A média da turma é: ${media}`)
    console.log(media)
}
// 6. Contando Ímpares
// Crie um vetor com 10 números. Use um laço para contar quantos números ímpares existem no vetor e 
// mostre essa contagem.
function exercicio006() {
    let numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`digite o numero ${i + 1}`))
    }

    let contadorImpares = 0
    for (let i = 0; i < numeros.length; index++) {
        if (numeros[i] % 2 !== 0) {
            contadorImpares++
        }
    }
    alert(`Números digitados: ${numeros.join(", ")}`)
    alert(`Quantidade de números ímpares: ${contadorImpares}`)
    console.log(contadorImpares)
}

function exercicio007() {
    let numeros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`))
    }

    const busca = Number(prompt(`Digite o número que deseja buscar:`))

    let encontrado = false

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === busca) {
            encontrado = true
        }
    }

    if (encontrado) {
        alert(`O número ${busca} foi encontrado no vetor!`)
    } else {
        alert(`O número ${busca} não está no vetor.`)
    }
}

function exercicio008() {
    let nomes = ["", "", "", "", ""]

    for (let i = 0; i < nomes.length; i++) {
        nomes[i] = prompt(`Digite o nome ${i + 1}:`)
    }

    let resultado = "Nomes que começam com 'A':\n"
    let encontrou = false

    for (let i = 0; i < nomes.length; i++) {
        if (nomes[i][0].toUpperCase() === "A") {
            resultado += `- ${nomes[i]}\n`
            encontrou = true
        }
    }

    if (encontrou) {
        alert(resultado)
    } else {
        alert("Nenhum nome começa com a letra 'A'.")
    }
}

function exercicio009() {
    let numeros = [0, 0, 0, 0, 0, 0]

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = Number(prompt(`Digite o número ${i + 1}:`))
    }

    let resultado = "Números em ordem inversa:\n"

    for (let i = numeros.length - 1; i >= 0; i--) {
        resultado += `- ${numeros[i]}\n`
    }

    alert(resultado)
}


function exercicio0010() {
    let notas = [0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = 0; i < notas.length; i++) {
        notas[i] = Number(prompt(`Digite a nota do aluno ${ i + 1 }:`))
    }

    let aprovados = 0

    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7.0) {
            aprovados++
        }
    }

    alert(`Total de alunos aprovados: ${ aprovados } de ${ notas.length }`)
}

function saudarUsuario(nome) {
    console.log(`Olá, ${nome}! Tenha um bom dia!`)
}
//  Dobro de um Número
function calcularDobro(numero) {
    return numero * 2
}
// Média de Três Números
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3
}
// Verificador de Par ou Ímpar
function verificarParidade(numero) {
    if (numero % 2 === 0) {
        console.log("Par")
    } else {
        console.log("Ímpar")
    }
}
// Maior de Dois Números
function encontrarMaior(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
//Tabuada
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`)
    }
}
//Contagem Regressiva
function contagemRegressiva(inicio) {
    for (let i = inicio; i >= 0; i--) {
        console.log(i)
    }
}
//Somar Elementos de um Vetor
function somarVetor(vetor) {

    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma
}
//Encontrar o Menor Valor
function encontrarMenor(vetor) {

    let menor = vetor[0]

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    return menor
}
//Contar Pares
function contarPares(vetor) {

    let contador = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            contador++
        }
    }

    return contador
}
//Situação do Aluno
function verificarAprovacao(media) {

    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
//Calculadora Simples
function calculadora(a, b, operacao) {

    if (operacao === "+") {
        return a + b
    }

    if (operacao === "-") {
        return a - b
    }

    if (operacao === "*") {
        return a * b
    }

    if (operacao === "/") {
        return a / b
    }
}
//Limpador de Tela
function limparTela() {

    for (let i = 0; i < 50; i++) {
        console.log("")
    }

}
//Calculadora (refatorado)
function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function inicio() {

    let opcao = prompt("1-Somar 2-Subtrair 3-Multiplicar 4-Dividir")

    let a = Number(prompt("Primeiro número"))
    let b = Number(prompt("Segundo número"))

    if (opcao == 1) {
        console.log(somar(a, b))
    }

    if (opcao == 2) {
        console.log(subtrair(a, b))
    }

    if (opcao == 3) {
        console.log(multiplicar(a, b))
    }

    if (opcao == 4) {
        console.log(dividir(a, b))
    }
}


// EXECUTAR
function executarSaudacao(){
    let nome = prompt("Digite seu nome")
    saudarUsuario(nome)
    alert(`Olá, ${nome}! Bem vindo.`)
}

function executarDobro(){
    let numero = Number(prompt("Digite um número"))
    let dobro = numero * 2
    console.log("Dobro:", calcularDobro(numero))
    alert(`O dobro é ${dobro}!`)
}

function executarMedia(){
    let n1 = Number(prompt("Número 1"))
    let n2 = Number(prompt("Número 2"))
    let n3 = Number(prompt("Número 3"))

    console.log("Média:", calcularMedia(n1,n2,n3))
}

function executarParidade(){
    let numero = Number(prompt("Digite um número"))
    verificarParidade(numero)
}

function executarMaior(){
    let a = Number(prompt("Primeiro número"))
    let b = Number(prompt("Segundo número"))

    console.log("Maior:", encontrarMaior(a,b))
}

function executarTabuada(){
    let numero = Number(prompt("Digite um número"))
    mostrarTabuada(numero)
}

function executarContagem(){
    let numero = Number(prompt("Digite o número inicial"))
    contagemRegressiva(numero)
}

function executarSomarVetor(){

    let vetor = []

    for(let i=0;i<5;i++){
        vetor.push(Number(prompt(`Número ${i+1}`)))
    }

    console.log("Soma:", somarVetor(vetor))
}

function executarMenorVetor(){

    let vetor=[]

    for(let i=0;i<5;i++){
        vetor.push(Number(prompt(`Número ${i+1}`)))
    }

    console.log("Menor:", encontrarMenor(vetor))
}

function executarContarPares(){

    let vetor=[]

    for(let i=0;i<6;i++){
        vetor.push(Number(prompt(`Número ${i+1}`)))
    }

    console.log("Pares:", contarPares(vetor))
}

function executarAprovacao(){

    let media = Number(prompt("Digite a média do aluno"))

    console.log(verificarAprovacao(media))
}

function executarCalculadora(){

    let a = Number(prompt("Número 1"))
    let b = Number(prompt("Número 2"))
    let op = prompt("Operação (+ - * /)")

    console.log("Resultado:", calculadora(a,b,op))
}

function executarLimpar(){
    limparTela()
}