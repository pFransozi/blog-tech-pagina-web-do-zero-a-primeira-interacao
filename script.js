const botoesDeReacao = document.querySelectorAll(".reacao");

botoesDeReacao.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const contador = botao.querySelector(".contador");
        const estaAtivo = botao.getAttribute("aria-pressed") === "true";

        if (estaAtivo) {
            contador.textContent = "0";
            botao.setAttribute("aria-pressed", "false");
        } else {
            contador.textContent = "1";
            botao.setAttribute("aria-pressed", "true");
        }
    });
});
