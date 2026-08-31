const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior planeta do Sistema Solar?",
        alternativas: [
            {
                texto: "A) Júpiter",
                afirmacao: "Júpiter é o maior planeta do Sistema Solar."
            },
            {
                texto: "B) Marte",
                afirmacao: "Marte é um planeta menor que Júpiter."
            }
        ]
    },

    {
        enunciado: "Qual é a capital do Brasil?",
        alternativas: [
            {
                texto: "A) São Paulo",
                afirmacao: "São Paulo é a maior cidade do Brasil, mas não é a capital."
            },
            {
                texto: "B) Brasília",
                afirmacao: "Brasília é a capital do Brasil."
            }
        ]
    },

    {
        enunciado: "Quem pintou a Mona Lisa?",
        alternativas: [
            {
                texto: "A) Leonardo da Vinci",
                afirmacao: "Leonardo da Vinci pintou a Mona Lisa."
            },
            {
                texto: "B) Pablo Picasso",
                afirmacao: "Pablo Picasso não pintou a Mona Lisa."
            }
        ]
    },

    {
        enunciado: "Quantos continentes existem no modelo tradicional de sete continentes?",
        alternativas: [
            {
                texto: "A) 7",
                afirmacao: "O modelo tradicional considera sete continentes."
            },
            {
                texto: "B) 5",
                afirmacao: "Cinco continentes é uma classificação diferente."
            }
        ]
    },

    {
        enunciado: "Qual animal é conhecido como o 'rei da selva'?",
        alternativas: [
            {
                texto: "A) Leão",
                afirmacao: "O leão é popularmente conhecido como o rei da selva."
            },
            {
                texto: "B) Tigre",
                afirmacao: "O tigre não é conhecido popularmente como o rei da selva."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.innerHTML = "";

    mostraAlternativas();
}

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", function () {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {

    historiaFinal += opcaoSelecionada.afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.innerHTML = "";
}

mostraPergunta();