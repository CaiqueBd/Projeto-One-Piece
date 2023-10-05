// OBJETIVO  1 - quando clicar no botão do personagem na lista, marca o botão como selecionado

//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles.
const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

const personagemSelecionado = document.querySelector(".personagem.selecionado");
personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");


    })
})

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
