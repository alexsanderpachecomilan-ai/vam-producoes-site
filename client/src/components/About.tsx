import { CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    'Equipe especializada em produção audiovisual',
    'Tecnologia de ponta e equipamentos profissionais',
    'Projetos entregues no prazo e dentro do orçamento',
    'Suporte técnico dedicado 24/7',
  ];

  return (
    <section id="about" className="vam-section bg-secondary/30">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl" />
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/hero-production-NFE2MTWMMjj6u2dSyjKfyn.webp"
              alt="Sobre VAM Produções"
              className="relative w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quem Somos <span className="text-accent">Nós</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              A VAM Produções nasceu da paixão por transformar ideias em experiências audiovisuais memoráveis. Com mais de uma década de experiência, nos tornamos referência em produção de conteúdo educativo e soluções audiovisuais personalizadas.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Acreditamos que cada projeto é único e merece uma abordagem estratégica. Nosso time trabalha em conjunto com você para entender seus objetivos e criar soluções que realmente funcionam.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#portfolio" className="vam-button inline-block">
                Conheça Nossos Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
