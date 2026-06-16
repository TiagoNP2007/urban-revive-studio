## Urban Repair — Site Premium Redesign

Reconstrução total do site urbanrepair.pt mantendo a essência (empresa de construção civil, remodelações e impermeabilizações em Mem Martins) mas com estrutura muito mais ampla, conteúdo profundo, e visual de topo. Idioma principal: **Português (PT-PT)**.

### Identidade Visual
- **Logo**: pentágono colorido fornecido (mantido como acento de cor da marca, único elemento vibrante no site).
- **Paleta clean**: preto profundo (#0A0A0A), grafite (#141414), cinzentos (#1F1F1F, #2A2A2A, #6B6B6B, #A8A8A8), off-white (#F5F5F5), branco puro. O arco-íris do logo aparece em pequenos detalhes (linhas finas, hover states, gradient sutil em CTAs) para coerência sem poluir.
- **Tipografia**: display serif moderna (Instrument Serif) para headlines editoriais + sans geométrica (Inter Tight ou Space Grotesk) para corpo — sensação de estúdio de arquitetura premium.
- **Estética**: editorial / arquitetónica, generoso whitespace, grids assimétricos, micro-animações Motion subtis (fade-up, parallax leve, hover reveals), bordas finas 1px cinzento, números grandes para stats.

### Estrutura de Rotas (TanStack Start)
```
/                  Home
/sobre             Sobre a empresa, história, valores, equipa
/servicos          Hub de serviços (lista completa)
/servicos/$slug    Página detalhada por serviço (8+ páginas)
/projetos          Portfolio com filtros por categoria
/projetos/$slug    Caso de estudo individual
/processo          Como trabalhamos (metodologia 5 passos)
/orcamento         Formulário de pedido de orçamento detalhado
/faq               Perguntas frequentes
/contactos         Contactos, mapa, horário, formulário
```

Cada rota tem `head()` próprio (title, description, og:title, og:description, og:image) único.

### Home (longa, secções)
1. **Hero** — headline editorial grande ("Construímos, restauramos, protegemos."), sub-copy, dois CTAs (Pedir orçamento / Ver projetos), logo pentágono em destaque com leve rotação no scroll.
2. **Strip de credenciais** — anos de experiência, projetos concluídos, % clientes satisfeitos, alvará.
3. **Serviços em bento grid** — 6 cartões assimétricos (Impermeabilizações, Remodelações, Canalizações, Eletricidade, Revestimentos, Pinturas).
4. **Projeto em destaque** — full-bleed com texto sobreposto.
5. **Processo 5 passos** — timeline horizontal numerada.
6. **Galeria de projetos** — grid masonry com 8-10 trabalhos.
7. **Testemunhos** — 3-4 cartões com aspas grandes.
8. **Áreas servidas** — Sintra, Mem Martins, Cascais, Oeiras, Lisboa, etc.
9. **CTA final** — bloco escuro com formulário rápido de contacto.
10. **Footer** — sitemap, contactos, redes, alvará/NIF.

### Serviços (hub + 8 páginas detalhadas)
Cada serviço com: hero próprio, descrição longa, materiais/técnicas usadas, casos típicos, FAQ específica, CTA orçamento. Lista:
- Impermeabilizações & Isolamentos (fachadas, telhados, terraços)
- Remodelações Interiores
- Remodelações Exteriores & Fachadas
- Canalizações
- Eletricidade
- Revestimentos (mosaico, azulejo, parquet flutuante)
- Afagamento & Envernizamento
- Construção Civil Geral

### Projetos
Grid com filtros (Impermeabilização, Pintura, Remodelação, Isolamento, Reboco, Estuque). 10-12 casos de estudo com galeria, descrição do desafio, solução, duração.

### Sobre
História da empresa, missão/visão/valores, equipa (cards), certificações, zonas de atuação, números.

### Processo
5 etapas detalhadas: Contacto → Visita técnica → Orçamento → Execução → Garantia.

### Orçamento
Formulário multi-step (tipo de serviço, dimensões/contexto, prazo, contactos) com validação.

### FAQ
Accordion com 12-15 perguntas (prazos, garantias, materiais, pagamento, zona, vistorias).

### Contactos
- Morada: Rua João XXIII Nº39, Casais de Mem Martins, 2725-070 Mem Martins
- Tel: 968 757 393
- Email: urbanrepair.geral@gmail.com
- Mapa embed, horário, formulário, redes sociais.

### Detalhes Técnicos
- TanStack Start + TanStack Router (file-based em `src/routes/`).
- Tailwind v4 tokens em `src/styles.css` (paleta + fontes via `<link>` em `__root.tsx`).
- Motion (framer-motion) para animações.
- Logo importado como asset (`src/assets/logo.png`) via lovable-assets.
- Imagens de projetos: placeholders gerados (`data-lov-image-placeholder`) com prompts realistas de obras de construção/remodelação portuguesas (estilo fotográfico documental, luz natural), depois substituídos por imagens geradas.
- SEO completo por rota + JSON-LD LocalBusiness na home.
- Sem backend nesta fase: formulários com validação client-side e estado de sucesso (mailto fallback). Lovable Cloud pode ser adicionado depois se quiser receção real de leads.
- Acessibilidade: H1 único por página, alt text, contraste AA, focus visible.

### O que fica fora desta fase
- Backend real para guardar pedidos de orçamento (pode-se adicionar Lovable Cloud depois).
- Sistema de blog/CMS.
- Multi-idioma (só PT).

Confirma e avanço para a implementação.