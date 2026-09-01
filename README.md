# 🚗 Aulas para Habilitados - Instrutor Carlos

Uma landing page moderna e responsiva para apresentar serviços de aulas de direção, incluindo aulas de 1º habilitação e retomada da prática para motoristas.

## ✨ Características

- **Design Responsivo**: Otimizado para mobile (375px), tablet (768px) e desktop (1440px+)
- **Tema Claro/Escuro**: Sistema de tema persistente com localStorage
- **Menu Mobile**: Navegação adaptativa para dispositivos móveis
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Acessibilidade**: Estrutura semântica HTML5 com ARIA labels
- **Performance**: Lazy loading de imagens e otimização de assets
- **SEO Friendly**: Meta tags Open Graph e descrições adequadas

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Marcação semântica e estrutura
- **CSS3**: Grid, Flexbox, custom properties (CSS variables)
- **JavaScript Vanilla**: Sem dependências externas
- **Font Awesome 6.5.1**: Ícones vetoriais
- **Google Fonts (Manrope)**: Tipografia moderna

## 📁 Estrutura do Projeto

```plaintext
instrutor-carlos/
│
├── index.html                 # Arquivo principal da landing page
│
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos globais e responsivos
│   │
│   ├── js/
│   │   └── script.js         # Lógica JavaScript (tema, menu mobile)
│   │
│   └── images/
│       ├── main-image.jpg         # Imagem hero/propaganda
│       ├── instrutor-carlos.jpg   # Foto do instrutor
│       └── carro.png              # Imagem aba-site
│
│
│
└── README.md                 # Este arquivo
```

## 🚀 Como Usar

### Visualização Local

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em seu navegador
3. A página será carregada com o tema baseado nas preferências do seu sistema operacional

### Desenvolvimento

Para modificar o projeto:

1. **CSS**: Edite `assets/css/style.css`
   - Variáveis de cor estão no topo (`:root`)
   - Media queries estão organizadas por componente

2. **JavaScript**: Edite `assets/js/script.js`
   - Alternância de tema (claro/escuro)
   - Controle do menu mobile
   - Injeção de ano dinâmico no footer

3. **HTML**: Edite `index.html`
   - Conteúdo das seções
   - Links internos e externos

## 📋 Seções da Landing Page

### 1. **Header**

- Logo com ícone
- Navegação desktop (768px+)
- Botão de alternância de tema
- CTA "Falar com o instrutor"
- Menu mobile adaptativo

### 2. **Hero**

- Headline e descrição de valor
- Imagem promocional
- CTAs principais
- Badge com localização

### 3. **Sobre**

- Foto do instrutor
- Descrição de experiência
- Ênfase em 1º habilitação

### 4. **Serviços**

- 6 cards com tipos de aulas:
  - 1º habilitação
  - Retomada da prática
  - Segurança no trânsito urbano
  - Estacionamento e baliza
  - Direção para recém-habilitados
  - Apoio para insegurança ao dirigir

### 5. **Benefícios**

- 6 cards destacando diferenciais:
  - Atendimento individual
  - Orientação passo a passo
  - Treino adaptado
  - Foco em situações práticas
  - Comunicação clara
  - Evolução gradual

### 6. **Como Funciona**

- 4 passos simples para começar
- Numeração visual progressiva

### 7. **FAQ**

- 9 perguntas frequentes
- Elemento `<details>` para expansão/colapso
- Respostas diretas e úteis

### 8. **Footer**

- Logo e branding
- Links para redes sociais
- Crédito ao desenvolvedor
- Ano dinâmico (atualizado automaticamente)

## 🎨 Sistema de Cores

### Modo Claro

- **Fundo**: `#fdfcf0` (bege quente)
- **Texto Primário**: `#1a1a1a` (preto suave)
- **Acentos**: `#f59e0b` (âmbar)
- **Secundário**: `#005f73` (azul-verde)

### Modo Escuro

- **Fundo**: `#0e1524` (azul escuro)
- **Texto Primário**: `#f5f1e8` (bege claro)
- **Acentos**: `#f59e0b` (âmbar - mantido)
- **Secundário**: `#4dd0e1` (azul-ciano)

## 📱 Responsividade

- **Mobile** (< 768px):
  - Menu mobile hambúrguer
  - Layout de coluna única
  - Imagens otimizadas

- **Tablet** (768px - 1023px):
  - Navegação desktop visível
  - Grid 2 colunas para cards
  - Espaçamento otimizado

- **Desktop** (1024px+):
  - Layout completo com 3 colunas
  - Navegação horizontal completa
  - Efeitos hover avançados

## ⚙️ Funcionalidades JavaScript

### Tema Claro/Escuro

```javascript
- Detecta preferência do sistema (prefers-color-scheme)
- Armazena escolha do usuário em localStorage
- Aplica tema antes da renderização (evita "flash")
```

### Menu Mobile

```javascript
- Toggle com clique no botão hambúrguer
- Fecha automaticamente ao clicar em link
- Ícone muda de hambúrguer para X
```

### Footer Dinâmico

```javascript
- Ano no copyright atualiza automaticamente
- Usa data atual do navegador
```

## 🔍 SEO

- Meta tags completas
- Open Graph tags para compartilhamento
- Heading hierarchy estruturada (h1, h2, h3, h4)
- Alt text descritivo em imagens
- URLs amigáveis com hash navigation

## 🐛 Boas Práticas Implementadas

- ✅ Sem estilos inline (CSS separado)
- ✅ Sem bibliotecas externas (apenas Font Awesome e Google Fonts)
- ✅ HTML semântico (nav, section, article, footer)
- ✅ ARIA labels para acessibilidade
- ✅ Lazy loading de imagens
- ✅ Variáveis CSS para manutenção fácil
- ✅ Mobile-first approach
- ✅ Performance otimizada

## 📞 Contato

**WhatsApp**: [5511971101154](https://wa.me/5511971101154)

**Redes Sociais**:

- [Instagram](https://www.instagram.com/instrutoremjundiai_carlos/)
- [Facebook](https://www.facebook.com/people/Aulas-para-Habilitados/100063995201264/)

## 👨‍💻 Desenvolvimento

Desenvolvido por: **[dev.software.web](https://diegofranciscodasilva.github.io/dev-software-web/)**

## 📜 Licença

Este projeto é fornecido como está para fins de apresentação e uso pessoal/comercial do Instrutor Carlos.

---

**Última atualização**: Setembro de 2026

⭐ Se gostou do projeto, deixe uma estrela!
