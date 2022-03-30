const prompt = import('prompt-sync');
import Chalk from 'chalk';
const chalk = new Chalk.constructor({ level: 3 });

//export function soma (x, y) {
//    return x + y;
//}

let tempo = {
    hora: 6,
    dia: 1,

    saberTempo: function () {
        console.log(`Hora: ${this.hora}:00 do ${this.dia}º dia`)
    },
    //função para passar um dia:
    avancaTempo: function () {
        if (this.hora < 23) {
            this.hora++;
        } else {
            this.hora = 6;
            this.dia++;
        }
    }
}

let principal = {
    nome: '',
    estudo: 10,
    dinheiro: 2,
    energia: 10,
    diversão: 10,
    responsa: 10,
    amigo: 10,
    amiga: 10,
}

let questao = [{
    type: 'select',
    name: 'opcao',
    message: `${chalk.green('Sim')} ou ${chalk.red('Não')}:
    `,
    initial: 1,
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
    initial: 1,
    choices: [
      { name: 'nao',   message: `${chalk.red.bold('TRABALHE')}`, value: '#ff0000' }, //<= choice object
      { name: 'sim', message: `${chalk.red.bold.italic('TRABALHE')}`, value: '#00ff00' }, //<= choice object
    ]
  }]; //resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]

  let espera = [{
    type: 'select',
    name: 'ok',
    message: ' ',
    initial: 1,
    choices: [
        { name: `continuar`, message: `${chalk.yellow.bold('continuar')}`},
        { name: `continuar`, message: `${chalk.yellow.bold('continuar')}`},
    ]
}]; // await prompt(modulo.espera)



export { tempo, principal, questao, trabalhe, espera}