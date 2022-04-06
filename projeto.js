import Chalk from "chalk";
const chalk = new Chalk.constructor({ level: 3 });
import * as modulo from "./modulo.js";
import gradient from "gradient-string";
import enquirer from "enquirer";
const { prompt } = enquirer;
import { rando, randoSequence } from "@nastyox/rando.js";

// variaveis:
let resposta = "";
let prova = 0;
let vitima = 0;
let escapou = 0;
let naoEscapou = 0;
let frio = 0;
let sol = 0;
let conversouMãe = 0;
let ajudou = 0;
let dinheiroRua = 0;
let perdeuDinheiro = 0;

// começo do jogo:
console.clear();

resposta = await prompt({
  type: "input",
  name: "nome",
  message: "Digite do seu personagem antes de iniciar: ",
  validate: (value) => {
    if (value != "" && value != null && isNaN(value) && value != undefined) {
      return true;
    }
    return "Digite um nome válido!";
  },
}); //modulo.principal.nome = prompt('Digite do seu personagem antes de iniciar o jogo: ')

modulo.principal.nome = resposta.nome;

console.log();
console.log();

console.log(
  gradient("red", "cyan").multiline(
    [
      "██     ██ ██   ██ ██ ██      ███████      ██ ██      ██ ██    ██ ███████ ██      ██▀ ▀██",
      "██     ██ ██   ██ ██ ██      ██          ██  ██      ██ ██    ██ ██       ██     ██   ██",
      "██  █  ██ ███████ ██ ██      █████       ██  ██      ██ ██    ██ █████    ██    ██     ██",
      "██ ███ ██ ██   ██ ██ ██      ██          ██  ██      ██  ██  ██  ██       ██     ██   ██ ",
      " ███ ███  ██   ██ ██ ███████ ███████      ██ ███████ ██   ████   ███████ ██      ██▄ ▄██ ",
    ].join("\n")
  )
);

console.log();

console.log(
  `Iniciar jogo? (lembre-se de escolher as opções na tela usando as setinhas e apertando enter!)`
);
resposta = await prompt(modulo.questao);

