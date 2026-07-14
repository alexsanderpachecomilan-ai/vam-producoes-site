export default function Clients() {
  const clients = [
    { name: 'Amedí', category: 'Saúde' },
    { name: 'Faster', category: 'Tecnologia' },
    { name: 'Vinteo', category: 'Audiovisual' },
    { name: 'Clipp Clínica de Psicanálise', category: 'Saúde Mental' },
  ];

  const teamExperience = [
    { company: 'Afya', role: 'Educação Médica' },
    { company: 'Kroton', role: 'Conteúdo Educativo' },
    { company: 'Prefeitura de São Paulo', role: 'Comunicação' },
    { company: 'Sony', role: 'Produção de Vídeo' },
  ];

  return (
    <section className="vam-section bg-secondary/30">
      <div className="container">
        {/* Clientes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Empresas que <span className="text-accent">Confiam</span> em Nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temos o privilégio de trabalhar com empresas líderes em seus segmentos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="vam-card p-6 bg-card rounded-xl border border-border text-center"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-accent font-semibold">
                  {client.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência da Equipe */}
        <div className="border-t border-border pt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experiência da <span className="text-accent">Equipe</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos profissionais têm trajetória em grandes empresas e projetos de impacto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamExperience.map((exp, index) => (
              <div
                key={index}
                className="vam-card p-8 bg-card rounded-xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-lg">★</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground">
                      {exp.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
