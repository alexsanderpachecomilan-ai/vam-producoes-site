import { Video, Radio, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Produção de Vídeo Aulas',
      description: 'Transformamos seu conhecimento em conteúdo visual envolvente. Desde roteiro até pós-produção, garantimos qualidade profissional.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/online-learning-oB43igiC9b7CCs2QPqfWDp.webp',
    },
    {
      icon: Radio,
      title: 'Transmissão ao Vivo',
      description: 'Eventos, aulas e conferências transmitidas com qualidade broadcast. Infraestrutura completa e suporte técnico em tempo real.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/live-streaming-K45Rb7qMvnf5e29aYBvaZt.webp',
    },
    {
      icon: Lightbulb,
      title: 'Consultoria Audiovisual',
      description: 'Soluções personalizadas para seus desafios. Estratégia, produção e distribuição de conteúdo adaptados ao seu negócio.',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/editing-suite-WZVeBEY56HEY8pu8XVFfZp.webp',
    },
  ];

  return (
    <section id="services" className="vam-section bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas <span className="text-accent">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada projeto é único. Oferecemos soluções audiovisuais estratégicas que transformam sua comunicação.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="vam-card group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <a
                      href="#contact"
                      className="inline-flex items-center text-accent font-semibold hover:gap-2 transition-all gap-1"
                    >
                      Saiba Mais
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
