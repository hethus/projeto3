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

            console.log(chalk.blue(`
            Vocês entram no carro e seguem rumo a escola, chegando na porta da escola, a sua mãe abre a porta do carro e depois de se despedir dela, você sai do carro.

            E agora? o que escolherá?
            `))

            resposta = await prompt(modulo.entrarEscola)
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

            console.log(chalk.blue(`
            Você segue a sua mãe até o carro, lembranças do antigo "possante" da sua mãe te faz ficar emocionado, mas ainda sim você continua calmo por fora, afinal, não quer ser taxado de louco, nem quer ir em um medico...

            Sua mãe te deixa na porta da escola, você se despede dela e entra na escola, mais lembranças jorram da sua cabeça, o que te faz lacrimejar, é uma sensação de "pensei nunca mais ver isso".
            `))

        }
        
        modulo.tempo.avancaTempo(1)

        while(true){
            if(modulo.tempo.hora <= 11){ // manhã
                console.log(chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`))

                if(modulo.tempo.hora === 7){
                console.log(chalk.blue(`
                Você avança os corredores e tem um tempo antes do sinal tocar, o que deseja fazer?
                `))
                }else{
                    console.log(chalk.blue(`
                    Você se esgueira voltando para os corredores, eles estão vazios!

                    O que você deseja fazer agora?
                    `))
                }
                
                resposta = await prompt(modulo.dentroEscola)

                while(resposta.opcao == 'Socializar com os alunos'){

                    console.log(chalk.blue(`
                    Você segue 
                    `)) // CONTINUAR HISTORIA AQUI

                    modulo.tempo.avancaTempo(1)
                }
                
                while(resposta.opcao == 'Ir direto para a sala'){
                    if(modulo.tempo.hora === 7){
                        console.log(chalk.blue(`
                        Você segue para a sala de aula, e o professor esta ai!
                        `))
                    }else{
                        console.log(chalk.blue(`
                        Você chega atrasado na aula!
                        `))
                    }

                    resposta = await prompt(modulo.aula)

                    if(resposta.opcao == 'Socializar com os alunos'){
                        console.log(chalk.blue(`
                        Você de vez prestar atenção na aula, começa a conversar e brincar com os colegas.
                        `))

                    }else if(resposta.opcao == 'Prestar atenção na aula'){
                        console.log(chalk.blue(`
                        Você sabia o que tinha que fazer! Sua mãe te deixou ali para estudar e é isso o que você faz, também não quer que aquele sonho ruim que teve se repita agora na vida real!
                        `))

                    }else if(resposta.opcao == 'Dormir na aula'){
                        console.log(chalk.blue(`
                        Você se dirige para a sala e senta em uma das últimas cadeiras, se ajeita e espera o professor fazer a chamada para iniciar o seu sono, afinal, as aulas do dia eram muito chatas...
                        `))

                    }else if(resposta.opcao == 'Fazer graça na sala'){
                        console.log(chalk.blue(`
                        O seu dia era tão chato e monótono antes, agora que tem outra chance de fazer as coisas diferentes, você começa a fazer piada e brincar com todos, ora fazendo eles rirem, ora fazendo o professor ficar um pouco irritado... bom, essa última parte não é muito boa né...
                        `))

                    }else if(resposta.opcao == 'Ficar sem fazer nada'){
                        console.log(chalk.blue(`
                        Você se sente exausto e sem vontade de fazer qualquer coisa, a aula passa e você continua em seu mundinho...
                        `))

                    }

                    console.log(chalk.blue(`
                    A hora passou voando! Você repara que já esta na hora de ir embora e como sempre, as crianças todas gritando de felicidade pois estão indo embora!

                    Você acha isso um pouco vergonhoso...
                    `))

                    let falta = 12 - modulo.tempo.hora
                    modulo.tempo.hora += falta
                    break
                }
                
                while(resposta.opcao == 'Vagar pela escola'){
                    console.log(chalk.blue(`
                    Você anda um pouco pela escola enquanto o sinal não toca, encontra alguns colegas e alguns professores, o que deseja fazer?
                    `))

                    resposta = await prompt(modulo.vagaEscola)

                    if(resposta.opcao == 'Socializar com os colegas'){
                        console.log(chalk.blue(`
                        Você começa a conversar com os seus colegas e não vê o tempo passando então o sinal toca!
                        `))
                    
                    }else if (resposta.opcao == 'Conversar com os professores'){
                        console.log(chalk.blue(`
                        Você começa a conversar com os professores e não vê o tempo passando então o sinal toca!
                        `))
                    
                    }else if (resposta.opcao == 'Fazer brincadeiras pesadas'){
                        console.log(chalk.blue(`
                        Você está cansado de aguentar aquela gritaria e tem uma péssima ideia de como pode ajeitar isso... você começa a fazer bullying com os colegas, alguns parecem tristes, outros sorriem mas não se sentem bem...
                        `))

                    }

                    console.log(chalk.blue(`
                    O sinal toca e você passa despercebido pelos colegas e pelos professores!
                    `))

                    modulo.tempo.avancaTempo(1);
                    break
                }
                
                while(resposta.opcao == 'Usar o banheiro'){
                    console.log(chalk.blue(`
                    Você sente que esta apertado e decide ir no banheiro, todos mictórios estão sendo usados, você espera todos usarem e o sinal toca, mas sente que realmente precisa ir no banheiro antes de voltar...

                    Depois de um tempo você consegue a sua chance de se aliviar!
                    `))

                    modulo.tempo.avancaTempo(1);
                    break
                }
                
                while(resposta.opcao == 'Se esconder na biblioteca'){ //colocar aleatorio
                    console.log(chalk.blue(`
                    Você lembra de um lugar na biblioteca onde quase ninguém pode te incomodar! Ótimo para descansar e se divertir!

                    Se escondendo lá ninguém te incomoda e o sinal toca, agora parece que estará sozinho por um bom tempo, o que deseja fazer?
                    `))

                    resposta = await prompt(modulo.biblioteca)

                    if(resposta.opcao == 'Dormir até a hora de ir embora'){
                        console.log(chalk.blue(`
                        Você se sente muito bem, sem nenhum vestígio de culta e decide dormir, 
                        `))

                    }



                }

            }else if(modulo.tempo.hora <= 17){ // tarde
                console.log(chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`))

                console.log('ab')
            }else if(modulo.tempo.hora < 23){ // noite
                console.log(chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`))

                console.log('ac')
            }else{

                console.log(chalk.blue(`
                Infelizmente já esta tarde demais e tu deve dormir!
                `))
                break
            }
        
        // colocar os sonhos aqui, como lista e usar o let i do for, colocar assim: ['', 'a', 'b', 'c', etc...]
        }

    }
}

//rando(5)
//resposta = await prompt(modulo.questao) resposta.opcao  [se eu quiser usar sim ou não]
//await prompt(modulo.espera)
//resposta = await prompt(modulo.trabalhe) resposta.trabalhe  [se eu quiser usar trabalhe ou trabalhe]
//modulo.tempo // modulo.tempo.avancaTempo(time)