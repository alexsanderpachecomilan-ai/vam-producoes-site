# VAM Produções - Estratégia de Design

## Referência de Marca
- **Logo:** Círculo preto com símbolo de câmera/lente em dourado
- **Cores Principais:** Preto (#000000) e Dourado (#D4AF37)
- **Posicionamento:** Soluções audiovisuais estratégicas para educação e comunicação

---

## Três Abordagens de Design

### 1. **Premium Minimalist** (Probabilidade: 0.08)
Foco em elegância através da simplicidade. Muito espaço em branco, tipografia sofisticada, detalhes em dourado. Transmite exclusividade e profissionalismo.

### 2. **Bold & Dynamic** (Probabilidade: 0.07)
Design vibrante com movimento. Gradientes sutis, animações fluidas, layouts assimétricos. Comunica inovação e energia.

### 3. **Sophisticated Storytelling** (Probabilidade: 0.06)
Narrativa visual forte através de imagens de alta qualidade, tipografia expressiva e hierarquia clara. Foca em contar a história de transformação através do audiovisual.

---

## Abordagem Escolhida: **Sophisticated Storytelling**

### Design Movement
Modernismo corporativo com influências de cinema e fotografia profissional. Inspirado em estúdios de produção de topo mundial.

### Core Principles
1. **Narrativa Visual:** Cada seção conta uma história através de imagens de impacto e copywriting estratégico
2. **Hierarquia Clara:** Tipografia e espaçamento guiam o olhar do visitante através de uma jornada lógica
3. **Sofisticação Contida:** Elegância através de restrição—sem excessos, apenas o essencial bem executado
4. **Autoridade Audiovisual:** Design que demonstra expertise em produção de vídeo

### Color Philosophy
- **Preto (#1a1a1a):** Fundo principal, transmite profissionalismo e foco
- **Dourado (#D4AF37):** Acentos estratégicos, destaca CTAs e elementos-chave, evoca qualidade premium
- **Branco/Off-white (#f5f5f5):** Espaço respirável, contraste legível
- **Cinza Escuro (#4a4a4a):** Texto secundário, subtileza

**Intenção Emocional:** Confiança, sofisticação, expertise. O visitante sente que está em boas mãos.

### Layout Paradigm
- **Hero Assimétrico:** Imagem de produção em alta qualidade + copywriting à esquerda/direita
- **Seções Alternadas:** Imagem-Texto-Imagem para manter ritmo visual
- **Grid Flexível:** Não centrado; usa espaço negativo estrategicamente
- **Full-width Sections:** Cada seção respira independentemente

### Signature Elements
1. **Divider de Câmera:** Linha sutil com ícone de câmera entre seções
2. **Gradient Overlay:** Sobreposição de gradiente preto/dourado em imagens para legibilidade de texto
3. **Tipografia em Camadas:** Títulos em peso bold, subtítulos em weight médio, corpo em regular

### Interaction Philosophy
- **Hover States Sutis:** Elementos respondem com mudança de cor dourada ou leve elevação
- **Scroll Animations:** Imagens entram suavemente enquanto o usuário faz scroll
- **CTA Magnética:** Botões em dourado com efeito de foco que atrai atenção

### Animation Guidelines
- **Entrance:** Fade-in + slide suave (300ms) para imagens e cards
- **Hover:** Mudança de cor dourada (150ms) em links e botões
- **Scroll:** Parallax suave em imagens hero (não excessivo)
- **Transições:** Todas as mudanças de estado em 200-300ms, ease-out

### Typography System
- **Display:** Playfair Display (Bold, 48-64px) para títulos principais
- **Heading:** Inter (Bold, 28-36px) para subtítulos
- **Body:** Inter (Regular/Medium, 16-18px) para texto corrido
- **Small:** Inter (Regular, 14px) para labels e metadata

**Hierarquia:** Títulos em peso bold criam estrutura; corpo em regular garante legibilidade.

### Brand Essence
**Posicionamento:** "A solução audiovisual que transforma educação e comunicação em experiências memoráveis."

**Personalidade:** Confiante, Inovador, Acessível.

### Brand Voice
- **Headlines:** Diretas, focadas em benefício. Ex: "Sua Mensagem Merece Ser Vista" (não "Welcome to VAM")
- **CTAs:** Ação clara e convidativa. Ex: "Vamos Criar Sua Solução" (não "Get Started")
- **Microcopy:** Tom consultivo, não genérico. Ex: "Cada projeto é único. Vamos conversar sobre o seu."

### Wordmark & Logo
- **Marca:** Círculo preto com símbolo de câmera/lente em dourado (fornecido pelo usuário)
- **Uso:** Header fixo, favicon, rodapé
- **Tamanho:** Visível e claro em todos os contextos

### Signature Brand Color
**Dourado (#D4AF37)** — Cor proprietária que aparece em CTAs, acentos, hover states e dividers. Imediatamente reconhecível como VAM.

---

## Decisões de Implementação

### Fontes
- Google Fonts: Playfair Display (display) + Inter (body)
- Fallback: Georgia + -apple-system, BlinkMacSystemFont

### Paleta Expandida
| Uso | Cor | Hex |
|-----|-----|-----|
| Fundo Principal | Preto | #1a1a1a |
| Texto Principal | Off-white | #f5f5f5 |
| Acentos | Dourado | #D4AF37 |
| Texto Secundário | Cinza | #4a4a4a |
| Borders | Cinza Escuro | #2a2a2a |
| Hover (CTA) | Dourado Claro | #e8c547 |

### Espaçamento
- Base: 8px
- Seções: 80-120px (vertical)
- Cards: 24-32px (padding interno)

### Breakpoints
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px+

---

## Seções do Site

1. **Header/Nav:** Logo + Menu (Serviços, Sobre, Contato) com hover em dourado
2. **Hero:** Imagem de produção em full-width + copywriting assimétrico
3. **Serviços:** 3 cards com ícones: Vídeo Aulas | Transmissões | Consultoria
4. **Portfólio/Casos:** Grid de projetos com hover reveal
5. **Sobre:** Texto + imagem, reforçando expertise
6. **CTA Final:** "Vamos Conversar?" com formulário ou link de contato
7. **Footer:** Links, redes sociais, copyright

---

## Próximos Passos
1. Gerar imagens de alta qualidade para hero e seções
2. Implementar componentes React com Tailwind
3. Adicionar animações e interações
4. Testar responsividade em mobile/tablet/desktop
