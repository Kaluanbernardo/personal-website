# Manual do site pessoal

Guia completo pra editar tudo que o site tem. Organizado por **o que você quer fazer** — não por arquivo.

---

## Sumário

1. [Visão geral do site](#1-visão-geral-do-site)
2. [Setup inicial (primeira vez ou nova máquina)](#2-setup-inicial-primeira-vez-ou-nova-máquina)
3. [Fluxo diário de edição](#3-fluxo-diário-de-edição)
4. [Editando posts, projetos e publicações (Keystatic)](#4-editando-posts-projetos-e-publicações-keystatic)
5. [Editando páginas estáticas (Sobre, Contato, CV, Home)](#5-editando-páginas-estáticas-sobre-contato-cv-home)
6. [Trocando textos do menu, footer e botões](#6-trocando-textos-do-menu-footer-e-botões)
7. [Trocando imagens, PDFs e outros arquivos](#7-trocando-imagens-pdfs-e-outros-arquivos)
8. [Mudando cores, fontes e estilo](#8-mudando-cores-fontes-e-estilo)
9. [Publicando (commit, push, deploy)](#9-publicando-commit-push-deploy)
10. [Configurações do GitHub e domínio](#10-configurações-do-github-e-domínio)
11. [Solução de problemas comuns](#11-solução-de-problemas-comuns)
12. [Mapa rápido de arquivos](#12-mapa-rápido-de-arquivos)

---

## 1. Visão geral do site

O site é construído com **Astro 5** (gerador de site estático) e usa **Keystatic** como CMS local pra editar conteúdo via interface gráfica. O conteúdo é gravado como arquivos `.mdoc` no próprio repositório, e o site é publicado no **GitHub Pages**.

**Como o conteúdo se divide:**

| Tipo | Edita por | Onde mora |
|---|---|---|
| Posts do blog | Keystatic | `src/content/posts/*.mdoc` |
| Projetos | Keystatic | `src/content/projects/*.mdoc` |
| Publicações acadêmicas | Keystatic | `src/content/pubs/*.mdoc` |
| Página Sobre | Editor de texto | `src/i18n/ui.ts` |
| Página Contato | Editor de texto | `src/i18n/ui.ts` |
| Página CV | Editor de texto | `src/i18n/ui.ts` |
| Página Home | Editor de texto | `src/i18n/ui.ts` |
| Menu, footer, botões | Editor de texto | `src/i18n/ui.ts` |
| Imagens, PDFs | Explorer / cópia de arquivo | `public/` |
| Cores, fontes, layout | Editor de texto | `src/styles/global.css` |

**Como a publicação funciona:**

1. Você edita (Keystatic ou editor) → arquivos mudam no seu computador
2. `git add`, `git commit`, `git push` → mudanças vão pro GitHub
3. **GitHub Action** roda automaticamente e faz o build do site
4. **GitHub Pages** publica em <https://kaluanbernardo.github.io/personal-website/>

Tempo total entre `push` e site no ar: **~2-3 minutos**.

---

## 2. Setup inicial (primeira vez ou nova máquina)

Faça uma vez por computador.

### 2.1. Instalar pré-requisitos

- **Git**: <https://git-scm.com/download/win> — depois de instalar, abre PowerShell e roda `git --version` pra confirmar.
- **Node.js LTS**: <https://nodejs.org/> — escolhe a versão "LTS". Roda `node --version` e `npm --version` pra confirmar.
- **Editor de texto** (recomendado): VS Code, em <https://code.visualstudio.com/>.

> Se `npm --version` der erro de "execução de scripts foi desabilitada" no PowerShell, roda este comando uma vez (e digita `S` quando perguntar):
>
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```

### 2.2. Clonar o repositório

No PowerShell:

```powershell
cd $HOME\Documents
git clone https://github.com/Kaluanbernardo/personal-website.git
cd personal-website
```

### 2.3. Instalar dependências

```powershell
npm install
```

Demora ~1 minuto na primeira vez.

### 2.4. Criar o arquivo `.env`

```powershell
Copy-Item .env.example .env
```

Não precisa editar nada — o site funciona com `.env` vazio. (Os campos `NOTION_*` são vestígios de uma versão antiga e podem ser removidos.)

### 2.5. Subir o servidor de desenvolvimento

```powershell
npm run dev
```

Aguarda aparecer:

```
astro  v5.18.1  ready in XXX ms
┃ Local    http://localhost:4321/
```

Deixa essa janela aberta enquanto edita. Pra parar: **Ctrl+C**.

### 2.6. Abrir no navegador

- **Site**: <http://localhost:4321/>
- **Admin do Keystatic**: <http://localhost:4321/keystatic>

---

## 3. Fluxo diário de edição

Sempre que for editar:

```powershell
cd $HOME\Documents\personal-website
git pull
npm run dev
```

`git pull` puxa o que você possa ter editado em outra máquina. **Sempre rode antes de começar a editar** pra evitar conflitos.

Quando terminar e quiser publicar (ver seção 9):

```powershell
git add -A
git commit -m "Mensagem descritiva da mudança"
git push
```

Pra parar o servidor: **Ctrl+C** na janela do PowerShell.

---

## 4. Editando posts, projetos e publicações (Keystatic)

Tudo que aparece no `/blog`, `/projetos` e `/academico` é editado pelo Keystatic.

### 4.1. Abrir o admin

Com o servidor rodando (`npm run dev`), abre:

<http://localhost:4321/keystatic>

A sidebar esquerda lista as três coleções: **Posts**, **Projetos**, **Publicações acadêmicas**.

### 4.2. Criar um novo post

1. Clica em **Posts** na sidebar
2. Clica em **+ Add Posts** (canto superior direito)
3. Preenche os campos:
   - **Título**: aparece no topo do post e na lista do blog. O slug (URL) é gerado automaticamente a partir do título.
   - **Descrição**: resumo curto que aparece embaixo do título na lista do blog. 1-2 frases.
   - **Data de publicação**: usa o picker. Posts são ordenados pela data, mais recentes primeiro.
   - **Tempo de leitura (min)**: número inteiro. Aparece como "X min" na lista.
   - **Tag**: escolhe uma das 6 categorias (Ensaio, Produto, Jornalismo, Leitura, Notas, Academia). Aparece como `#tag` na lista.
   - **Destacado**: marca pra dar destaque visual (atualmente sem efeito visível, reservado pra futuras seções).
   - **Rascunho**: marca enquanto está escrevendo. Posts marcados como rascunho **não aparecem no site público**.
   - **Idioma**: PT (aparece em `/blog`) ou EN (aparece em `/en/blog`).
   - **Conteúdo**: o corpo do post. Editor de markdown — usa toolbar pra negrito, itálico, links, listas, citações, código, etc.
4. Clica em **Save changes** (canto superior direito)

O arquivo é gravado em `src/content/posts/{slug}.mdoc`.

### 4.3. Editar um post existente

1. Clica em **Posts** na sidebar
2. Clica no post que quer editar
3. Faz as mudanças
4. **Save changes**

### 4.4. Apagar um post

1. Abre o post
2. Botão **⋯** (três pontos) no canto superior direito → **Delete**
3. Confirma

### 4.5. Posts em rascunho

Pra trabalhar num post sem publicá-lo:

1. Marca a checkbox **Rascunho** ao criar
2. Vai aparecendo no admin normalmente
3. **Não aparece** em `/blog` no site público

Pra publicar: desmarca **Rascunho** → **Save changes** → commit + push.

### 4.6. Projetos

Mesmo fluxo, em **Projetos** na sidebar. Campos:

- **Título**, **Tipo** (jornalismo/produto/academia/palestra/pessoal), **Onde / veículo**, **Ano**
- **URL externa** (opcional): link pro projeto fora do site
- **Thumbnail (caminho)**: caminho relativo a `/public`, ex.: `img/projetos/foo.jpg`. **A imagem em si precisa estar no repo** — ver seção 7.4.
- **Idioma**, **Descrição** (corpo)

### 4.7. Publicações acadêmicas

Mesmo fluxo, em **Publicações acadêmicas**. Campos:

- **Título**, **Venue / publicação** (revista/conferência), **Ano**
- **Tipo** (artigo/capítulo/livro/tese/dissertação)
- **URL externa** (opcional)
- **Idioma**, **Resumo / notas** (corpo, opcional)

### 4.8. Imagens dentro de um post

O editor do Keystatic permite inserir imagens via toolbar. Ela vai pra uma pasta de assets que o Keystatic gerencia automaticamente — não precisa fazer nada no Explorer.

### 4.9. Salvando = arquivo no disco

Sempre que você clica **Save changes**, o Keystatic grava o arquivo `.mdoc` na sua pasta local. **Pra publicar, ainda precisa commitar e dar push** (ver seção 9). Salvar no Keystatic não publica sozinho.

---

## 5. Editando páginas estáticas (Sobre, Contato, CV, Home)

Páginas que **não passam pelo Keystatic** — Home, Sobre, Contato, CV — têm o texto em **`src/i18n/ui.ts`**. Esse arquivo guarda todos os textos da interface do site, organizados por idioma e por página.

### 5.1. Abrir o arquivo

```powershell
notepad src\i18n\ui.ts
```

(ou `code src\i18n\ui.ts` se tiver VS Code)

### 5.2. Estrutura do arquivo

```ts
export const ui = {
  pt: {
    nav: { ... },
    home: { ... },
    sobre: { ... },
    cv: { ... },
    academico: { ... },
    contato: { ... },
    footer: { ... },
    // ...
  },
  en: {
    // mesma estrutura, em inglês
  },
};
```

**Regra de ouro**: pra cada texto que você muda em PT, mude também em EN (mais abaixo no arquivo). Senão o site fica meio traduzido.

### 5.3. Página Sobre — exemplo prático

Procure por `sobre:` dentro de `pt:`. Você verá:

```ts
sobre: {
  eyebrow: 'Sobre',
  title: { line1: 'Pesquisa, ', emph: 'jornalismo', line2: 'e produto' },
  p1Lead: 'Trabalho com produto digital ',
  p1: 'há 8 anos, com foco em descoberta...',
  p2: 'Atualmente lidero...',
  nowHeading: 'Agora',
  nowRows: [
    ['Trabalhando em', 'Edtech, foco em descoberta'],
    ['Lendo', 'A poética do espaço, Bachelard'],
  ],
  socialsHeading: 'Sociais',
  socials: ['LinkedIn', 'Twitter', 'Instagram'],
  photoCredit: 'Por Fulano de Tal · 2026',
},
```

**O que cada campo faz:**

- `eyebrow`: texto pequeno em maiúsculas no topo da página
- `title`: o título grande. `line1` + `emph` (em destaque) + `line2`
- `p1Lead` + `p1`: primeiro parágrafo. O lead é o início destacado.
- `p2`: segundo parágrafo
- `nowHeading` + `nowRows`: a seção "Agora", com pares `[rótulo, descrição]`
- `socialsHeading` + `socials`: lista de redes sociais
- `photoCredit`: crédito da foto

Pra editar: muda o texto entre as aspas, salva o arquivo, e o site recarrega automaticamente (se `npm run dev` está rodando).

### 5.4. Adicionar uma linha na seção "Agora"

Adiciona um par `['rótulo', 'descrição']` à lista `nowRows`:

```ts
nowRows: [
  ['Trabalhando em', 'Edtech, foco em descoberta'],
  ['Lendo', 'A poética do espaço, Bachelard'],
  ['Ouvindo', 'Caetano Veloso'],   // ← linha nova
],
```

Não esquece da vírgula no fim e na linha anterior. Faz o mesmo em `en:`.

### 5.5. Página Contato

Procure por `contato:` em `pt:`:

```ts
contato: {
  eyebrow: 'Contato',
  title: { line1: 'Vamos', emph: 'conversar' },
  intro: 'Aberto a conversas sobre...',
  email: 'fulano@exemplo.com',           // ← seu email aqui
  socialsHeading: 'Outros canais',
  socials: [
    { n: 'LinkedIn', h: '@fulano', d: 'Profissional' },
    { n: 'Twitter', h: '@fulano', d: 'Pensamentos curtos' },
  ],
},
```

### 5.6. Página CV

Procure por `cv:` em `pt:`. Tem seções de experiência (`experience`) e habilidades (`skills`).

**Adicionar uma experiência:**

```ts
experience: [
  { p: 'Empresa A', r: 'Cargo', o: 'Local', d: '2024-presente', cta: 'descrição curta' },
  { p: 'Empresa B', r: 'Cargo', o: 'Local', d: '2022-2024', cta: 'o que fez' },
  { p: 'Empresa C', r: 'Estágio', o: 'Local', d: '2020-2022', cta: 'frase resumo' },
],
```

`p` = empresa, `r` = cargo, `o` = onde (cidade), `d` = datas, `cta` = descrição.

**Adicionar uma skill:**

```ts
skills: [
  { name: 'Discovery', level: 5 },
  { name: 'Pesquisa qualitativa', level: 4 },
  { name: 'Python', level: 3 },
],
```

`level` é de 1 a 5.

### 5.7. Página Home

Procure por `home:`:

```ts
home: {
  eyebrow: 'Site pessoal',
  title: { line1: 'Linha 1 do título', line2: 'Linha 2' },
  intro: 'Subtítulo / parágrafo curto...',
  ctaBlog: 'Leia o blog',
  ctaCV: 'Baixar CV',
  photoCredit: 'Por Fulano · 2026',
  threeTalksHeading: '...',
  cards: [
    { n: '01', t: 'Card 1', sub: 'Descrição', cta: 'ver mais' },
    { n: '02', t: 'Card 2', sub: 'Descrição', cta: 'ver mais' },
    { n: '03', t: 'Card 3', sub: 'Descrição', cta: 'ver mais' },
  ],
  fromBlog: 'Do blog',
  allPosts: 'Todos os posts',
},
```

### 5.8. Mudanças estruturais (mover seções, adicionar páginas novas)

Editar texto é seguro. Mover seções, mudar layout ou adicionar páginas inteiras precisa mexer em arquivos `.astro` em `src/components/pages/` — isso já é desenvolvimento, não edição. Considera pedir ajuda se for esse o caso.

---

## 6. Trocando textos do menu, footer e botões

Mesmo arquivo: `src/i18n/ui.ts`.

### 6.1. Itens do menu (Nav)

Procure por `nav:`:

```ts
nav: {
  home: 'Início',
  sobre: 'Sobre',
  cv: 'CV',
  academico: 'Acadêmico',
  blog: 'Blog',
  projetos: 'Projetos',
  contato: 'Contato',
  menu: 'Menu',
},
```

Pra renomear "Acadêmico" pra "Pesquisa", muda o valor:

```ts
academico: 'Pesquisa',
```

> ⚠️ A **chave** (`academico`) não pode mudar — é como o código identifica o item. Só o **valor** entre aspas.

### 6.2. Footer

```ts
footer: {
  note: '© 2026 Fulano de Tal',
  sourceLabel: 'Código no GitHub',
},
```

### 6.3. Filtros do blog, labels de tags

Mesmo arquivo, procure por `blog:`. Os filtros do blog são:

```ts
blog: {
  // ...
  filters: ['Todos', 'Produto', 'Jornalismo', 'Academia', 'Leitura', 'Notas'],
},
```

> Os filtros mapeiam pras tags configuradas em `keystatic.config.ts`. Se mudar uma tag (no Keystatic config) tem que ajustar essa lista também — caso contrário, considera não mexer aqui.

---

## 7. Trocando imagens, PDFs e outros arquivos

Tudo que é arquivo público (imagem, PDF, fonte) mora em **`public/`**. O que está nessa pasta é servido como está, na URL `/`.

### 7.1. Estrutura

```
public/
├── cv-pt.pdf       ← seu CV em PT (download)
├── cv-en.pdf       ← seu CV em EN (download)
└── img/
    ├── portrait.jpg     ← sua foto na home/sobre
    └── projetos/        ← thumbnails de projetos
        └── foo.jpg
```

### 7.2. Trocar o retrato

1. Coloca seu arquivo em `public/img/portrait.jpg` (substituindo o existente)
2. Pode ser `.jpg` ou `.png` — se mudar a extensão, ajusta o caminho em `SobrePage.astro` e `HomePage.astro`
3. Recomendação de tamanho: **800×1000 px** (proporção 4:5), `.jpg` com qualidade 80-85%

### 7.3. Trocar o CV em PDF

Substitui:
- `public/cv-pt.pdf` (CV em português)
- `public/cv-en.pdf` (CV em inglês)

Os botões "Baixar CV" na home e na página CV apontam direto pra esses arquivos.

### 7.4. Adicionar thumbnail de projeto

Pra cada projeto que tem thumbnail:

1. Coloca a imagem em `public/img/projetos/nome-do-projeto.jpg`
2. No Keystatic, em **Projetos → o projeto**, no campo **Thumbnail (caminho)**, escreve só:
   ```
   img/projetos/nome-do-projeto.jpg
   ```
   Sem barra inicial, sem `public/` no começo.
3. Salva, commita, pusha. Imagem aparece no `/projetos`.

### 7.5. Adicionar favicon

Coloca um arquivo `favicon.ico` (ou `.svg`) em `public/favicon.ico`. O Astro detecta automático e aplica.

---

## 8. Mudando cores, fontes e estilo

O design do site é controlado por **CSS variables** em `src/styles/global.css`. Mudar cor é seguro; mudar layout exige conhecimento de CSS.

### 8.1. Cores principais

Procure por `:root` no início do arquivo:

```css
:root {
  --bg: #FAF9F6;          /* fundo claro */
  --fg: #1A1A1A;          /* texto principal */
  --fg-2: #4A4A4A;        /* texto secundário */
  --fg-3: #8A8A8A;        /* texto terciário (datas, metadados) */
  --accent: #B8742A;      /* cor de destaque (laranja-ocre) */
  --rule: #1A1A1A;        /* linha divisória escura */
  --rule-soft: #E5E2DA;   /* linha divisória suave */
}
```

E o tema escuro mais abaixo, dentro de `[data-theme="dark"]`:

```css
[data-theme="dark"] {
  --bg: #0F0F0F;
  --fg: #F0F0F0;
  /* ... */
}
```

Pra trocar a cor de destaque pra azul:

```css
--accent: #2563EB;
```

(Faz nas duas seções — `:root` e `[data-theme="dark"]` — pra cobrir os dois temas.)

### 8.2. Fontes

As fontes são auto-hospedadas via `@fontsource`. Pra trocar:

1. Instala uma fonte do Fontsource (no terminal, na pasta do projeto):
   ```powershell
   npm install @fontsource/playfair-display
   ```
2. Importa em `src/layouts/Base.astro` no topo:
   ```ts
   import '@fontsource/playfair-display';
   ```
3. Atualiza a variável CSS em `global.css`:
   ```css
   --display: 'Playfair Display', serif;
   ```

### 8.3. Mudanças mais profundas

Layout (grids, espaçamentos, breakpoints) está em cada componente `.astro` individualmente. Editar isso é desenvolvimento — considera pedir ajuda.

---

## 9. Publicando (commit, push, deploy)

Tudo que você editou (Keystatic ou arquivo) **só vai pro site quando você fizer commit + push**. Salvar localmente não publica.

### 9.1. Ver o que mudou

```powershell
git status
```

Lista os arquivos modificados, novos e deletados.

### 9.2. Commitar

```powershell
git add -A
git commit -m "Descrição curta da mudança"
```

A mensagem é livre, mas é bom ser descritivo: `"Add post sobre metodologia"` é melhor que `"Update"`.

### 9.3. Pushar

```powershell
git push
```

### 9.4. Acompanhar o deploy

1. <https://github.com/Kaluanbernardo/personal-website/actions>
2. O run mais recente vai estar laranja (rodando) → verde (sucesso) ou vermelho (falha)
3. Espera ~2-3 minutos
4. Site atualizado em <https://kaluanbernardo.github.io/personal-website/>

### 9.5. Forçar um redeploy sem mudar nada

Útil se desconfia que o deploy ficou atrás. Vai em **Actions → Deploy → Run workflow → Run**.

### 9.6. Se o deploy falhar (vermelho)

1. Clica no run vermelho na aba Actions
2. Clica no job "build" pra abrir o log
3. Procura linhas em vermelho — geralmente diz qual arquivo + qual problema
4. Se for erro de schema ("expected enum value 'X', got 'Y'"), provavelmente alguma entry no Keystatic ficou com valor inválido. Volta no Keystatic, corrige, save, commit, push.

---

## 10. Configurações do GitHub e domínio

### 10.1. Onde ficam as configs do GitHub Pages

1. <https://github.com/Kaluanbernardo/personal-website>
2. **Settings** (aba do topo) → **Pages** (sidebar esquerda)

Lá você vê:
- **Source**: deve estar como "GitHub Actions"
- **Custom domain**: vazio por padrão (usa `kaluanbernardo.github.io/personal-website/`)

### 10.2. Adicionar domínio próprio (opcional)

Se você comprar um domínio (ex.: `kaluan.com`):

1. **No registrador do domínio** (Registro.br, Namecheap, etc.):
   - Cria um CNAME apontando `www` pra `kaluanbernardo.github.io`
   - Cria registros A (`@`) pros 4 IPs do GitHub: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. **No GitHub Pages**, em "Custom domain", coloca `www.kaluan.com` (ou só `kaluan.com`) e salva. Espera o DNS propagar (~minutos a algumas horas).
3. Marca **Enforce HTTPS** depois que aparecer disponível.
4. **No `astro.config.mjs`**, atualiza:
   ```js
   site: 'https://kaluan.com',
   base: '/',   // ← agora não tem mais subpath
   ```
5. Commit + push.

### 10.3. Mudar o nome do repositório

O nome do repo afeta a URL (`/personal-website/`). Se mudar:

1. Renomeia o repo no GitHub (Settings → Repository name)
2. Atualiza `base` em `astro.config.mjs` pra `/novo-nome/`
3. Atualiza o `site` se mudar o usuário também

### 10.4. Secrets do repositório (Actions)

<https://github.com/Kaluanbernardo/personal-website/settings/secrets/actions>

Atualmente o site **não usa secret nenhum essencial**. O `PUBLIC_GA_ID` (Google Analytics) é opcional.

Se você ainda tem secrets do Notion (`NOTION_TOKEN`, `NOTION_DB_*`) ou outros não usados, dá pra remover sem afetar o site. Cada secret é deletado clicando no ⓘ ao lado dele.

### 10.5. Ativar Google Analytics

1. Cria propriedade GA4 em <https://analytics.google.com/>
2. Copia o **Measurement ID** (formato `G-XXXXXXXXXX`)
3. **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `PUBLIC_GA_ID`
   - Value: o ID
4. Próximo deploy vai injetar o snippet de tracking automaticamente.

Pra rodar localmente com analytics: adiciona a mesma variável em `.env`.

---

## 11. Solução de problemas comuns

### "npm não é reconhecido"

Node.js não está instalado ou o PowerShell não foi reaberto após instalação. Reinstala em <https://nodejs.org/> e reabre o PowerShell.

### "execução de scripts foi desabilitada"

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Digita `S` e Enter quando perguntar.

### "ENOENT: no such file or directory, open package.json"

Você não está na pasta certa. `cd $HOME\Documents\personal-website` antes de rodar comandos npm.

### Admin do Keystatic mostra "Unable to load collection / Not Found"

Você está acessando com prefixo errado. Em desenvolvimento (local), use:

```
http://localhost:4321/keystatic
```

(sem `/personal-website/`). Em produção, o admin **não funciona** — é dev-only.

### Site mostra "collection is empty" mesmo após editar

Reinicia o dev server: **Ctrl+C** e `npm run dev` de novo.

### "Push rejected — não-fast-forward"

Você editou em outra máquina e não puxou aqui. Faz:

```powershell
git pull --rebase
```

Se aparecer conflito, abre o arquivo conflitado, escolhe a versão correta (procure por `<<<<<<<`, `=======`, `>>>>>>>`), salva, e:

```powershell
git add -A
git rebase --continue
git push
```

### Deploy vermelho com erro "Type 'X' is not assignable to..."

Mudou algo em `src/content/config.ts` ou `keystatic.config.ts` que não bate. Rode `npm run build` localmente — o erro aparece com mais detalhe. Se não souber resolver, copia o erro e pede ajuda.

### Imagem do projeto não aparece

Conferir:
1. Arquivo está em `public/img/projetos/<nome>.jpg`?
2. No Keystatic, o campo **Thumbnail (caminho)** tem `img/projetos/<nome>.jpg` (sem barra inicial, sem `public/`)?
3. O arquivo da imagem foi commitado e pushado?

### Site não atualiza após push

1. Confere a aba Actions — deploy pode estar rodando (~3 min)
2. Limpa cache do browser (Ctrl+Shift+R no Chrome/Firefox)
3. Tenta abrir em janela anônima

---

## 12. Mapa rápido de arquivos

Pra cada coisa que você queira mudar, este é o arquivo a tocar:

| Quero mudar... | Arquivo |
|---|---|
| Posts do blog | Keystatic UI → `src/content/posts/*.mdoc` |
| Projetos | Keystatic UI → `src/content/projects/*.mdoc` |
| Publicações | Keystatic UI → `src/content/pubs/*.mdoc` |
| Texto da home, sobre, contato, CV | `src/i18n/ui.ts` |
| Itens do menu | `src/i18n/ui.ts` (chave `nav`) |
| Footer | `src/i18n/ui.ts` (chave `footer`) |
| Filtros do blog | `src/i18n/ui.ts` (chave `blog.filters`) |
| Cores | `src/styles/global.css` (variáveis em `:root`) |
| Foto retrato | `public/img/portrait.jpg` |
| CV PDF | `public/cv-pt.pdf` e `public/cv-en.pdf` |
| Thumbs de projeto | `public/img/projetos/*.jpg` |
| Schema do CMS | `keystatic.config.ts` (e mirror em `src/content/config.ts`) |
| Workflow de deploy | `.github/workflows/deploy.yml` |
| Configs do Astro (base, site, idiomas) | `astro.config.mjs` |
| Layout das páginas (Astro) | `src/components/pages/*.astro` |
| Header / footer (Astro) | `src/components/Nav.astro`, `Footer.astro` |

---

## Cheat sheet

```powershell
# Início de qualquer sessão de edição
cd $HOME\Documents\personal-website
git pull
npm run dev

# Editar conteúdo: http://localhost:4321/keystatic
# Editar texto de páginas: src/i18n/ui.ts

# Publicar
git add -A
git commit -m "..."
git push

# Acompanhar deploy: github.com/Kaluanbernardo/personal-website/actions
# Site: https://kaluanbernardo.github.io/personal-website/
```

---

*Manual gerado pra a versão Keystatic + GitHub Pages do site. Última revisão: 2026-05-04.*