if (resposta.opcao === "sim") {
  console.log(
    chalk.blue(`
    Como vai ${chalk.green(modulo.principal.nome)}?
    espero que esteja bem.
    
    AH, você não se esqueceu do seu objetivo né?
    
    VAMOS ${chalk.red(`TRABALHAR!`)} IHAAAAA`)
  );

  console.log();
  console.log(`TRABALHAR??`);

  resposta = await prompt(modulo.questao);

  if (resposta.opcao === "sim") {
    console.log(
      chalk.blue(`
    Que bom que lembrou de ${chalk.red(`trabalhar`)}, então vamos ${chalk.red(
        `trabalhar`
      )}`)
    );
  } else {
    console.log(
      chalk.blue(`
    Que pena que não lembrou de ${chalk.red(
      `trabalhar`
    )}, mas isso não importa! ${chalk.red(`trabalhar`)} é importante
    Então vamos ${chalk.red(`TRABALHAR!!!!!!`)}`)
    );
  }

  console.log();
  console.log(gradient.rainbow(`TRABALHANDO`));
  console.log(chalk.red(`trabalhooooo!`));
  console.log(gradient.rainbow(`trablhar e trabalhar, trabalhando! trabalhe!`));
  console.log();
  console.log(chalk.red.italic.bold(`TrAbALhE!`));

  console.log(chalk.blue(`E depois de trabalhar, vamos fazer o que???`));

  await prompt(modulo.trabalhe);

  console.log();
  console.log(
    chalk.blue(
      `EXATAMENTE! VOCÊ ${chalk.inverse("TRABALHE")} TRABALHO A ${chalk.inverse(
        "TRABALHE"
      )}, ENTÃO ${chalk.inverse("TRABALHE")}, só TRABALHO ${chalk.inverse(
        "TRABELHE!!!!!"
      )}....`
    )
  );
  console.log(chalk.ansi256(88)("TRABALHO"));

  for (let TRABALHO of "TRAMPO") {
    console.log(chalk.ansi256(88)("TRABALHO"));
  }

  console.log(gradient("#870000", "red")(".........."));
  console.log(
    gradient(
      "red",
      "cyan"
    )("você sente um vento gelado entrando em contato com o seu corpo...")
  );
  console.log(chalk.cyan("......."));
  console.log(chalk.cyan("..."));
  console.log(chalk.cyan(`... onde... Onde eu estou?`));

  await prompt(modulo.espera);

  console.log(
    chalk.blue(`
    Sem você perceber, já estava estava de manhã e você deitado, não era um ambiente que estava acostumado, mas sentia uma familiaridade...

    Se levantando percebe que o seu corpo esta menor, ${chalk.cyan.italic(
      `"isso não faz sentido... não faz sentido..."`
    )} você pensa.

    Seu arredor era de um quarto infantil!

    ${chalk.cyan.italic(`"Espera aí... não... não vejo isso a anos!!!"`)}

    As lembranças de quando era criança voltam a tona! Ou seria na verdade que tudo o que você viveu era um sonho e agora voltou ao seu eu original?
     
    Seja o que for, seus pensamentos estão perdidos enquanto tenta se encontrar com o seu corpo... um simples pensamento nesse estado já é difícil de se manter...
     
    Você se desequilibra e cai de novo na cama, refletindo sobre tudo o que aconteceu... ou tudo que vai acontecer? Os minutos passam sem você notar, parece que uma força misteriosa te pressionava cada vez mais!
    
    -- ${gradient.atlas(
      `${modulo.principal.nome.toUpperCase()}`
    )} ${Chalk.magenta.bold(
      `NÃO LEVANTOU AINDA! SE EU TIVER QUE FALAR MAIS UMA VEZ EU VOU SUBIR AI PRA TE DAR UM CASCUDO QUE VAI TE DEIXAR MARCADO, TENHO QUE IR TRABALHAR AINDA MULEKE MAL EDUCADO!`
    )} - Diz uma voz vindo de fora do quarto.
     
    A voz te deixa paralisado, mas te acorda daquele transe, então você levanta espantado!

    -- ${chalk.cyan(
      "M-Mãe?..."
    )} - Você acha que é mentira, mas dessa vez os seus ouvidos não te enganaram, a voz que acabou de escutar é da sua mãe! Naquele pesadelo a sua mãe tinha morrido por causa de uma doença e você viveu muitos anos sem ela, muitas coisas aconteceram depois que ela morreu, se afundou em dividas, começou a trabalhar e criou vícios, mas que bom que era só um sonho!

    ...
    
    Agora que estava melhor, você começa a prestar mais atenção no quarto, vê um relógio na mesinha que usa para estudar, lá ele marca ${
      modulo.tempo.hora
    }:30 da ${modulo.tempo.saberDia()} e nesse instante se lembra que tem que entrar na escola as 7:30 da manhã!
     
    -- ${chalk.cyan("Tenho que correr então!")} - Você fala com convicção!
    `)
  );

  for (; modulo.tempo.dia <= 6; modulo.tempo.dia++) {
    if (modulo.tempo.dia != 6) {
      if (modulo.tempo.dia !== 1) {
        console.log(
          chalk.red(
            `${modulo.tempo.dia}º dia, ${
              modulo.tempo.hora
            }:00. ${modulo.tempo.saberDia()}`
          )
        );

        console.log(
          chalk.blue(`
            Você acorda e levanta! o que vai querer fazer?
            `)
        );

        resposta = await prompt(modulo.acordar);

        if (resposta.opcao == "Se arrumar rapidamente") {
          console.log(
            chalk.blue(`
                Você se arruma rapidamente e sai do quarto, já esperando a sua mãe!
                `)
          );

          modulo.principal.responsa++;
        } else if (resposta.opcao == "Demorar para se arrumar") {
          console.log(
            chalk.blue(`
                Você fica de bobeira por um bom tempo, se divertindo um pouco! Quando a sua mãe chama pelo seu nome, você se arruma e sai do quarto, ela não parece muito feliz não...
                `)
          );

          modulo.principal.diversao++;
        } else if (resposta.opcao == "Tomar banho e se arrumar") {
          console.log(
            chalk.blue(`
                Você levanta, separa sua roupa e já corre para o chuveiro! De lá você sai direto para esperar a sua mãe!
                `)
          );

          modulo.principal.energia++;
        }

        console.log(
          chalk.blue(`
            Vocês entram no carro e seguem rumo a escola, chegando na porta da escola, a sua mãe abre a porta do carro e depois de se despedir dela, você sai do carro e entra na escola.
            `)
        );
      } else {
        // só será executado no primeiro dia, ele é um pouco diferente do resto!
        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:45.`)
        );

        console.log(
          chalk.blue(`
            Você já arrumado sai do quarto e desce as escadas, encontra a sua mãe nervosa contigo, mas isso não afeta as lagrimas em seus olhos! Você se aproxima e abraça ela, por um momento ela não entende muito o que esta acontecendo, mas acaba perdendo a raiva e te abraçando também!

            -- ${chalk.magenta(
              `Bom dia, já esta tudo arrumado né? vamos para a escola então ${modulo.principal.nome}.`
            )} - ela fala sem jeito.
            `)
        );

        resposta = await prompt(modulo.questao);

        if (resposta.opcao === "sim") {
          console.log(
            chalk.magenta(`
                -- Ótimo, vamos então!`)
          );

          modulo.principal.responsa++;
        } else {
          console.log(
            chalk.magenta(`
                -- Não! Então era por isso que queria me abraçar? Você já faltou muito, não vai faltar de novo!`)
          );

          modulo.principal.responsa--;
        }

        console.log(
          chalk.blue(`
            Você segue a sua mãe até o carro, lembranças do antigo "possante" da sua mãe te faz ficar emocionado, mas ainda sim você continua calmo por fora, afinal, não quer ser taxado de louco, nem quer ir em um medico...

            Sua mãe te deixa na porta da escola, você se despede dela e entra na escola, mais lembranças jorram da sua cabeça, o que te faz lacrimejar, é uma sensação de "pensei que nunca mais veria isso".
            `)
        );
      }

      modulo.tempo.avancaTempo(1);
    }

    while (true) {
      if (
        modulo.tempo.hora <= 11 &&
        modulo.tempo.dia != 6 &&
        modulo.tempo.dia != 5
      ) {
        // manhã
        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.
                `)
        );

        if (modulo.tempo.hora === 7) {
          console.log(
            chalk.blue(`
                Você avança os corredores e tem um tempo antes do sinal tocar, o que deseja fazer?
                `)
          );

          resposta = await prompt(modulo.dentroEscola);
        } else {
          console.log(
            chalk.blue(`
                    Você se esgueira voltando para os corredores, eles estão vazios!

                    O que você deseja fazer agora?
                    `)
          );

          resposta = await prompt(modulo.atrasado);
        }

        while (resposta.opcao == "Socializar com os alunos") {
          if (modulo.tempo.hora === 7) {
            console.log(
              chalk.blue(`
                    Você fica no pátio da escola conversando com os alunos e esquece da hora, afinal... a sua sala é bem longe dali, o sinal toca e você tem que voltar para o corredor principal!
                    `)
            );
          } else {
            console.log(
              chalk.blue(`
                    Para você era mais importante conversar com os alunos que matavam aula do que estudar, então você não se preocupou de passar um tempo conversando com eles, até que por causa de um professor passando vocês se dispersando!
                    `)
            );
          }

          modulo.tempo.avancaTempo(1);
          modulo.principal.social++;

          if (modulo.tempo.hora === 12) {
            console.log(
              chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.
                        `)
            );

            console.log(
              chalk.blue(`
                        Você ficou tanto tempo conversando que nem viu a hora passar... o sinal toca e já está na hora de voltar para casa!
                        `)
            );
          }

          break;
        }

        while (resposta.opcao == "Ir direto para a sala") {
          if (modulo.tempo.hora === 7) {
            console.log(
              chalk.blue(`
                        Você segue para a sala de aula, o professor está na porta recebendo os alunos, todos se sentam e a aula começa.

                        O que você irá fazer?
                        `)
            );
          } else {
            console.log(
              chalk.blue(`
                        Você chega atrasado na aula! O professor não fica muito feliz com isso... você se desculpa com ele e vai em direção ao seu lugar.
                        
                        O que irá fazer agora?
                        `)
            );

            modulo.principal.estudo--;
          }

          resposta = await prompt(modulo.aula);

          if (resposta.opcao == "Socializar com os alunos") {
            console.log(
              chalk.blue(`
                        Você de vez prestar atenção na aula, começa a conversar e brincar com os colegas. Todos vocês se divertem e nem ligam para o que o professor está dizendo, quem se importa né? Nada do que ele diz ali será útil para a vida mesmo... 
                        `)
            );

            modulo.principal.estudo--;
            modulo.principal.social++;
          } else if (resposta.opcao == "Prestar atenção na aula") {
            console.log(
              chalk.blue(`
                        Você sabia o que tinha que fazer! Sua mãe te deixou ali para estudar e é isso o que você faz, também não quer que aquele sonho ruim que teve se repita agora na vida real!
                        `)
            );

            modulo.principal.estudo++;
          } else if (resposta.opcao == "Dormir na aula") {
            console.log(
              chalk.blue(`
                        Você se dirige para a sala e senta em uma das últimas cadeiras, se ajeita e espera o professor fazer a chamada para iniciar o seu sono, afinal, as aulas do dia eram muito chatas...
                        `)
            );

            modulo.principal.estudo--;
            modulo.principal.energia++;
          } else if (resposta.opcao == "Fazer graça na sala") {
            console.log(
              chalk.blue(`
                        O seu dia era tão chato e monótono antes, agora que tem outra chance de fazer as coisas diferentes, você começa a fazer piada e brincar com todos, ora fazendo eles rirem, ora fazendo o professor ficar um pouco irritado... bom, essa última parte não é muito boa né...
                        `)
            );

            modulo.principal.estudo -= 2;
            modulo.principal.diversao += 2;
          } else if (resposta.opcao == "Ficar sem fazer nada") {
            console.log(
              chalk.blue(`
                        Você se sente exausto e sem vontade de fazer qualquer coisa, a aula passa e você continua em seu mundinho...
                        `)
            );

            modulo.principal.estudo--;
            modulo.principal.energia++;
          }

          console.log(
            chalk.blue(`
                    A hora passou voando! Você repara que já esta na hora de ir embora e como sempre, as crianças todas gritando de felicidade pois estão indo embora!

                    Você acha isso um pouco vergonhoso...
                    `)
          );

          modulo.tempo.hora = 12;
          break;
        }

        while (resposta.opcao == "Vagar pela escola") {
          console.log(
            chalk.blue(`
                    Você anda um pouco pela escola enquanto o sinal não toca, encontra alguns colegas e alguns professores, o que deseja fazer?
                    `)
          );

          resposta = await prompt(modulo.vagaEscola);

          if (resposta.opcao == "Socializar com os colegas") {
            console.log(
              chalk.blue(`
                        Você começa a conversar com os seus colegas e não vê o tempo passando então o sinal toca!
                        `)
            );

            modulo.principal.social++;
            modulo.principal.diversao++;
          } else if (resposta.opcao == "Conversar com os professores") {
            console.log(
              chalk.blue(`
                        Você começa a conversar com os professores e não vê o tempo passando então o sinal toca!
                        `)
            );

            modulo.principal.social++;
            modulo.principal.estudo++;
          } else if (resposta.opcao == "Fazer brincadeiras pesadas") {
            console.log(
              chalk.blue(`
                        Você está cansado de aguentar aquela gritaria e tem uma péssima ideia de como pode ajeitar isso... você começa a fazer bullying com os colegas, alguns parecem tristes, outros sorriem mas não se sentem bem...
                        `)
            );

            modulo.principal.social -= 3;
            modulo.principal.diversao += 2;
            modulo.principal.responsa--;
          }

          console.log(
            chalk.blue(`
                    O sinal toca e você passa despercebido pelos colegas e pelos professores! Eram tantas pessoas se movendo que você acaba passando sem ser notado, como se fosse invisível mesmo...
                    `)
          );

          modulo.tempo.avancaTempo(1);
          break;
        }

        while (resposta.opcao == "Usar o banheiro") {
          console.log(
            chalk.blue(`
                    Você sente que esta apertado e decide ir no banheiro, todos mictórios estão sendo usados, você espera todos usarem e o sinal toca, mas sente que realmente precisa ir no banheiro antes de voltar...

                    Depois de um tempo você consegue a sua chance de se aliviar!
                    `)
          );

          modulo.principal.energia++;

          modulo.tempo.avancaTempo(1);
          break;
        }

        while (resposta.opcao == "Se esconder na biblioteca") {
          console.log(
            chalk.blue(`
                    Você lembra de um lugar na biblioteca onde quase ninguém pode te incomodar! Ótimo para descansar e se divertir!

                    Se escondendo lá ninguém te incomoda e o sinal toca, agora parece que estará sozinho por um bom tempo, o que deseja fazer?
                    `)
          );

          resposta = await prompt(modulo.biblioteca);

          if (resposta.opcao == "Dormir até a hora de ir embora") {
            console.log(
              chalk.blue(`
                        Você se sente muito bem, sem nenhum vestígio de culpa e decide dormir até a hora de ir embora!
                        `)
            );

            modulo.principal.energia += 2;
          } else if (resposta.opcao == "Ler algum livro disponível") {
            console.log(
              chalk.blue(`
                        Você começa a ler um livro que encontra por aí na biblioteca e o tempo passa...
                        `)
            );

            let livro = rando(3);

            if (livro == 1) {
              console.log(
                chalk.blue(`
                            O livro é um romance qualquer, um bom livro para passar o tempo, mas nada de muito interessante...
                            `)
              );
            } else if (livro == 2) {
              console.log(
                chalk.blue(`
                            O livro é de ficção, você se sente inspirado e sente que ficou um pouco mais inteligente!
                            `)
              );

              modulo.principal.estudo += 1;
            } else if (livro == 3) {
              console.log(
                chalk.blue(`
                            O livro é de investigação, você sente que entende melhor como as coisas funcionam "pelo menos é o que você sente", o que aumenta a sua segurança e inteligencia!
                            `)
              );

              modulo.principal.estudo += 1;
              modulo.principal.social += 1;
            }
          } else if (resposta.opcao == "Riscar os livros dos professores") {
            console.log(
              chalk.blue(`
                        Você sente uma imensa tentação quando olha para a mesa vazia da biblioteca e vê que os professores esqueceram as suas cadernetas.... sente uma sensação de querer devolver tudo o que fizeram com você naquele sonho, então sem pensar muito você decide riscar os livros dos professores!
                        `)
            );

            let livro = rando(10);

            if (livro <= 2) {
              console.log(
                chalk.blue(`
                            Você começa a riscar os livros, sem se importar com mais nada! o tempo vai passando e você continua entretido, mas de repente o pior acontece, um professor viu você riscando os livros, você fica desesperado...
                            
                            O professor fica muito irritado com isso, mas depois de um tempo ele diz que não vai te levar para a direção...

                            Com uma condição, vai ter que fazer provas mais difíceis e ele vai pedir para a sua mâe ficar de olho em você...
                            `)
              );

              modulo.principal.estudo -= 2;
              modulo.principal.responsa -= 2;
            } else {
              console.log(
                chalk.blue(`
                            Você fica tão entretido em riscar os livros que esquece de todo o resto, para você naquele momento, esta fazendo a maior e mais perfeita vingança contra toda nota baixa que essa sociedade injusta de professores fez a você!!!!
                            `)
              );

              modulo.principal.diversao += 3;
            }
          } else if (resposta.opcao == "Voltar para o corredor") {
            console.log(
              chalk.blue(`
                        Você decide que por hoje esta bom de ficar na biblioteca, então decide voltar...
                        `)
            );

            break;
          }

          console.log(
            chalk.blue(`
                    Quando você menos espera já esta na hora de ir embora, parece que o dia passou muito rápido!
                    `)
          );

          modulo.tempo.hora = 12;
          console.log(
            chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`)
          );
          break;
        }
      } else if (modulo.tempo.hora <= 11 && modulo.tempo.dia == 5) {
        // manhã da sexta-feira (dia de prova)
        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.
                `)
        );

        console.log(
          chalk.blue(`
                Você avança os corredores e vê que não tem ninguém nos corredores, você acha muito estranho isso...

                ${chalk.cyan.italic('"Será que hoje não tem aula???"')} 
                
                Após alguns minutos perdido um professor te encontra.

                -- ${chalk.blueBright(
                  "Esqueceu qual é a sua sala? Bora lá vou te levar, hoje tem prova!"
                )} - O professor diz.

                Você começa a pensar e pensar, mas só depois de um tempo que a sua mente volta a funcionar ${chalk.cyan.italic(
                  '"PROVA! QUEEEEEE, EU NEM SABIA, QUE MERDA!!!"'
                )}

                Suor frio começa a escorrer e um sorriso amarelo se estampa no seu rosto.

                Você entra na sala e senta no seu lugar, estando bem apreensivo, não consegue pensar em nada além de ${chalk.cyan.italic(
                  '"DEU MERDA"'
                )}.
                `)
        );

        modulo.tempo.avancaTempo(1);

        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`)
        );

        console.log(
          chalk.blue(`
                -- ${chalk.blueBright(
                  "Agora são",
                  modulo.tempo.hora,
                  ":00, vocês tem até a hora de ir embora para terminar a prova! Não precisam ficar nervosos e com receio, se estudaram pelo menos um pouco, vão conseguir uma boa nota, afinal, é uma prova de todo conteúdo ensinado em sala!"
                )} - O professor diz.

                Depois de falar isso, ele começa a entregar as provas e a avaliação se inicia!
                `)
        );

        if (modulo.principal.estudo <= 10) {
          console.log(
            chalk.blue(`
                    Por mais que tente ler a prova, você não consegue entender nada... as horas vão passando e passando, mas as respostas não aparecem na sua cabeça...

                    O professor fala que logo logo a prova irá acabar, então você decide que terá que chutar essa bosta!
                    `)
          );

          let numero = rando(55);

          prova = modulo.resultadoProva(numero);
        } else if (
          modulo.principal.estudo > 10 &&
          modulo.principal.estudo <= 15
        ) {
          console.log(
            chalk.blue(`
                    Você consegue ler algumas coisas na prova! Não é o ideal, mas pelo menos sabe que não irá precisar chutar toda a prova...

                    Depois de conseguir resolver as questões que sabia, o professor diz que a prova logo logo irá acabar, então você já começa a chutar as outras questões!
                    `)
          );

          let numero = rando(21);

          prova = modulo.resultadoProva(numero);
        } else if (
          modulo.principal.estudo > 15 &&
          modulo.principal.estudo <= 20
        ) {
          console.log(
            chalk.blue(`
                    Ufa em, recendo a prova você nota que não é um bicho de 7 cabeças, até que dá para fazer tranquilamente e tirar uma boa nota!

                    Você fica feliz que tirou um tempo a mais para estudar!
                    `)
          );

          let numero = rando(10);

          prova = modulo.resultadoProva(numero);
        } else if (
          modulo.principal.estudo > 20 &&
          modulo.principal.estudo <= 25
        ) {
          console.log(
            chalk.blue(`
                    Depois de estudar tanto você tem a certeza que irá tirar uma boa nota, as perguntas não são nada difíceis.

                    Sabe que com certeza irá tirar mais que 7!
                    `)
          );

          let numero = rando(3);

          prova = modulo.resultadoProva(numero);
        } else if (modulo.principal.estudo > 25) {
          console.log(
            chalk.blue(`
                    Você até acha estranho quando recebe a prova, parece que faz anos que não faz uma, mas mesmo assim consegue ler todas as perguntas e entender o que é pedido muito rapidamente!

                    Você se sente muito confiante, talvez consiga um 10?
                    `)
          );

          prova = modulo.resultadoProva(1);
        }

        modulo.tempo.hora = 12;

        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`)
        );

        console.log(
          chalk.blue(`
                Exatamente às ${modulo.tempo.hora}:00, o professor termina de recolher as provas e dispensa todos os alunos.

                Fora da sala você faz um último pedido aos céus para que consiga uma boa nota...
                `)
        );
      } else if (modulo.tempo.hora <= 17 && modulo.tempo.dia != 6) {
        // tarde

        let tempo = rando(3);
        let dinheiro = rando(10);
        let assalto = rando(10);
        let venda = rando(10);

        if (modulo.tempo.hora == 12) {
          if (tempo == 1) {
            console.log(
              chalk.blue(`
                    Você sai da escola e vai direto para a sua casa, o sol esta em seu auge, o calor te faz suar, o que te faz sentir cansado e ofegante...

                    ${chalk.cyan.italic(
                      "Imagina se esse dia fosse naquele pesadelo de sonho onde tínhamos que usar mascara... Deus me livre!"
                    )}
                    `)
            );

            modulo.principal.energia--;
            sol++;
          } else if (tempo == 2) {
            console.log(
              chalk.blue(`
                    Você sai da escola e segue direto para a sua casa, hoje por sorte é um dia que esta ventando e não está muito quente, o que te faz sentir que nem cansou quando chegou ao destino final!
                    `)
            );
          } else if (tempo == 3) {
            console.log(
              chalk.blue(`
                    Você sai da escola e anda para a sua casa, hoje o dia não está nada quente!! E você pode até perguntar qual seria a parte ruim... bom...

                    Hoje na verdade está muito frio, você começa a andar mais rápido para chegar em casa, afinal, esqueceu de levar a blusa...
                    `)
            );

            modulo.principal.energia--;
            frio++;
          }

          if (dinheiro == 1) {
            console.log(
              chalk.blue(`
                    Enquanto passava por uma rua não tão movimentada, você encontra no chão uma pequena bolsa com 15 reais! Você se sente rico! Crianças são facilmente felizes!
                    `)
            );

            modulo.principal.dinheiro += 15;
            dinheiroRua++;
          } else if (dinheiro >= 2 && dinheiro <= 4) {
            console.log(
              chalk.blue(`
                    Andando por uma rua perto da sua casa, você encontra 2 reais jogados no chão... Não é muito, mas com certeza é melhor do que nada!
                    `)
            );

            modulo.principal.dinheiro += 2;
            dinheiroRua++;
          } else if (dinheiro == 10) {
            console.log(
              chalk.blue(`
                    Você tropeça no chão, sente uma dor no dedo do pé, mas continua andando, esperando que ninguém tenha visto o que aconteceu...

                    ${chalk.cyan.italic(
                      '"espero que essa dor passe logo, não quero ficar mancando até chegar em casa, será que hoje é meu dia de azar? Caramba que dor!"'
                    )}
                    `)
            );

            modulo.principal.dinheiro -= 2;
            perdeuDinheiro++;
          }

          if (assalto == 1) {
            console.log(
              chalk.blue(`
                    Enquanto estava quase chegando em casa, você é abordado por um cara encapuzado!

                    --${chalk.grey(
                      "Isso é um assalto! Passe agora o seu dinheiro!"
                    )} - Ele fala com uma voz firme.
                    `)
            );

            vitima++;

            if (modulo.principal.energia <= 15) {
              console.log(
                chalk.blue(`
                        Você não tem muita reação além de entregar o seu dinheiro e ver ele indo embora... você com medo de ele te seguir ou voltar para tentar roubar mais, começa a correr até chegar na sua casa!
                        
                        Infelizmente você estava cansado de mais para ter uma reação melhor...
                        `)
              );

              modulo.principal.dinheiro = 0;
              naoEscapou++;
            } else if (modulo.principal.energia > 15) {
              console.log(
                chalk.blue(`
                        Você sem pensar duas vezes consegue ter uma reação bem rápida, virando a esquina e já começando a correr, você consegue despistar o ladrão sem perder nada! Mas por causa disso, o seu coração está tão acelerado que parecia que iria levantar voo e seu corpo estava pulando de adrenalina!
                        `)
              );

              modulo.principal.energia -= 5;
              escapou++;
            }
          }
        }

        if (modulo.tempo.hora == 12) {
          console.log(
            chalk.blue(`
                Entrando em casa, você toma um banho, troca de roupa e descansa durante um tempo...
                `)
          );
          modulo.tempo.avancaTempo(1);

          console.log(
            chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`)
          );

          console.log(
            chalk.blue(`
                E agora o que deseja fazer?
                `)
          );
        }

        let casa = await prompt(modulo.voltou);

        if (casa.opcao == "Continuar descansando até a tarde") {
          console.log(
            chalk.blue(`
                    Você pouco se importa com tudo ao seu redor, só focando em agora descansar mais!

                    Então você sobe e se arruma, ajusta as coisas e dorme até a tarde!
                    `)
          );

          modulo.tempo.hora = 18;
        } else if (casa.opcao == "Estudar") {
          console.log(
            chalk.blue(`
                    Vai estudar por quantas horas?
                    `)
          );

          if (modulo.tempo.hora == 13) {
            resposta = await prompt(modulo.tempoEstudoUm);
          } else if (modulo.tempo.hora == 14) {
            resposta = await prompt(modulo.tempoEstudoDois);
          } else if (modulo.tempo.hora == 15) {
            resposta = await prompt(modulo.tempoEstudoTres);
          } else if (modulo.tempo.hora == 16) {
            resposta = await prompt(modulo.tempoEstudoQuatro);
          } else if (modulo.tempo.hora == 17) {
            resposta = await prompt(modulo.tempoEstudoCinco);
          }

          if (resposta.opcao == "1 hora") {
            console.log(
              chalk.blue(`
                        Você nem arruma as coisas direito para estudar, na verdade o que queria era só revisar um pouco o conteúdo da aula.
                        `)
            );

            modulo.principal.estudo++;
            modulo.tempo.avancaTempo(1);
          } else if (resposta.opcao == "2 horas") {
            console.log(
              chalk.blue(`
                        Você se ajeita e estuda durante uma hora e meia, depois usa o restante do tempo para revisar o conteúdo da aula!
                        `)
            );

            modulo.principal.estudo += 2;
            modulo.tempo.avancaTempo(2);
          } else if (resposta.opcao == "3 horas") {
            console.log(
              chalk.blue(`
                        Você decide que estudará bastante, tem muita coisa que ainda não entendeu direito e agora quer dar uma chance para a sua mente se redimir!
                        `)
            );

            modulo.principal.estudo += 3;
            modulo.tempo.avancaTempo(3);
          } else if (resposta.opcao == "4 horas") {
            console.log(
              chalk.blue(`
                        Você se sente tão inspirado em dar uma vida melhor para você mesmo e para a sua mãe, que você decide estudar por 4 horas!
                        `)
            );

            modulo.principal.estudo += 4;
            modulo.tempo.avancaTempo(4);
          } else if (resposta.opcao == "5 horas") {
            console.log(
              chalk.blue(`
                        Você sente que tem que tirar o dia inteiro para estudar, antes quando estava no sonho você se achava mais inteligente, mas agora você percebe o motivo de achar que era inteligente... antes aquilo era um SONHO!
                        `)
            );

            modulo.principal.estudo += 5;
            modulo.tempo.avancaTempo(5);
          }
        } else if (casa.opcao == "Fazer limonada para vender") {
          console.log(
            chalk.blue(`
                    Você com saudade de ter o seu dinheirinho todo mês, decide fazer uma limonada para vender.
                    `)
          );

          if (venda == 1) {
            console.log(
              chalk.blue(`
                        Infelizmente por mais que tenha feito um lugarzinho para vender as limonadas, você não consegue vender nada, hoje não foi uma tarde muito produtiva...
                        `)
            );
          } else if (venda <= 7) {
            console.log(
              chalk.blue(`
                    Você consegue vender algumas limonadas ao decorrer da tarde, não foi muito, mas já traz uma felicidade para você!
                        `)
            );

            modulo.principal.dinheiro += 3;
          } else if (venda <= 10) {
            console.log(
              chalk.blue(`
                        Você consegue vender bastante limonadas ao decorrer da tarde, foi uma tarde bem produtiva!

                        Claro... vender limonada assim não te deixará rico do dia para a noite...
                        `)
            );

            modulo.principal.dinheiro += 6;
          }

          modulo.tempo.avancaTempo(5);
        } else if (casa.opcao == "Ler algum livro") {
          console.log(
            chalk.blue(`
                    Você decide ler algum livro da estante, mas para isso, usará uma técnica para escolher um livro aleatório!

                    Fechando os olhos, você passa a mão sobre os livros e depois de alguns segundos puxa um livro...
                    `)
          );

          let livro = rando(5);

          if (livro == 1) {
            console.log(
              chalk.blue(`
                        Você pega um livro de ficção!
                        `)
            );

            modulo.principal.estudo++;
          } else if (livro == 2) {
            console.log(
              chalk.blue(`
                        Você pega um livro de aventura!
                        `)
            );

            modulo.principal.diversao++;
          } else if (livro == 3) {
            console.log(
              chalk.blue(`
                        Você pega um livro de terror!
                        `)
            );
          } else if (livro == 4) {
            console.log(
              chalk.blue(`
                        Você pega um livro de romance!
                        `)
            );
          } else if (livro == 5) {
            console.log(
              chalk.blue(`
                        Você pega um livro de mistério!
                        `)
            );

            modulo.principal.social++;
          }

          console.log(
            chalk.blue(`
                    Você passa a tarde inteira entretido na leitura e quando menos percebe, já está a noite!
                    `)
          );

          modulo.tempo.avancaTempo(5);
        }
      } else if (modulo.tempo.hora < 23 && modulo.tempo.dia != 6) {
        // noite
        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00.`)
        );

        console.log(
          chalk.blue(`
                Agora pela noite, a sua mãe chega do trabalho, ela te abraça e pergunta:

                -- ${Chalk.magenta(modulo.principal.nome)} ${chalk.magenta(
            `como foi na escola?`
          )}

                -- ${chalk.cyan(
                  `Foi boa mãe, é o de sempre e como a senhora está?`
                )} - Você responde a sua mãe.

                -- ${chalk.magenta(
                  `Ah... Estou bem!`
                )} - A sua mãe responde te abraçando mais uma vez. - ${chalk.magenta(
            `Vou esquentar a comida para nós comermos, enquanto isso vai lá se divertir.`
          )}

                Depois de dizer isso a sua mãe segue para a cozinha, saindo do seu campo de visão.

                O que deseja fazer nesse meio tempo?
                `)
        );

        conversouMãe++;

        let resposta = await prompt(modulo.noite);

        if (resposta.opcao == "Estudar mais um pouco") {
          console.log(
            chalk.blue(`
                    Você decide estudar mais um pouco, então segue até a sala, pega o seu livro e revisa os conteúdos passados na sala de aula.
                    `)
          );

          modulo.principal.estudo++;
        } else if (resposta.opcao == "Jogar com o seu video-game de mão") {
          let jogo = rando([
            "The Legend of Zelda: Spirit Tracks",
            "Mario Kart DS",
            "Grand Theft Auto: Chinatown Wars",
            "Castlevania: Dawn of Sorrow",
            "New Super Mario Bros",
            "Final Fantasy IV",
            "Animal Crossing: Wild World",
            "Kirby Mass Attack",
            "Mario Party DS",
            "Pokémon White Version",
            "Mario & Luigi: Partners in Time",
          ]);

          console.log(
            chalk.blue(`
                    Você decide que agora é a melhor hora para se divertir definitivamente!

                    Indo até a sala, você pega o seu video-game e começa a jogar ${jogo.value}.

                    Parece que faz tanto tempo que você não joga nesse video-game, o jogo parece que não tem gráficos tão bonitos como lembrava, mas mesmo assim, o jogo te traz essa sensação única de ser clássico.
                    `)
          );

          modulo.principal.diversao++;
        } else if (resposta.opcao == "Ajudar a sua mãe na cozinha") {
          console.log(
            chalk.blue(`
                    Você decide arregaçar as mangas e ajudar a sua mãe na cozinha, nesse meio tempo vocês conversam e se aproximam mais, algumas vezes seu olho começa a embaçar e fica úmido, mas você não sabe qual o motivo.
                    `)
          );

          modulo.principal.social++;
          modulo.principal.responsa += 2;
          modulo.principal.diversao++;
          ajudou++;
          conversouMãe++;
        } else if (resposta.opcao == "Descansar até a hora da janta") {
          console.log(
            chalk.blue(`
                    Mesmo que depois da janta já iria dormir, você decide descansar esse pequeno tempo até a janta ficar pronta, pelo menos se conseguir colocar os pensamentos no lugar já está bom para você.
                    `)
          );

          modulo.principal.energia++;
        }

        modulo.tempo.avancaTempo(2);

        console.log(chalk.red(`Um pouco depois, as ${modulo.tempo.hora}:00.`));

        console.log(
          chalk.blue(`
                Você consegue sentir o cheiro delicioso da comida da sua mãe impregnando a casa inteira!

                Seguido por esse cheiro, vocês dois se sentam para comer, conversam sobre os seus dias e riem.

                Depois de terminada a janta, você decide ajudar sua mãe a tirar a mesa e lavar os pratos!
                `)
        );

        modulo.tempo.avancaTempo(3);
        conversouMãe++;
      } else if (modulo.tempo.hora >= 23 && modulo.tempo.dia != 6) {
        // sonho

        console.log(
          chalk.blue(`
                Infelizmente quando vocês acabam de terminar tudo, já sabem que terão que dormir logo para acordar no próximo dia, sendo assim, você segue para o banheiro, escova os dentes e faz as suas necessidades básicas, depois se dirige para o quarto.

                ${chalk.cyan.italic(
                  '"Espero que isso não seja um sonho..."'
                )} Você pensa enquanto pega no sonho.
                `)
        );

        modulo.tempo.avancaTempo(1);
        break;
      } else if (modulo.tempo.dia == 6) {
        // sábado
        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${
            modulo.tempo.hora
          }:00, ${modulo.tempo.saberDia()}
                `)
        );

        console.log(
          chalk.blue(`
                Você acorda hoje mais tarde, virando na cama sente até preguiça de levantar, essa vida é muito diferente do que estava acostumado naquele sonho.

                Passando mais alguns minutos você finalmente decide levantar, até pelo motivo de não estar conseguindo voltar a dormir.

                Depois de escovar os dentes e tomar banho, você olha para o calendário, na verdade é a primeira vez que olha no calendário durante a semana inteira, então vê que hoje era dia 10/07, essa data não era muito estranha para você...
                
                O que te faz refletir, parece que está esquecendo de algo muito importante, o que será?

                ${chalk.cyan.italic(
                  '"Caramba... NÃO CREIO, É ISSO O QUE EU ESQUECI???? MEU DEUS, COMO EU POSSO ESQUECER O ANIVERSÁRIO DA MINHA MÃE?????"'
                )} Você pensa olhando aflito para o calendário, ${chalk.cyan.italic(
            '"Eu tenho que dar parabéns para ela, será que consigo dar algo como presente?"'
          )}

                Então após pensar mais alguns minutos, você resolve fazer um bolo enquanto ela não acordou e entregar o dinheiro que conseguiu para ela!
                `)
        );

        modulo.tempo.avancaTempo(2);

        console.log(
          chalk.red(`Um tempo depois: às ${modulo.tempo.hora}:00
                `)
        );

        console.log(
          chalk.blue(`Você consegue terminar o bolo e enfeitar um pouco a sala, não é grande coisa, mas você acredita que a sua mãe vai gostar.
                
                Levando um pouco de café na xícara para a sua mãe, você a desperta e dá um abraço nela, depois de um tempo, você pede para ela se levantar e seguir você até a sala.

                Chegando lá você começa a cantar parabéns para ela e consegue observar que os olhos de sua mãe estão cheios de lágrimas, com certeza ela não esperava por essa surpresa!

                -- ${chalk.magenta(
                  "Obrigada meu filho, tenho orgulho de ter um filho tão bom como você!"
                )}

                Depois disso vocês conversam um pouco mais...

                Até você falar:`)
        );

        if (modulo.principal.dinheiro <= 5) {
          console.log(
            chalk.blue(`
                    -- ${chalk.cyan(
                      "Desculpe mãe, eu queria te dar um presente, mas não encontrei nada e também acabei ficando sem dinheiro, queria te entregar pelo menos um pouco para te ajudar..."
                    )}

                    -- ${chalk.magenta(
                      "Tudo bem",
                      modulo.principal.nome,
                      "você já é o melhor presente que eu poderia pedir!"
                    )}

                    Depois de escutar isso, você fica envergonhado...
                    `)
          );
        } else if (
          modulo.principal.dinheiro > 5 &&
          modulo.principal.dinheiro <= 20
        ) {
          console.log(
            chalk.blue(`
                    -- ${chalk.cyan(
                      "Tome mãe, não é muito, mas acho que já irá te ajudar, não consegui um presente, mas com o dinheiro, você pode comprar alguma coisa que queira"
                    )}

                    -- ${chalk.magenta(
                      "Não precisava",
                      modulo.principal.nome,
                      "... você já é o melhor presente que eu poderia pedir, não precisava me dar dinheiro, mas como sei que você é teimoso, eu vou aceitar"
                    )} - A sua mãe fala, lacrimejando.

                    -- ${chalk.cyan(
                      `Te amo mãe!`
                    )} - Depois de dizer isso, você a abraça novamente!
                    `)
          );
        } else if (
          modulo.principal.dinheiro > 10 &&
          modulo.principal.dinheiro <= 50
        ) {
          console.log(
            chalk.blue(`
                    -- ${chalk.cyan(
                      "Mãe, eu não consegui mais do que isso, me desculpe, também não consegui encontrar nenhum presente melhor, mas espero que esse dinheiro ajude a senhora a se sentir mais feliz e quem sabe ajudar em CASA"
                    )} - Você diz entregando o dinheiro e depois abraça a sua mãe!

                    -- ${chalk.magenta(
                      "Ah... Filho, muito obrigada, eu... nós estamos... deixa isso pra outro momento. Muito obrigado meu filho, te amo muito, você é a razão de eu acordar todo dia e ir trabalhar! Nunca se esqueça..."
                    )} - A sua mãe fala, parecia que a expressão dela era feliz e triste ao mesmo tempo...
                    `)
          );
        } else if (modulo.principal.dinheiro > 50) {
          console.log(
            chalk.blue(`
                    -- ${chalk.cyan(
                      "MÃEEEEE! Tenho uma surpresa para você!!!! Trate de aceitar em, claro que não é um presente muito grande, mas é o que eu tenho para você, use para comprar algo que a senhora goste, ou para te ajudar em algo!!"
                    )} - Você diz entregando o dinheiro e depois abraça a sua mãe, você estava feliz.

                    -- ${chalk.magenta(
                      modulo.principal.nome,
                      "não precisava.... ah, te amo muito meu filho, você não sabe o quanto..."
                    )} - Nesse momento a sua mãe começa a chorar - ${chalk.magenta(
              "Não queria falar para te preocupar, mas eu estou passando por dificuldades, o meu chefe não está pagando tudo que ele prometeu e as contas estão acumulando, esse presente que você me deu meu filho, é uma força a mais para conseguir aguentar tudo, mas pode ter certeza que estarei sempre aqui por você!"
            )}
                    
                    Você fica muito triste, algumas memórias daquele pesadelo invadem a sua cabeça, nele a sua mãe ficou doente por trabalhar de mais...

                    -- ${chalk.cyan(
                      "Eu estou aqui contigo mãe, irei te ajudar!"
                    )} - Você diz abraçando ela mais forte e mais forte...
                    `)
          );
        }

        console.log(
          chalk.blue(`
                Depois que as emoções do aniversário acabaram, você começa a limpar tudo o que sujou para a festa...
                `)
        );

        modulo.tempo.avancaTempo(4);

        console.log(
          chalk.red(`${modulo.tempo.dia}º dia, ${modulo.tempo.hora}:00`)
        );

        console.log(
          chalk.blue(`Depois de ${chalk.blue.inverse(
            "ajeiiiiitar"
          )} tudo, você se sente ${chalk.blue.inverse(
            "cannnsadoo"
          )} então tem a ideia de dormir um ${chalk.blue.inverse(
            "poucooo"
          )}, afinal a escola também ${chalk.blue.inverse(
            "nãooo"
          )} é muito legal.

                ${chalk.red(
                  "Você"
                )} sente seu corpo dando uns espasmos e você ${chalk.red(
            "não"
          )} entende o significado daquilo, talvez seja por causa que levantou muito rápido de manhã, na verdade só ${chalk.red(
            "pode"
          )} ser isso, não tem outro significado. Para você isso parece quando estava prestes a... ${chalk.red(
            "morrer"
          )} naquele pesadelo...

                Você deita, tenta respirar vira para o lad....
                `)
        );

        break;
      }

      // colocar os sonhos aqui, como lista e usar o let i do for, colocar assim: ['', 'a', 'b', 'c', etc...]
    }
  }

  console.log(
    gradient("cyan", "red")(`................................................`)
  );
  console.log(
    gradient.rainbow(
      ".....................pi.............pi...........pi......pi.............pi..........pi...........pi"
    )
  );

  console.log(
    chalk.blue(`
    Você começa a sentir uma dor de cabeça bem forte e dores ao redor do corpo...

    Por mais que tente mover o corpo, a única resposta que tem dele é a dor.

    Tenta falar, mas nenhuma voz saí.

    Você começa a se debater e o 'pi' fica cada vez mais próximo do outro, de repente sente uma mão segurar o seu braço, te acalmando um pouco.

    Passados alguns minutos assim, você consegue abrir lentamente os olhos e para a sua surpresa, se encontra em um hospital, do seu lado segurando o seu braço tem uma mulher, ela parece muito preocupada e do outro lado tem um homem com roupa de médico.

    -- ${chalk.grey(
      `Isso foi um baita de um milagre viu, o seu corpo foi bem guerreiro, sinta-se sortudo de estar vivo!`
    )} - Diz o médico olhando para você.

    -- ${chalk.cyan(
      `a... aa...`
    )} - Você tenta falar, mas nenhuma voz sai da sua garganta...

    -- ${chalk.grey(
      `Não tente falar agora tá? Descanse, você precisa, forçar o corpo agora não é uma boa escolha...`
    )}

    Ainda grogue você não consegue raciocinar direito, cada vez ficando mais assustado com a situação.

    -- ${chalk.green(
      `Amor, você me deixou preocupada, ficou quase 14 dias desacordado! Eu... Eu pensei que iria te perder!`
    )} - Diz a mulher te abraçando com cuidado...

    Depois disso as lágrimas começam a escorrer sem parar do seu rosto e você começa a lembrar do que tinha acontecido...
    `)
  );

  console.log(
    chalk.red(`
    Depois que a sua mãe morreu por causa do excesso de trabalho, você começou a trabalhar muito para superar a perda dela, fora que precisava pagar as contas que estavam ainda no nome dela...
    
    Com o passar do tempo, você envelheceu e desenvolveu vício em bebidas, mesmo casando nunca deixou de trabalhar e beber, até que em um trágico dia...

    Você bebeu muito na volta do trabalho, estava vomitando e passando mal, então viu no outro lado da rua uma tv com uma reportagem de um escritório, de tão bêbado que estava pensou que aquele era o seu escritório, o que acabou fazendo você atravessar a rua sem prestar atenção no transito e ser atropelado violentamente por um carro que não conseguiu desviar...

    As últimas coisas que você pensava naquele momento eram 'trabalhar', 'trabalhar' e 'tenho que trabalhar'...
    `)
  );

  console.log(
    chalk.blue(`
    Depois de lembrar de tudo isso, você começa a chorar pois a sua mãe morreu... na verdade aquele sonho que ela estava viva se passavam dois anos antes dela morrer...

    Você chora, tenta abraçar a sua esposa, tenta falar, mas não consegue fazer nenhuma dessas coisas...

    A sala fica silenciosa, só sendo possível escutar o som dos choros e dos "pi's"....



    Você começa a pedir perdão por tudo no pensamento, pede perdão para o seu corpo e para a sua esposa, pede perdão para a sua falecida mãe e principalmente pede perdão para o seu 'eu' do passado...

    Mas você sabe, a sua história ainda não acabou, ainda mais com essa segunda chance que o seu corpo deu...
    `)
  );

  console.log(
    chalk.red.italic(
      `ENQUANTO eu estiver VIVO, irei mudar os meus defeitos!...`
    )
  );

  resposta = await prompt(modulo.espera);

  console.log(
    chalk.grey(`
    Muito obrigado por jogar!
    
    Sei que o jogo não ficou muito longo, mas espero que essa jornada tenha tocado pelo menos um pouco na sua alma!

    Antes de ir quero desejar que você jogador(a) seja feliz e que viva a vida que você deseja, sem deixar as coisas para resolver outro dia!

    Um obrigado do fundo do meu coração <3 -
    Giovanne Berteli. Criador e idealizador desse game!

    E ah! Deixo aqui também informações importantes:

        ${prova} de nota na prova!

        ${frio} vezes que andou no frio!
        ${sol} vezes que andou no calor!

        ${conversouMãe} vezes que conversou com a sua mãe!
        ${ajudou} vezes que ajudou a sua mãe!

        ${vitima} vezes que foi assaltado!
        ${escapou} vezes que fugiu do assaltos!
        ${naoEscapou} vezes que não conseguiu fugir dos assaltos!

        ${modulo.principal.dinheiro}.00 reais que você conseguiu!
        ${dinheiroRua} vezes que achou dinheiro na rua!
        ${perdeuDinheiro} vezes que perdeu dinheiro na rua!

    Dito isso, lembre-se, a vida não é feita de status, mas de momentos, faça as escolhas certas e viva!!!! FUI.......
    `)
  );
}
