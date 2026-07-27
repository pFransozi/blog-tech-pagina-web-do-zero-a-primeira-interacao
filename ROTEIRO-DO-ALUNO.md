# 🧭 Roteiro do aluno

Não precisa decorar tudo.

Em cada missão, faça somente três coisas:

> **1. leia → 2. altere → 3. confira**

Quando terminar uma missão, faça o **Commit & Push** indicado.

---

# 🟢 Missão 00 — Minha primeira página

## 🎯 Objetivo

Criar o arquivo que o navegador procura primeiro em um site.

No `github.dev`, crie:

```text
index.html
```

Escreva:

```html
<h1>Meu blog tech</h1>

<p>Estou criando minha primeira página usando GitHub.</p>
```

### ✅ Como saber se deu certo?

O arquivo `index.html` aparece no painel esquerdo.

### 💾 Commit sugerido

```text
Cria a página inicial
```

Agora configure o **GitHub Pages** seguindo o seu guia de consulta.

Quando o site estiver publicado, abra o endereço e observe o resultado.

---

# 🟢 Missão 01 — Organizando o HTML

Agora vamos explicar ao navegador que estamos criando um documento HTML completo.

Substitua o conteúdo do `index.html` por:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu blog tech</title>
</head>
<body>
    <h1>Meu blog tech</h1>
    <p>Estou criando minha primeira página usando GitHub.</p>
</body>
</html>
```

## 🔎 O que mudou?

- `<head>` guarda informações sobre a página;
- `<body>` guarda o conteúdo que aparece na tela;
- `<title>` define o nome da aba;
- `lang="pt-BR"` informa o idioma.

### ✅ Como saber se deu certo?

Depois do **Commit & Push**, o conteúdo continua aparecendo e a aba do navegador passa a mostrar **Meu blog tech**.

### 💾 Commit sugerido

```text
Organiza a estrutura HTML
```

---

# 🟢 Missão 02 — Criando o primeiro post

Dentro de `<body>`, vamos separar o cabeçalho do conteúdo.

```html
<header>
    <h1>🚀 Meu blog tech</h1>
    <p>Aprendendo tecnologia passo a passo.</p>
</header>

<main>
    <article>
        <div>
            <h2>💻 Meu primeiro post</h2>
            <p class="autor">Por: Seu nome</p>
            <p>
                Estou construindo uma página usando HTML,
                CSS, JavaScript e GitHub.
            </p>
        </div>
    </article>
</main>
```

> ✏️ Troque **Seu nome** pelo seu nome.

## 🧠 Ideia importante

`<article>` representa um conteúdo que pode ser entendido como uma unidade, como um post de blog.

### 💾 Commit sugerido

```text
Adiciona o primeiro post
```

---

# 🟡 Missão 03 — Dando aparência ao site

Ainda dentro do `index.html`, coloque este bloco dentro de `<head>`, logo antes de `</head>`:

```html
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        background: #f5f7fb;
        color: #172033;
    }

    header {
        background: #183c63;
        color: white;
        text-align: center;
        padding: 32px 16px;
    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 24px 16px;
    }

    article {
        background: white;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 16px;
    }

    .autor {
        font-weight: bold;
    }
</style>
```

### 👀 Observe

O HTML continua sendo o conteúdo.

O CSS muda **como esse conteúdo aparece**.

### 💾 Commit sugerido

```text
Adiciona estilo ao blog
```

---

# 🟡 Missão 04 — Colocando uma imagem

Crie uma pasta:

```text
assets
```

Dentro dela, crie o arquivo:

```text
blog-tech.svg
```

Para facilitar, você pode copiar o arquivo que está em:

```text
etapas/04-imagem/assets/blog-tech.svg
```

Agora, dentro do `<article>`, antes da `<div>`, adicione:

```html
<img
    src="assets/blog-tech.svg"
    alt="Ilustração de um computador com símbolos de tecnologia"
