const prompt = import("prompt-sync");
import Chalk from "chalk";
const chalk = new Chalk.constructor({ level: 3 });

//export function soma (x, y) {
//    return x + y;
//}

let tempo = {
  hora: 6,
  dia: 1,
  semana: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "sábado",
  ],
  //função para retornar o dia da semana:
  saberTempo: function () {
    console.log(chalk.red(`Hora: ${this.hora}:00 do ${this.dia}º dia`));
  },
  //função para passar um dia:
  avancaTempo: function (time) {
    if (this.hora < 23) {
      this.hora += time;
    } else {
      this.hora = 6;
    }
  },

  //função para saber qual é o dia da semana:
  saberDia: function () {
    return this.semana[this.dia];
  },
};

let principal = {
  nome: "",
  estudo: 10,
  dinheiro: 2,
  energia: 10,
  diversao: 10,
  responsa: 10,
  social: 10,
};

let questao = [
  {
    type: "select",
    name: "opcao",
    message: `${chalk.green("Sim")} ou ${chalk.red("Não")}:
    `,
    initial: 0,
    choices: [
      { name: "nao", message: `${chalk.red("Não")}`, value: "#ff0000" }, //<= choice object
      { name: "sim", message: `${chalk.green("Sim")}`, value: "#00ff00" }, //<= choice object
    ],
  },
]; //resposta = await prompt(modulo.questao) resposta.opcao  [se eu quiser usar sim ou não]

let trabalhe = [
  {
    type: "select",
    name: "opcao",
    message: `${chalk.red.bold("TRABALHE")} ou ${chalk.red.bold.italic(
      "TRABALHE"
    )}:
    `,
    initial: 0,
    choices: [
      {
        name: "nao",
        message: `${chalk.red.bold("TRABALHE")}`,
        value: "#ff0000",
      }, //<= choice object
      {
        name: "sim",
        message: `${chalk.red.bold.italic("TRABALHE")}`,
        value: "#00ff00",
      }, //<= choice object
    ],
  },
]; //resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]

let espera = [
  {
    type: "select",
    name: "ok",
    message: " ",
    initial: 0,
    choices: [
      { name: `continuar`, message: `${chalk.yellow.bold("continuar...")}` },
    ],
  },
]; // await prompt(modulo.espera)

let acordar = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Se arrumar rapidamente",
        message: `${chalk.yellow.bold("Se arrumar rapidamente")}`,
      },
      {
        name: "Demorar para se arrumar",
        message: `${chalk.yellow.bold("Demorar para se arrumar")}`,
      },
      {
        name: "Tomar banho e se arrumar",
        message: `${chalk.yellow.bold("Tomar banho e se arrumar")}`,
      },
    ],
  },
]; // pede a escolha do usuário ===== resposta = await prompt(modulo.acordar) / resposta.opcao

let dentroEscola = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Socializar com os alunos",
        message: `${chalk.yellow.bold("Socializar com os alunos")}`,
      },
      {
        name: "Ir direto para a sala",
        message: `${chalk.yellow.bold("Ir direto para a sala")}`,
      },
      {
        name: "Vagar pela escola",
        message: `${chalk.yellow.bold("Vagar pela escola")}`,
      },
      {
        name: "Usar o banheiro",
        message: `${chalk.yellow.bold("Usar o banheiro")}`,
      },
      {
        name: "Se esconder na biblioteca",
        message: `${chalk.yellow.bold("Se esconder na biblioteca")}`,
      },
    ],
  },
];

let atrasado = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Socializar com os alunos",
        message: `${chalk.yellow.bold("Socializar com os alunos")}`,
      },
      {
        name: "Ir direto para a sala",
        message: `${chalk.yellow.bold("Ir direto para a sala")}`,
      },
    ],
  },
];

let aula = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Socializar com os alunos",
        message: `${chalk.yellow.bold("Socializar com os alunos")}`,
      },
      {
        name: "Prestar atenção na aula",
        message: `${chalk.yellow.bold("Prestar atenção na aula")}`,
      },
      {
        name: "Dormir na aula",
        message: `${chalk.yellow.bold("Dormir na aula")}`,
      },
      {
        name: "Fazer graça na sala",
        message: `${chalk.yellow.bold("Fazer graça na sala")}`,
      },
      {
        name: "Ficar sem fazer nada",
        message: `${chalk.yellow.bold("Ficar sem fazer nada")}`,
      },
    ],
  },
];

let andarEscola = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Socializar com os colegas",
        message: `${chalk.yellow.bold("Socializar com os colegas")}`,
      },
      {
        name: "Conversar com os professores",
        message: `${chalk.yellow.bold("Conversar com os professores")}`,
      },
      {
        name: "Fazer brincadeiras pesadas",
        message: `${chalk.yellow.bold("Fazer brincadeiras pesadas")}`,
      },
    ],
  },
];

