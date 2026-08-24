const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o maior planeta do Sistema Solar?",
        alternativas: [
            {
                texto: "A) Júpiter",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Marte",
                afirmacao: "afirmacao"
            }  
        ]
    },
    {
        enunciado: "Qual é a capital do Brasil?",
        alternativas: [
            {
                texto: "A) São Paulo",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Brasília"
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Quem pintou a Mona Lisa?",
        alternativas: [
            {
                texto: "A) Leonardo da Vinci",
                afirmacao: "afirmacao"
            }
            {
                texto: "B) Pablo Picasso"
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Quantos continentes existem no modelo tradicional de sete continentes?",
        alternativas: [
            {
                texto: "A) 7",
                afirmacao: "afirmacao"
            }
            {"A) 7",
                texto: "B) 5"
            }
        ]
    },
    {
        enunciado: "Qual animal é conhecido como o “rei da selva”?",
        alternativas: [
            {
                texto: "A) Leão",
                afirmacao: "afirmacao"
            }
            {
                texto: "B) Tigre"
                afirmacao: "afirmacao"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada())
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();