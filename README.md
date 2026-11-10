# Cuscuz Restaurante — Site

Site institucional do **Cuscuz — Cozinha de Bar e Restaurante** (Taquari, Brasília/DF).
Feito com **HTML, CSS e JavaScript puros**, sem dependências nem etapa de build.

## Páginas

| Arquivo | Conteúdo |
| --- | --- |
| `index.html` | Landing page: hero, sobre, destaques do cardápio, galeria, vídeo, depoimentos e rodapé com mapa |
| `cardapio.html` | Cardápio completo, com busca, categorias e opção de salvar em PDF |

## Estrutura

```
├── index.html
├── cardapio.html
├── css/
│   ├── style.css        # estilos do site
│   └── cardapio.css     # estilos da página de cardápio
├── js/
│   ├── main.js          # preloader, animações, menu, galeria, carrossel e player de vídeo
│   └── cardapio.js      # dados do cardápio e renderização
└── assets/
    ├── img/
    │   ├── logo.jpg
    │   └── fotos/       # fotos otimizadas (1600 px)
    └── video/
        └── video_cuscuz.mp4
```

## Rodar localmente

Basta abrir o `index.html` no navegador. Ou, para servir por HTTP:

```bash
npx serve .
# ou
python -m http.server 8000
```

## Publicar no GitHub Pages

1. Envie o repositório para o GitHub.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

O arquivo `.nojekyll` já está incluído.

## Como editar

- **Preços e itens do cardápio:** `js/cardapio.js` (lista `MENU`).
- **Cores e fontes:** variáveis no topo de `css/style.css` (`:root`).
- **Fotos:** substitua os arquivos em `assets/img/fotos/` mantendo os nomes, ou altere o `src` no `index.html`.
- **Links (WhatsApp, Instagram, iFood):** procure por `api.whatsapp.com`, `instagram.com` e `ifood.com.br` no `index.html`.

## Observações

- Fontes carregadas do Google Fonts (Outfit e Playfair Display).
- O mapa do rodapé é um embed do Google Maps.
- O vídeo tem cerca de 10 MB; comprimi-lo melhora o carregamento no celular.

© 2026 — Cuscuz Cozinha de Bar e Restaurante.
