import { Building2, HeartPulse } from 'lucide-react';
import { caseStudies } from '@shared/caseStudies';
import PortfolioPreviewCard from './PortfolioPreviewCard';

const partners = [
  {
    icon: HeartPulse,
    name: 'Amedí',
    description: 'Já editamos mais de 600 peças de conteúdo para redes sociais de 10 profissionais de saúde parceiros da plataforma.',
    tag: 'Edição de Vídeo · Redes Sociais',
  },
  {
    icon: Building2,
    name: 'Vinteo',
    description: 'Edição de vídeos e conteúdo para redes sociais de empresas parceiras da plataforma, em segmentos como gastronomia, contabilidade e imobiliário.',
    tag: 'Edição de Vídeo',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="vam-section bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nosso <span className="text-accent">Portfólio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produzimos todo tipo de vídeo — em estúdio ou externo, ao vivo ou editado. Confira alguns cases de sucesso.
          </p>
        </div>

        {/* Case Study Previews */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {caseStudies.map((data) => (
            <PortfolioPreviewCard key={data.slug} data={data} />
          ))}
        </div>

        {/* Partners / Aggregate work */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="vam-card p-8 bg-card rounded-xl border border-border hover:border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={26} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{partner.name}</h3>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                      {partner.tag}
                    </span>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Também produzimos transmissões ao vivo e vídeos com Inteligência Artificial (avatares realistas ou animados). Quer ver mais exemplos?{' '}
          <a href="#contact" className="text-accent font-semibold hover:underline">
            Fale com a gente
          </a>
          .
        </p>
      </div>
    </section>
  );
}
