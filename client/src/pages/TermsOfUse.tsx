import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="vam-section pt-32 md:pt-40">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Termos de <span className="text-accent">Uso</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Última atualização: 10 de julho de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Aceitação dos termos</h2>
              <p>
                Ao acessar este site, você concorda com estes Termos de Uso. Se não concordar, recomendamos
                que não utilize o site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Sobre o site</h2>
              <p>
                Este site tem finalidade institucional e comercial, apresentando os serviços de produção
                audiovisual da VAM Produções: vídeo aulas, transmissões ao vivo, gravação para marketing,
                produção de vídeos com Inteligência Artificial e edição de vídeo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Propriedade intelectual</h2>
              <p>
                Todo o conteúdo deste site — textos, imagens, vídeos, logotipo e identidade visual — pertence
                à VAM Produções ou é utilizado com autorização, sendo protegido por leis de direitos
                autorais e propriedade industrial. É proibida a reprodução, distribuição ou uso comercial do
                conteúdo sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Uso permitido</h2>
              <p>
                Você pode navegar livremente pelo site para conhecer nossos serviços e entrar em contato. É
                proibido usar o site para fins ilícitos, tentar acessar áreas restritas, ou comprometer a
                segurança e o funcionamento do site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Formulário de contato e WhatsApp</h2>
              <p>
                Ao enviar uma mensagem pelo formulário de contato ou pelo WhatsApp, você concorda com o
                tratamento dos seus dados conforme descrito em nossa{' '}
                <a href="/politica-de-privacidade" className="text-accent hover:underline">Política de Privacidade</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Limitação de responsabilidade</h2>
              <p>
                As informações deste site são fornecidas "como estão", com o objetivo de apresentar nossos
                serviços. Fazemos o possível para mantê-las atualizadas e corretas, mas não garantimos
                ausência total de erros. Orçamentos, prazos e condições comerciais são sempre confirmados
                diretamente com nossa equipe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Links externos</h2>
              <p>
                O site pode conter links para redes sociais ou serviços de terceiros (como WhatsApp e
                Instagram). Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses
                serviços externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Alterações</h2>
              <p>
                Podemos alterar estes Termos de Uso a qualquer momento, sendo a versão vigente sempre a
                publicada nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Legislação aplicável</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
                comarca de São Paulo, SP, para dirimir eventuais controvérsias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contato</h2>
              <p>
                Dúvidas sobre estes Termos podem ser enviadas para{' '}
                <a href="mailto:producoesvam@gmail.com" className="text-accent hover:underline">producoesvam@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
