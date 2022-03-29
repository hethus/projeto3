import Chalk from 'chalk';
const chalk = new Chalk.constructor({ level: 3 });
import * as modulo from './principal.js'
import gradient from 'gradient-string';
import enquirer from 'enquirer';
const { prompt } = enquirer;
import { rando, randoSequence } from '@nastyox/rando.js';


// variaveis:
let resposta = ''

// começo do jogo:
console.clear()

resposta = await prompt({
    type: 'input',
    name: 'nome',
    message: 'Digite do seu personagem antes de iniciar o jogo: ',
    validate: value => {
        if (value != '' && value != null && isNaN(value) && value != undefined) {
            return true;
        }
        return 'Digite um nome válido!';
    }
}); //modulo.principal.nome = prompt('Digite do seu personagem antes de iniciar o jogo: ')

modulo.principal.nome = resposta.nome

console.log();


console.log(`iniciar jogo? (lembre-se de escolher as opções na tela usando as setinhas e apertando enter!)`)
resposta = await prompt(modulo.questao)


if (resposta.opcao === 'sim') {
    console.log(chalk.blue(`
    Como vai ${chalk.green(modulo.principal.nome)}?
    espero que esteja bem.
    
    AH, você não se esqueceu do seu objetivo né?
    
    VAMOS ${chalk.red(`TRABALHAR!`)} IHAAAAA`))

    console.log()
    console.log(`TRABALHAR??`)

    resposta = await prompt(modulo.questao)

    if (resposta.opcao === 'sim') {
        console.log(chalk.blue(`
    Que bom que lembrou de ${chalk.red(`trabalhar`)}, então vamos ${chalk.red(`trabalhar`)}`))
    } else {
        console.log(chalk.blue(`
    Que pena que não lembrou de ${chalk.red(`trabalhar`)}, mas isso não importa! ${chalk.red(`trabalhar`)} é importante
    Então vamos ${chalk.red(`TRABALHAR!!!!!!`)}`))
    }

    console.log();
    console.log(gradient.rainbow(`TRABALHANDO`));
    console.log(chalk.red(`trabalhooooo!`));
    console.log(gradient.rainbow(`trablhar e trabalhar, trabalhando! trabalhe!`));
    console.log();
    console.log(chalk.red.italic.bold(`TrAbALhE!`))

    console.log(chalk.blue(`E depois de trabalhar, vamos fazer o que???`));

    await prompt(modulo.trabalhe)

    console.log()
    console.log(chalk.blue(`EXATAMENTE! VOCÊ ${chalk.inverse('TRABALHE')} TRABALHO A ${chalk.inverse('TRABALHE')}, ENTÃO ${chalk.inverse('TRABALHE')}, só TRABALHO ${chalk.inverse('TRABELHE!!!!!')}....`))
    console.log(chalk.ansi256(88)('TRABALHO'))

    for (let TRABALHO of 'TRAMPO') {
        console.log(chalk.ansi256(88)('TRABALHO'))
    }
    
    console.log(gradient('#870000', 'red')('..........'))
    console.log(gradient('red', 'cyan')('você sente um vento gelado entrando em contato com o seu corpo...'))
    console.log(chalk.cyan('.......'))
    console.log(chalk.cyan('...'))
    console.log(chalk.cyan(`... onde... Onde eu estou?`))

    await prompt(modulo.espera)

    
    for(let i = 1; i <= 6; i++){
        console.log(chalk.red(`${i} dia`))
    }
}


//rando(5)
//resposta = await prompt(modulo.questao) resposta.opcao  [se eu quiser usar sim ou não]
//await prompt(modulo.espera)
//resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]