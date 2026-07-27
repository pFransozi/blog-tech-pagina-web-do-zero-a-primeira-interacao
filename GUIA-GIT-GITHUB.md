# Guia rápido — VS Code, Git, GitHub e GitHub Pages

## Antes de começar

Confirme no terminal:

```bash
git --version
```

## Criando um projeto local do zero

```bash
mkdir meu-blog
cd meu-blog
git init
code .
```

Crie o arquivo `index.html` e salve.

## Primeiro commit

```bash
git status
git add index.html
git commit -m "Cria página inicial"
```

## Conectando ao GitHub

Crie um repositório vazio no GitHub e copie a URL dele. Depois:

```bash
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

## Ciclo de trabalho depois disso

```bash
git status
git add .
git commit -m "Descreva objetivamente a mudança"
git push
```

## Lendo o histórico

```bash
git log --oneline
```

## Publicação

Neste material, o conteúdo publicado fica em `docs/`. Configure o GitHub Pages para publicar `main` + `/docs`.

## Comandos que o estudante precisa dominar

| Comando | Para que serve |
| --- | --- |
| `git status` | mostra o estado dos arquivos |
| `git diff` | mostra alterações ainda não registradas |
| `git add .` | prepara as alterações para o commit |
| `git commit -m "..."` | cria um ponto no histórico |
| `git log --oneline` | mostra o histórico resumido |
| `git pull` | traz atualizações do repositório remoto |
| `git push` | envia commits locais para o GitHub |
