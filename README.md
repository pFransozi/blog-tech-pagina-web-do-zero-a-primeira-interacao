# Blog Tech — HTML, CSS, JavaScript, Git e GitHub Pages

Este repositório foi pensado como uma trilha prática para estudantes iniciantes. A ideia é construir um pequeno blog interativo do zero e, ao mesmo tempo, aprender a organizar arquivos, versionar o projeto com Git, publicar no GitHub e disponibilizar o resultado com GitHub Pages.

## Resultado final

O site pronto está na pasta [`docs/`](docs/). O GitHub Pages pode publicar diretamente essa pasta a partir da branch `main`.

## Como estudar este repositório

A pasta [`etapas/`](etapas/) contém snapshots progressivos do projeto:

| Etapa | O que é aprendido |
| --- | --- |
| 01 | Primeiro `index.html` e tags básicas |
| 02 | Estrutura semântica com `header` e `main` |
| 03 | CSS separado em arquivo próprio |
| 04 | Imagem, box model e Flexbox |
| 05 | Primeiro botão interativo com JavaScript |
| 06 | Vários botões com `querySelectorAll` e `forEach` |
| 07 | Vários posts com `article` |
| 08 | Site final responsivo com reações de curtir/descurtir |

Abra uma etapa, leia o `README.md` dela e compare o código com a etapa anterior.

## Fluxo recomendado com VS Code + GitHub

### 1. Clone o repositório

No terminal do VS Code:

```bash
git clone URL_DO_SEU_REPOSITORIO
cd NOME_DO_REPOSITORIO
code .
```

### 2. Faça uma alteração

Edite um arquivo, salve e confira o resultado no navegador.

### 3. Veja o que mudou

```bash
git status
git diff
```

### 4. Registre a alteração

```bash
git add .
git commit -m "Ajusta conteúdo do blog"
```

### 5. Envie ao GitHub

```bash
git push
```

## Publicando com GitHub Pages

Este projeto usa a pasta `docs/` como fonte do site.

No GitHub:

1. Abra o repositório.
2. Acesse **Settings**.
3. No menu lateral, abra **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`.
6. Selecione a pasta `/docs`.
7. Salve.

Depois da publicação, o endereço normalmente segue o formato:

```text
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

> Observação: o GitHub Pages também pode ser publicado por GitHub Actions. Para este laboratório, a publicação direta da branch é propositalmente mais simples.

## Estrutura do projeto

```text
blog-tech-github-pages/
├── README.md
├── GUIA-GIT-GITHUB.md
├── etapas/
│   ├── 01-html-basico/
│   ├── 02-html-semantico/
│   ├── 03-css-basico/
│   ├── 04-layout-flex/
│   ├── 05-javascript-interacao/
│   ├── 06-multiplos-botoes/
│   ├── 07-multiplos-posts/
│   └── 08-site-final/
└── docs/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── assets/
        └── blog-tech.svg
```

## Desafio final para o estudante

Faça uma mudança autoral no site, registre a alteração em um commit e publique a nova versão no GitHub Pages. Exemplos: trocar o tema, criar um novo post, alterar a imagem, adicionar uma nova reação ou melhorar a responsividade.
