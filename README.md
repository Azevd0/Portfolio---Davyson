# Meu Portfólio — Davyson Arthur

Portfólio web responsivo convertido do PDF **{ Meu Portfólio }.pdf**, preservando o estilo escuro com detalhes roxos e tipografia de terminal.

## Como abrir

Abra `index.html` diretamente no navegador ou execute um servidor local dentro da pasta:

```bash
python3 -m http.server 8000
```

Acesse <http://localhost:8000>. O projeto utiliza somente HTML, CSS e JavaScript, sem necessidade de compilação.

## Funcionalidades

- Menu com *hover*, indicador de seção ativa e versão mobile.
- Botões LinkedIn, GitHub e Projetos com contraste invertido ao passar o mouse.
- Carrosséis horizontais de tecnologias com setas (`<` e `>`) e suporte a toque/teclado.
- Adicionadas Hibernate, Maven, Linux, GraalVM, Spring Actuator e Eureka, conforme solicitado.
- Hover roxo translúcido em tecnologias, certificações e cards de projetos.
- Quatro links para os repositórios do GitHub, com abertura em nova aba.
- SEO básico, acessibilidade e suporte a preferência por movimento reduzido.

## Observação sobre certificados

O PDF mostra a opção **"Ver certificado"**, mas não contém URLs de certificados específicos. Para não criar links falsos, os cards indicam que o link não foi informado. Quando disponíveis, substitua os respectivos elementos no `index.html` por âncoras reais.

## Publicação com GitHub Pages

Crie ou utilize um repositório do GitHub, envie os arquivos deste diretório para a branch principal e habilite **Settings → Pages → Deploy from a branch** apontando para a pasta raiz (`/`).

## Estrutura

- `index.html`: conteúdo e semântica.
- `styles.css`: layout responsivo e estados visuais.
- `script.js`: menu ativo, navegação mobile e carrosséis.
- `assets/profile.webp`: ilustração retirada do PDF fornecido.
- `assets/favicon.svg`: ícone do site.