>
```

Dentro do `<style>`, adicione:

```css
article img {
    width: 110px;
    height: 110px;
}
```

## ♿ Por que existe `alt`?

O `alt` descreve a imagem. Ele ajuda quando a imagem não aparece e também melhora a acessibilidade.

### 💾 Commit sugerido

```text
Adiciona imagem ao post
```

---

# 🟡 Missão 05 — Organizando com Flexbox

Vamos colocar a imagem e o texto lado a lado.

No CSS de `article`, acrescente:

```css
display: flex;
gap: 20px;
align-items: flex-start;
```

Agora o bloco completo fica parecido com:

```css
article {
    display: flex;
    gap: 20px;
    align-items: flex-start;

    background: white;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 16px;
}
```

### ✅ Como saber se deu certo?

A imagem deve aparecer ao lado do texto em telas maiores.

### 💾 Commit sugerido

```text
Organiza o post com flexbox
```

---

# 🔵 Missão 06 — Minha primeira interação

Depois do texto do post, adicione:

```html
<button>
    ❤️ <span>0</span>
</button>
```

Antes de `</body>`, adicione:

```html
<script>
    const botao = document.querySelector("button");

    botao.addEventListener("click", function () {
        const contador = botao.querySelector("span");
        contador.textContent++;
    });
</script>
```

## 🧠 O que o JavaScript está fazendo?

Ele:

1. encontra o botão;
2. espera um clique;
3. encontra o número dentro do botão;
4. soma `1`.

### 💾 Commit sugerido

```text
Adiciona contador de curtidas
```

---

# 🔵 Missão 07 — Mais de uma reação

Adicione outro botão:

```html
<div class="reacoes">
    <button>❤️ <span>0</span></button>
    <button>👍 <span>0</span></button>
</div>
```

Apague o JavaScript anterior e use:

```html
<script>
    const botoes = document.querySelectorAll("button");

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const contador = botao.querySelector("span");
            contador.textContent++;
        });
    });
</script>
```

## 🔎 A diferença principal

```javascript
querySelector()
```

procura um elemento.

```javascript
querySelectorAll()
```

procura vários elementos.

Depois, `forEach` passa por cada botão.

### 💾 Commit sugerido

```text
Permite varias reacoes
```

---

# 🔵 Missão 08 — Criando vários posts

Copie o bloco `<article>...</article>` e cole abaixo dele.

Altere o segundo post. Exemplo:

```html
<h2>🌐 Meu site está na internet</h2>

<p class="autor">Por: Seu nome</p>

<p>
    Agora o projeto está salvo no GitHub e publicado
    usando GitHub Pages.
</p>
```

Os botões dos dois posts devem continuar funcionando.

### 💡 O que aprendemos aqui?

Criamos uma estrutura que pode ser **repetida**.

Cada `<article>` representa um post.

### 💾 Commit sugerido

```text
Adiciona um segundo post
```

---

# 🟣 Missão 09 — Organizando o projeto

Até agora, HTML, CSS e JavaScript ficaram juntos.

Funciona, mas podemos organizar melhor.

Crie:

```text
style.css
script.js
```

A estrutura ficará assim:

```text
meu-blog-tech/
├── index.html
├── style.css
├── script.js
└── assets/
    └── blog-tech.svg
```

## 1. Mova o CSS

Retire o conteúdo de `<style>...</style>` e coloque em `style.css`.

No `<head>`, coloque:

```html
<link rel="stylesheet" href="style.css">
```

## 2. Mova o JavaScript

Retire o conteúdo de `<script>...</script>` e coloque em `script.js`.

Antes de `</body>`, coloque:

```html
<script src="script.js"></script>
```

### 🧩 Agora cada arquivo tem uma função

```text
index.html  → estrutura e conteúdo
style.css   → aparência
script.js   → comportamento
```

### 💾 Commit sugerido

```text
Separa HTML CSS e JavaScript
```

---

# 🏁 Missão final — Personalize

Agora o projeto é seu.

Faça pelo menos três mudanças:

- ✏️ escreva seus próprios textos;
- 🎨 altere algum detalhe visual;
- 🖼️ troque ou crie uma imagem;
- ➕ crie outro post;
- 😀 crie outra reação.

Depois faça o último:

```text
Commit & Push
```

E abra seu GitHub Pages.

---

# ✅ Checklist final

Antes de entregar:

- [ ] meu repositório está público;
- [ ] existe `index.html`;
- [ ] o GitHub Pages está publicado;
- [ ] meu nome aparece no projeto;
- [ ] existem pelo menos dois posts;
- [ ] os botões funcionam;
- [ ] fiz vários commits durante o desenvolvimento;
- [ ] o link do site abre em outra aba anônima.

🎉 Pronto. Você construiu, versionou e publicou um pequeno projeto web.
