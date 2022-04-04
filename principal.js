const prompt = import('prompt-sync');
import Chalk from 'chalk';
const chalk = new Chalk.constructor({ level: 3 });

//export function soma (x, y) {
//    return x + y;
//}

let tempo = {
    hora: 6,
    dia: 1,
    semana: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'sábado'],
    //função para retornar o dia da semana:
    saberTempo: function () {
        console.log(chalk.red(`Hora: ${this.hora}:00 do ${this.dia}º dia`))
    },
    //função para passar um dia:
    avancaTempo: function (time) {
        if (this.hora < 23) {
          this.hora += time;
        } else {
            this.hora = 6;
            this.dia++;
        }
    },

    //função para saber qual é o dia da semana:
    saberDia: function () {
      return this.semana[this.dia];
    }
  }

let principal = {
    nome: '',
    estudo: 10,
    dinheiro: 2,
    energia: 10,
    diversao: 10,
    responsa: 10,
    social: 10,
}

let questao = [{
    type: 'select',
    name: 'opcao',
    message: `${chalk.green('Sim')} ou ${chalk.red('Não')}:
    `,
    initial: 0,
    choices: [
      { name: 'nao',   message: `${chalk.red('Não')}`,   value: '#ff0000' }, //<= choice object
      { name: 'sim', message: `${chalk.green('Sim')}`, value: '#00ff00' }, //<= choice object
    ]
  }]; //resposta = await prompt(modulo.questao) resposta.opcao  [se eu quiser usar sim ou não]

  let trabalhe = [{
    type: 'select',
    name: 'opcao',
    message: `${chalk.red.bold('TRABALHE')} ou ${chalk.red.bold.italic('TRABALHE')}:
    `,
    initial: 0,
    choices: [
      { name: 'nao',   message: `${chalk.red.bold('TRABALHE')}`, value: '#ff0000' }, //<= choice object
      { name: 'sim', message: `${chalk.red.bold.italic('TRABALHE')}`, value: '#00ff00' }, //<= choice object
    ]
  }]; //resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]

  let espera = [{
    type: 'select',
    name: 'ok',
    message: ' ',
    initial: 0,
    choices: [
        { name: `continuar`, message: `${chalk.yellow.bold('continuar')}`},
    ]
}]; // await prompt(modulo.espera)

let acordar = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Se arrumar rapidamente', message: `${chalk.yellow.bold('Se arrumar rapidamente')}`},
      { name: 'Demorar para se arrumar', message: `${chalk.yellow.bold('Demorar para se arrumar')}`},
      { name: 'Tomar banho e se arrumar', message: `${chalk.yellow.bold('Tomar banho e se arrumar')}`},
  ]
}]; // pede a escolha do usuário ===== resposta = await prompt(modulo.acordar) / resposta.opcao

let dentroEscola = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Socializar com os alunos', message: `${chalk.yellow.bold('Socializar com os alunos')}`},
      { name: 'Ir direto para a sala', message: `${chalk.yellow.bold('Ir direto para a sala')}`},
      { name: 'Vagar pela escola', message: `${chalk.yellow.bold('Vagar pela escola')}`},
      { name: 'Usar o banheiro', message: `${chalk.yellow.bold('Usar o banheiro')}`},
      { name: 'Se esconder na biblioteca', message: `${chalk.yellow.bold('Se esconder na biblioteca')}`},
  ]
}];

let atrasado = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Socializar com os alunos', message: `${chalk.yellow.bold('Socializar com os alunos')}`},
      { name: 'Ir direto para a sala', message: `${chalk.yellow.bold('Ir direto para a sala')}`}, 
  ]
}];

let aula = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Socializar com os alunos', message: `${chalk.yellow.bold('Socializar com os alunos')}`},
      { name: 'Prestar atenção na aula', message: `${chalk.yellow.bold('Prestar atenção na aula')}`},
      { name: 'Dormir na aula', message: `${chalk.yellow.bold('Dormir na aula')}`},
      { name: 'Fazer graça na sala', message: `${chalk.yellow.bold('Fazer graça na sala')}`},
      { name: 'Ficar sem fazer nada', message: `${chalk.yellow.bold('Ficar sem fazer nada')}`},
  ]
}];

let andarEscola = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Socializar com os colegas', message: `${chalk.yellow.bold('Socializar com os colegas')}`},
      { name: 'Conversar com os professores', message: `${chalk.yellow.bold('Conversar com os professores')}`},
      { name: 'Fazer brincadeiras pesadas', message: `${chalk.yellow.bold('Fazer brincadeiras pesadas')}`},
  ]
}];

let biblioteca = [{
  type: 'select',
  name: 'opcao',
  message: ' ',
  initial: 0,
  choices: [
      { name: 'Dormir até a hora de ir embora', message: `${chalk.yellow.bold('Dormir até a hora de ir embora')}`},
      { name: 'Ler algum livro disponível', message: `${chalk.yellow.bold('Ler algum livro disponível')}`},
      { name: 'Riscar os livros dos professores', message: `${chalk.yellow.bold('Riscar os livros dos professores')}`},
      { name: 'Voltar para o corredor', message: `${chalk.yellow.bold('Voltar para o corredor')}`},
  ]
}];

export { tempo, principal, questao, trabalhe, espera, acordar, dentroEscola, aula, andarEscola, biblioteca, atrasado }