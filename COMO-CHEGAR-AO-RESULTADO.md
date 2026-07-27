# Como chegar ao resultado — passo a passo de código

Este roteiro acompanha a construção do projeto. Em cada etapa existe um snapshot completo na pasta `etapas/`.

## Etapa 00 — preparar o ambiente

Crie uma pasta e abra-a no VS Code:

```bash
mkdir blog-tech
cd blog-tech
code .
```

Crie `index.html`.

---

## Etapa 01 — primeira página HTML

Comece com a estrutura mínima:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Tech</title>
</head>
<body>
  <h1>Meu blog tech</h1>
  <p>Vou compartilhar conhecimentos sobre tecnologia e programação.</p>
</body>
</html>
```

Objetivo: entender que HTML descreve a estrutura da página.

Snapshot: [`etapas/01-html-basico`](etapas/01-html-basico/)

---

## Etapa 02 — organizar semanticamente

Separe cabeçalho e conteúdo principal:

```html
<header>
  <h1>Meu blog tech</h1>
  <p>Vou compartilhar conhecimentos sobre tecnologia e programação.</p>
</header>

<main>
  <h2>Meu primeiro post</h2>
  <p>Por: Estudante</p>
  <p>Boas-vindas ao meu novo blog!</p>
</main>
```

Objetivo: introduzir `header`, `main`, títulos e parágrafos.

Snapshot: [`etapas/02-html-semantico`](etapas/02-html-semantico/)

---

## Etapa 03 — separar o CSS

No `head`:

```html
<link rel="stylesheet" href="style.css">
```

Crie `style.css`:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  color: #183c63;
}

header,
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
}

header {
  background-color: #183c63;
  color: white;
  text-align: center;
}
```

Objetivo: perceber que HTML e CSS têm responsabilidades diferentes.

Snapshot: [`etapas/03-css-basico`](etapas/03-css-basico/)

---

## Etapa 04 — imagem e Flexbox

Adicione uma imagem e um bloco para os textos:

```html
<main>
  <img src="blog-tech.svg" alt="Ícone de tecnologia">

  <div>
    <h2>Meu primeiro post</h2>
    <p class="autor">Por: Estudante</p>
    <p>Boas-vindas ao meu novo blog!</p>
  </div>
</main>
```

No CSS:

```css
main {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

main img {
  width: 80px;
  height: 80px;
}

.autor {
  font-weight: bold;
}
```

Objetivo: mostrar agrupamento, classe CSS e organização horizontal.

Snapshot: [`etapas/04-layout-flex`](etapas/04-layout-flex/)

---

## Etapa 05 — primeiro comportamento com JavaScript

Adicione um botão:

```html
<button>❤️ <span>0</span></button>
```

Depois do conteúdo da página:

```html
<script>
  const botao = document.querySelector("button");
  botao.addEventListener("click", botaoClicado);

  function botaoClicado() {
    const texto = botao.querySelector("span");
    texto.textContent++;
  }
</script>
```

Objetivo: ligar um evento de interface a uma função JavaScript.

Snapshot: [`etapas/05-javascript-interacao`](etapas/05-javascript-interacao/)

---

## Etapa 06 — fazer vários botões funcionarem

Com mais de um botão, `querySelector()` não é suficiente. Use:

```javascript
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const texto = botao.querySelector("span");
    texto.textContent++;
  });
});
```

Objetivo: selecionar uma coleção e percorrê-la com `forEach`.

Snapshot: [`etapas/06-multiplos-botoes`](etapas/06-multiplos-botoes/)

---

## Etapa 07 — transformar cada post em um componente semântico

Quando existem vários posts, cada um precisa de um contêiner próprio:

```html
<main>
  <article>
    <div>🌐</div>
    <div>
      <h2>HTML</h2>
      <p>Estrutura e significado do conteúdo.</p>
      <button>❤️ <span>0</span></button>
    </div>
  </article>

  <article>
    <div>🎨</div>
    <div>
      <h2>CSS</h2>
      <p>Estilo e organização visual.</p>
      <button>❤️ <span>0</span></button>
    </div>
  </article>
</main>
```

Agora o Flexbox deve ser responsabilidade do `article`, não do `main`:

```css
article {
  display: flex;
  gap: 20px;
}
```

Objetivo: entender que o contêiner correto controla o layout dos seus próprios elementos.

Snapshot: [`etapas/07-multiplos-posts`](etapas/07-multiplos-posts/)

---

## Etapa 08 — limitar a reação e permitir desfazer

Em vez de aumentar indefinidamente, cada botão funciona como um estado ativado/desativado:

```javascript
const botoes = document.querySelectorAll(".reaction");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const contador = botao.querySelector(".count");
    const estaAtivo = botao.getAttribute("aria-pressed") === "true";

    botao.setAttribute("aria-pressed", String(!estaAtivo));
    contador.textContent = estaAtivo ? "0" : "1";
  });
});
```

Aqui aparecem juntos:

- seleção de vários elementos;
- evento de clique;
- variável booleana;
- condição;
- atualização da interface;
- atributo de acessibilidade `aria-pressed`.

Snapshot: [`etapas/08-site-final`](etapas/08-site-final/)

---

## Etapa 09 — versionar

Depois de cada mudança relevante:

```bash
git status
git add .
git commit -m "Descreve a mudança realizada"
git push
```

Uma boa prática para a atividade é pedir um commit por etapa.

Exemplo de histórico:

```text
Cria estrutura HTML inicial
Organiza página com tags semânticas
Adiciona estilos CSS
Organiza post com Flexbox
Adiciona reação com JavaScript
Suporta múltiplos botões
Organiza múltiplos posts com article
Finaliza layout responsivo
```

---

## Etapa 10 — publicar

O site pronto fica em `docs/`.

Configure no GitHub:

```text
Settings
→ Pages
→ Build and deployment
→ Deploy from a branch
→ main
→ /docs
→ Save
```

A partir desse momento, alterações enviadas para a pasta `docs/` na branch configurada podem atualizar o site publicado.