let biblioteca = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Dormir até a hora de ir embora",
        message: `${chalk.yellow.bold("Dormir até a hora de ir embora")}`,
      },
      {
        name: "Ler algum livro disponível",
        message: `${chalk.yellow.bold("Ler algum livro disponível")}`,
      },
      {
        name: "Riscar os livros dos professores",
        message: `${chalk.yellow.bold("Riscar os livros dos professores")}`,
      },
      {
        name: "Voltar para o corredor",
        message: `${chalk.yellow.bold("Voltar para o corredor")}`,
      },
    ],
  },
];

let voltou = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Continuar descansando até a tarde",
        message: `${chalk.yellow.bold("Continuar descansando até a tarde")}`,
      },
      { name: "Estudar", message: `${chalk.yellow.bold("Estudar")}` },
      {
        name: "Fazer limonada para vender",
        message: `${chalk.yellow.bold("Fazer limonada para vender")}`,
      },
      {
        name: "Ler algum livro",
        message: `${chalk.yellow.bold("Ler algum livro")}`,
      },
    ],
  },
];

let tempoEstudoUm = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      { name: "1 hora", message: `${chalk.yellow.bold("1 hora")}` },
      { name: "2 horas", message: `${chalk.yellow.bold("2 horas")}` },
      { name: "3 horas", message: `${chalk.yellow.bold("3 horas")}` },
      { name: "4 horas", message: `${chalk.yellow.bold("4 horas")}` },
      { name: "5 horas", message: `${chalk.yellow.bold("5 horas")}` },
    ],
  },
];

let tempoEstudoDois = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      { name: "1 hora", message: `${chalk.yellow.bold("1 hora")}` },
      { name: "2 horas", message: `${chalk.yellow.bold("2 horas")}` },
      { name: "3 horas", message: `${chalk.yellow.bold("3 horas")}` },
      { name: "4 horas", message: `${chalk.yellow.bold("4 horas")}` },
    ],
  },
];

let tempoEstudoTres = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      { name: "1 hora", message: `${chalk.yellow.bold("1 hora")}` },
      { name: "2 horas", message: `${chalk.yellow.bold("2 horas")}` },
      { name: "3 horas", message: `${chalk.yellow.bold("3 horas")}` },
    ],
  },
];

let tempoEstudoQuatro = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      { name: "1 hora", message: `${chalk.yellow.bold("1 hora")}` },
      { name: "2 horas", message: `${chalk.yellow.bold("2 horas")}` },
    ],
  },
];

let tempoEstudoCinco = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [{ name: "1 hora", message: `${chalk.yellow.bold("1 hora")}` }],
  },
];

let noite = [
  {
    type: "select",
    name: "opcao",
    message: " ",
    initial: 0,
    choices: [
      {
        name: "Estudar mais um pouco",
        message: `${chalk.yellow.bold("Estudar mais um pouco")}`,
      },
      {
        name: "Jogar com o seu video-game de mão",
        message: `${chalk.yellow.bold("Jogar com o seu video-game de mão")}`,
      },
      {
        name: "Ajudar a sua mãe na cozinha",
        message: `${chalk.yellow.bold("Ajudar a sua mãe na cozinha")}`,
      },
      {
        name: "Descansar até a hora da janta",
        message: `${chalk.yellow.bold("Descansar até a hora da janta")}`,
      },
    ],
  },
];

function resultadoProva(probabilidade) {
  if (probabilidade == 1) {
    // 10

    return 10;
  } else if (probabilidade > 1 && probabilidade <= 3) {
    // 9

    return 9;
  } else if (probabilidade > 3 && probabilidade <= 6) {
    // 8

    return 8;
  } else if (probabilidade > 6 && probabilidade <= 10) {
    // 7

    return 7;
  } else if (probabilidade > 10 && probabilidade <= 15) {
    // 6

    return 6;
  } else if (probabilidade > 15 && probabilidade <= 21) {
    // 5

    return 5;
  } else if (probabilidade > 21 && probabilidade <= 28) {
    // 4

    return 4;
  } else if (probabilidade > 28 && probabilidade <= 36) {
    // 3

    return 3;
  } else if (probabilidade > 36 && probabilidade <= 45) {
    // 2

    return 2;
  } else if (probabilidade > 45 && probabilidade <= 55) {
    // 1

    return 1;
  }
}

export {
  tempo,
  principal,
  questao,
  trabalhe,
  espera,
  acordar,
  dentroEscola,
  aula,
  andarEscola,
  biblioteca,
  atrasado,
  voltou,
  tempoEstudoUm,
  tempoEstudoDois,
  tempoEstudoTres,
  tempoEstudoQuatro,
  tempoEstudoCinco,
  noite,
  resultadoProva,
};
