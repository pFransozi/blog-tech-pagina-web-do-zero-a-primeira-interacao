const botoes = document.querySelectorAll(".reaction");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const contador = botao.querySelector(".count");
    const estaAtivo = botao.getAttribute("aria-pressed") === "true";

    botao.setAttribute("aria-pressed", String(!estaAtivo));
    contador.textContent = estaAtivo ? "0" : "1";
  });
});
