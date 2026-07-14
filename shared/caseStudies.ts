export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface CaseStudyData {
  slug: string;
  client: string;
  category: string;
  segment: string;
  year?: string;
  shortDescription: string;
  description: string;
  image: string;
  youtubeId?: string;
  gallery?: string[];
  testimonial?: Testimonial;
  challenge: string;
  solution: string;
  result: string;
  services: string[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "faster",
    client: "Faster",
    category: "Vídeo Institucional",
    segment: "Indústria · Monitoramento Ambiental",
    year: "2025",
    shortDescription: "Série de vídeos institucionais e tutoriais técnicos para equipamentos de monitoramento ambiental.",
    description:
      "A Faster é referência em equipamentos de monitoramento ambiental e segurança do trabalho. A VAM produziu uma série de vídeos institucionais e tutoriais técnicos para apresentar bombas de amostragem, calibradores e kits de baixa vazão de forma clara para técnicos e clientes.",
    image: "/portfolio/faster-logo.png",
    youtubeId: "v0_mBen2Kr4",
    challenge:
      "A Faster precisava apresentar equipamentos técnicos complexos — bombas de amostragem de ar, calibradores e kits de baixa vazão — de forma clara para técnicos e clientes que nem sempre têm contato direto com o fabricante, reduzindo dúvidas recorrentes no suporte.",
    solution:
      "A VAM desenvolveu uma série de vídeos institucionais e tutoriais em estúdio, com roteiro técnico revisado junto à equipe da Faster, demonstrações práticas passo a passo dos equipamentos e identidade visual padronizada (vinhetas, tipografia e cores da marca) em todos os vídeos.",
    result:
      "Uma biblioteca de vídeos técnicos profissionais usada para treinar equipes e orientar clientes, reforçando a autoridade da marca no mercado de monitoramento ambiental e reduzindo a dependência de suporte reativo.",
    services: ["Produção Audiovisual", "Direção", "Captação em Estúdio", "Roteiro Técnico", "Edição", "Motion Graphics", "Finalização"],
  },
  {
    slug: "plataforma-educacao-online",
    client: "Plataforma de Educação Online",
    category: "Vídeo Aula",
    segment: "Educação",
    shortDescription: "Gravação de vídeo aulas em chroma key com identidade visual consistente para uma plataforma de ensino.",
    description:
      "Projeto de gravação de vídeo aulas em chroma key para uma plataforma de ensino online, com apresentador fixo e cenário substituído digitalmente para manter a identidade visual da instituição em todo o conteúdo.",
    image: "/portfolio/producao-videoaula-1.jpg",
    gallery: ["/portfolio/producao-videoaula-1.jpg", "/portfolio/producao-videoaula-2.jpg"],
    challenge:
      "A instituição precisava produzir vídeo aulas com apresentador fixo em chroma key, mantendo qualidade visual profissional e permitindo trocar o cenário por elementos gráficos da própria marca.",
    solution:
      "A VAM estruturou a captação com fundo verde, iluminação e enquadramento padronizados, cuidando da direção durante a gravação para garantir fluidez na apresentação e facilitar a composição do cenário na pós-produção.",
    result:
      "Conteúdo educacional com aparência profissional e identidade visual consistente, pronto para distribuição na plataforma da instituição.",
    services: ["Produção Audiovisual", "Captação em Chroma Key", "Direção", "Composição de Cenário", "Edição", "Finalização"],
  },
  {
    slug: "estudio-proprio",
    client: "Estúdio Próprio VAM",
    category: "Infraestrutura de Estúdio",
    segment: "Instituições e Empresas",
    shortDescription: "Estúdio equipado em São Paulo para qualquer tipo de gravação — e também levamos essa estrutura até a sua instituição, em operação permanente por assinatura mensal.",
    description:
      "Nosso estúdio próprio em São Paulo reúne toda a estrutura necessária para gravações profissionais: chroma key, iluminação, múltiplas câmeras e áudio de estúdio. Para instituições que precisam gravar com frequência, também levamos essa estrutura até o seu espaço, com equipe e equipamentos operando no local em regime de assinatura mensal.",
    image: "/portfolio/estudio-vam-1.jpg",
    gallery: ["/portfolio/estudio-vam-1.jpg", "/portfolio/estudio-vam-2.jpg"],
    challenge:
      "Muitas instituições precisam gravar vídeo aulas, treinamentos e comunicados com frequência, mas nem sempre faz sentido deslocar equipe até um estúdio externo toda semana, nem investir na montagem e manutenção de um estúdio próprio.",
    solution:
      "A VAM oferece dois formatos de operação: gravações no nosso estúdio equipado em São Paulo, ou a instalação de uma operação permanente dentro da própria instituição, com equipe e equipamentos da VAM disponíveis por assinatura mensal — sem a instituição precisar montar sua própria estrutura.",
    result:
      "Acesso constante a gravações com qualidade profissional, com custo mensal previsível, sem depender de agendamentos externos ou investimento em equipamentos próprios.",
    services: ["Estúdio com Chroma Key", "Iluminação Profissional", "Múltiplas Câmeras", "Operação In-loco por Assinatura", "Direção", "Edição", "Finalização"],
  },
  {
    slug: "clipp",
    client: "Clipp Clínica de Psicanálise",
    category: "Transmissão Híbrida",
    segment: "Saúde Mental · Educação",
    shortDescription: "Estrutura fixa de estúdio para transmissão de aulas ao vivo em modelo híbrido (presencial e online), com operação mensal por assinatura.",
    description:
      "Para a Clipp, a VAM montou uma estrutura permanente de transmissão para aulas no modelo híbrido — parte da turma presencial, parte assistindo ao vivo pela internet. Com câmeras, áudio, iluminação e vinheta com cronômetro e gerador de caracteres (GC) em tela, a operação roda por assinatura mensal, com a VAM responsável por manter o local e disponibilizar operadores em cada transmissão.",
    image: "/portfolio/estudio-vam-2.jpg",
    challenge:
      "A Clipp precisava transmitir aulas ao vivo para alunos remotos, mantendo a mesma qualidade da experiência presencial — com identidade visual profissional (vinheta, cronômetro, informações em tela) e sem ter que montar e operar uma equipe técnica própria a cada aula.",
    solution:
      "A VAM projetou e instalou uma estrutura fixa de câmeras, áudio e iluminação no local da Clipp, criou a vinheta de abertura com cronômetro e gerador de caracteres (GC) para informações em tela, e assumiu a operação da transmissão híbrida por assinatura mensal, com equipe própria disponível em cada aula.",
    result:
      "Aulas transmitidas ao vivo com qualidade broadcast, tanto para quem está na sala quanto para quem assiste online, com custo previsível e sem a Clipp precisar manter equipe técnica interna.",
    services: ["Transmissão ao Vivo", "Modelo Híbrido", "Montagem de Estúdio", "Motion Graphics (Vinheta e GC)", "Operação por Assinatura", "Áudio e Iluminação"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
