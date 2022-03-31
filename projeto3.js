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

    console.log(chalk.blue(`
    Sem você perceber, já estava estava de manhã e você deitado, não era um ambiente que estava acostumado, mas sentia uma familiaridade...

    Se levantando percebe que o seu corpo esta menor, ${chalk.cyan.italic(`'isso não faz sentido... não faz sentido...'`)} você pensa.

    Seu arredor era de um quarto infantil!

    ${chalk.cyan.italic(`'Espera aí... não... não vejo isso a anos!!!'`)}

    As lembranças de quando era criança voltam a tona! Ou seria na verdade que tudo o que você viveu era um sonho e agora voltou ao seu eu original?

    Seja o que for, seus pensamentos estão perdidos enquanto tenta se encontrar com o seu corpo... um simples pensamento nesse estado já é difícil de se manter...

    Você se desequilibra e cai de novo na cama, refletindo sobre tudo o que aconteceu... ou tudo que vai acontecer? Os minutos passam sem você notar, parece que uma força misteriosa te pressionava cada vez mais!

    -- ${gradient.atlas(`${modulo.principal.nome.toUpperCase()}`)} ${Chalk.magenta.bold(`NÃO LEVANTOU AINDA! SE EU TIVER QUE FALAR MAIS UMA VEZ EU VOU SUBIR AI PRA TE DAR UM CASCUDO QUE VAI TE DEIXAR MARCADO, TENHO QUE IR TRABALHAR AINDA MULEKE MAL EDUCADO!`)} - Diz uma voz vindo de fora do quarto.

    A voz te deixa paralisado, mas te acorda daquele transe, então você levanta espantado!

    -- ${chalk.cyan('M-Mãe?...')} - Você acha que é mentira, mas dessa vez os seus ouvidos não te enganaram, a voz que acabou de escutar é da sua mãe! Naquele pesadelo a sua mãe tinha morrido por causa de uma doença e viveu muitos anos sem ela, muitas coisas aconteceram depois que ela morreu, se afundou em dividas, começou a trabalhar e criou vícios, mas que bom que era só um sonho!
    
    Agora que estava melhor, você começa a prestar mais atenção no quarto, vê um relógio na mesinha que usa para estudar, lá ele marca ${modulo.tempo.hora}:30 da ${modulo.tempo.saberDia()} e nesse instante se lembra que tem que entrar na escola as 7:30 da manhã!

    -- ${chalk.cyan('Tenho que correr então!')} - Você fala com convicção!
    `))
    

    for(let i = 1; i <= 6; i++){



        if(modulo.tempo.dia !== 1){
            console.log(chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`))

            console.log(chalk.blue(`
            Você acorda e levanta! o que vai querer fazer?
            `))

            resposta = await prompt(modulo.acordar)

            if(resposta.opcao == 'Se arrumar rapidamente'){
                console.log(chalk.blue(`
                Você se arruma rapidamente e sai do quarto, já esperando a sua mãe!
                `))

                modulo.principal.responsa++
            }else if(resposta.opcao == 'Demorar para se arrumar'){
                console.log(chalk.blue(`
                Você fica de bobeira por um bom tempo, se divertindo um pouco! Quando a sua mãe chama pelo seu nome, você se arruma e sai do quarto, ela não parece muito feliz não...
                `))

                modulo.principal.diversao++
            }else if(resposta.opcao == 'Tomar banho e se arrumar'){
                console.log(chalk.blue(`
                Você levanta, separa sua roupa e já corre para o chuveiro! De lá você sai direto para esperar a sua mãe!
                `))

                modulo.principal.energia++
            }
        }else{ // só será executado no primeiro dia, ele é um pouco diferente do resto!
            console.log(chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:45.`))

            console.log(chalk.blue(`
            Você já arrumado sai do quarto e desce as escadas, encontra a sua mãe nervosa contigo, mas isso não afeta as lagrimas em seus olhos! Você se aproxima e abraça ela, por um momento ela não entende muito o que esta acontecendo, mas acaba perdendo a raiva e te abraçando também!

            -- ${chalk.cyan(`Bom dia, já esta tudo arrumado né? vamos para a escola então ${modulo.principal.nome}.`)} - ela fala sem jeito.
            `))

            resposta = await prompt(modulo.questao)

            if(resposta.opcao === 'sim'){
                console.log(chalk.cyan(`
                -- Ótimo, vamos então!`))

                modulo.principal.responsa++
            } else{
                console.log(chalk.cyan(`
                -- Não! Então era por isso que queria me abraçar? Você já faltou muito, não vai faltar de novo!`))
                
                modulo.principal.responsa--
            }


        }

    }
}

//rando(5)
//resposta = await prompt(modulo.questao) resposta.opcao  [se eu quiser usar sim ou não]
//await prompt(modulo.espera)
//resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]
//modulo.tempo // modulo.tempo.avancaTempo(time)