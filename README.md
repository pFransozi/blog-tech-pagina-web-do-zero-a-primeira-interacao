# 🌐 Meu primeiro site com GitHub

> Um projeto guiado para criar, editar, versionar e publicar um pequeno blog **sem instalar programas**.

Neste projeto você vai trabalhar com:

**GitHub.com → github.dev → GitHub Pages**

Não vamos usar terminal, comandos Git ou VS Code instalado no computador.

---

## 🧭 Antes de começar

Você vai usar este material como apoio:

👉 **Guia de consulta rápida do GitHub**  
https://pfransozi.github.io/github-guia-consulta-rapida-em/

Quando esquecer onde clicar no GitHub, consulte o guia e depois volte para este projeto.

---

# 🎯 O objetivo

No final, você terá um site parecido com este:

```text
┌──────────────────────────────────────┐
│            🚀 Meu blog tech          │
│  aprendendo tecnologia passo a passo │
├──────────────────────────────────────┤
│  💻 Meu primeiro post                │
│  Um pequeno texto...                 │
│  ❤️ 0   👍 0                         │
├──────────────────────────────────────┤
│  🌐 Publicando na internet           │
│  Outro pequeno texto...              │
│  ❤️ 0   👍 0                         │
└──────────────────────────────────────┘
```

E ele ficará disponível em um endereço semelhante a:

```text
https://SEU-USUARIO.github.io/meu-blog-tech/
```

---

# 🗺️ Como vamos chegar lá

| Missão | O que você aprende | Resultado |
|---|---|---|
| 00 | criar o primeiro arquivo | aparece um título |
| 01 | organizar o HTML | a página ganha estrutura |
| 02 | criar um post | usamos `header`, `main` e `article` |
| 03 | adicionar CSS | o site ganha cores e espaçamento |
| 04 | usar imagens | o post ganha um elemento visual |
| 05 | organizar com Flexbox | imagem e texto ficam lado a lado |
| 06 | criar uma curtida | JavaScript responde ao clique |
| 07 | usar vários botões | cada reação funciona sozinha |
| 08 | criar vários posts | o blog passa a ter vários artigos |
| 09 | separar os arquivos | HTML, CSS e JavaScript ficam organizados |

📁 Dentro da pasta [`etapas`](./etapas/) existe uma cópia do código ao final de cada missão.

---

# 🚦 Como trabalhar durante a aula

## 1. Crie seu próprio repositório

Use um nome simples, por exemplo:

```text
meu-blog-tech
```

Marque a opção de criar o repositório com um `README`.

> 💡 **Repositório** é a pasta do projeto dentro do GitHub.

---

## 2. Abra o editor do GitHub

Dentro do seu repositório, pressione:

```text
.
```

O endereço muda de:

```text
github.com/...
```

para:

```text
github.dev/...
```

Você verá um editor parecido com o VS Code, mas ele funciona no navegador.

> 🛟 O ponto não abriu o editor?  
> Troque `github.com` por `github.dev` no endereço do navegador.

---

## 3. Faça uma mudança pequena

Crie ou edite o arquivo indicado na missão.

Depois:

1. abra **Source Control** na lateral;
2. confira os arquivos alterados;
3. escreva uma mensagem curta;
4. clique em **Commit & Push**.

### 💬 Exemplo de mensagem

```text
Cria a página inicial
```

> 🧠 Pense no commit como uma **foto do projeto naquele momento**.

---

## 4. Publique com GitHub Pages

Depois de criar o primeiro `index.html`:

**GitHub → Settings → Pages**

Em **Build and deployment**:

```text
Source: Deploy from a branch
Branch: main
Folder: /(root)
```

Salve.

A partir daí, cada **Commit & Push** atualiza o site publicado.

> ⏳ A atualização não é sempre instantânea. Espere alguns minutos e atualize a página.

---

# 🧩 Regra de ouro

Durante a atividade, siga este ciclo:

```text
✏️ editar
   ↓
💾 Commit & Push
   ↓
🌐 abrir o site
   ↓
👀 observar o resultado
   ↓
🔁 continuar
```

Não tente mudar muitas coisas ao mesmo tempo.

---

# 🚀 Comece aqui

Abra:

👉 [`ROTEIRO-DO-ALUNO.md`](./ROTEIRO-DO-ALUNO.md)

Ele mostra exatamente o que fazer em cada missão.

---

# 🆘 Travou?

Antes de apagar tudo:

1. respire;
2. compare seu código com a pasta da missão;
3. procure chaves `{ }`, sinais `< >` e aspas `" "`;
4. confira se o nome dos arquivos está correto;
5. consulte o **Guia de GitHub**.

Erros fazem parte da programação. O importante é descobrir **onde o comportamento começou a ficar diferente do esperado**.

---

## 📚 Referências técnicas

- GitHub.dev: https://docs.github.com/pt/codespaces/the-githubdev-web-based-editor
- GitHub Pages: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

> Este repositório é um material educacional. O código foi escrito para ser pequeno, legível e fácil de modificar.
