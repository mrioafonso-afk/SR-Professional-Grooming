# SR | Professional Groomer — Guia do site 🐾

Site bilingue (PT/EN) da Soraia. Tudo gratuito de manter — só se paga o domínio.

## Estrutura

| Ficheiro | Página |
|---|---|
| `index.html` | Início |
| `sobre.html` | A Soraia + Os Meus Cães (`#caes`) |
| `estudio.html` | Estúdio, serviços, horário e mapa |
| `workshops.html` | Workshops |
| `marcacoes.html` | Marcações (formulário → WhatsApp) |
| `loja.html` | Loja (encomendas → WhatsApp) |
| `css/style.css` | Todo o estilo (cores no topo, em `:root`) |
| `js/main.js` | Idioma, formulário de marcação, encomendas |

## Como editar textos
Abrir o ficheiro `.html` num editor (até o Bloco de Notas serve). Cada texto existe duas vezes:

```html
<span class="pt-only">Texto em português</span>
<span class="en-only">Text in English</span>
```

Editar os dois e guardar. Não apagar as classes `pt-only` / `en-only`.

## Como pôr as fotografias
Os retângulos tracejados são espaços reservados. Para pôr uma foto:

1. Guardar a foto na pasta (ex.: criar pasta `img/` e pôr lá `soraia.jpg`)
2. Substituir o bloco `<div class="foto">...</div>` por:
   ```html
   <img src="img/soraia.jpg" alt="Soraia" style="width:100%;border-radius:22px;object-fit:cover">
   ```

## Marcações automáticas
O formulário em `marcacoes.html` gera uma mensagem organizada e abre o WhatsApp da Soraia (+351 967 692 980 — número definido no topo de `js/main.js`).

**Dica grátis:** instalar a app *WhatsApp Business* para ter respostas rápidas, mensagens de ausência e etiquetas de clientes.

**Calendário sincronizado (opcional, grátis):** criar conta em calendly.com, e em `marcacoes.html` procurar `CALENDLY`, seguir as instruções no comentário.

## Loja
Agora: encomendas via WhatsApp (custo zero). Editar produtos e preços diretamente em `loja.html`.
Mais tarde: Shopify Starter (~5 €/mês) — instruções no comentário `SHOPIFY` em `loja.html`.

## Publicar gratuitamente
1. Criar conta em **netlify.com** (ou Cloudflare Pages)
2. Arrastar a pasta `sr-groomer` para o Netlify — o site fica online em segundos
3. Comprar o domínio (ex.: `srgroomer.pt` em amen.pt ou dominios.pt, ~10–15 €/ano) e ligá-lo no painel do Netlify (Domain settings)

É o único custo de todo o site. ✦
