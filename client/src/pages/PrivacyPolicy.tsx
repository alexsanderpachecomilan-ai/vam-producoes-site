import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <article className="vam-section pt-32 md:pt-40">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Política de <span className="text-accent">Privacidade</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Última atualização: 10 de julho de 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Introdução</h2>
              <p>
                A VAM Produções ("nós") respeita a privacidade de quem visita este site e leva a sério a
                proteção de dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais
                (Lei nº 13.709/2018 — LGPD). Esta política explica quais dados coletamos, para que os
                usamos, com quem compartilhamos e quais são os seus direitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Quem é o controlador dos dados</h2>
              <p>
                VAM Produções, com atuação em São Paulo, SP.
                <br />
                Contato: <a href="mailto:producoesvam@gmail.com" className="text-accent hover:underline">producoesvam@gmail.com</a> · (11) 98730-4510
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Quais dados coletamos</h2>
              <p className="mb-3">
                Coletamos dados pessoais apenas quando você preenche voluntariamente o formulário de
                contato do site, informando:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nome</li>
                <li>E-mail</li>
                <li>Assunto (opcional)</li>
                <li>Mensagem</li>
              </ul>
              <p className="mt-3">
                Não coletamos automaticamente dados de navegação, não usamos cookies de rastreamento e
                não fazemos login ou cadastro de usuários neste site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Para que usamos seus dados</h2>
              <p className="mb-3">Usamos os dados exclusivamente para:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Responder à sua solicitação de contato ou orçamento</li>
                <li>Manter um histórico da conversa, quando necessário para dar continuidade ao atendimento</li>
              </ul>
              <p className="mt-3">
                Não usamos seus dados para enviar publicidade não solicitada, e não vendemos ou alugamos
                dados a terceiros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Base legal</h2>
              <p>
                O tratamento se baseia no seu consentimento (art. 7º, I, da LGPD), fornecido no momento em
                que você preenche e envia o formulário de contato, e no legítimo interesse (art. 7º, IX) de
                responder a um contato espontaneamente iniciado por você.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Compartilhamento com terceiros</h2>
              <p className="mb-3">
                Para processar o envio do formulário de contato, usamos o serviço Web3Forms, que recebe os
                dados preenchidos e os encaminha por e-mail para producoesvam@gmail.com. O site também
                carrega fontes do Google Fonts e imagens hospedadas em serviços de CDN, o que pode expor seu
                endereço IP a esses provedores durante o carregamento da página — prática comum na grande
                maioria dos sites.
              </p>
              <p>Não compartilhamos seus dados com outras empresas para fins de marketing.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Por quanto tempo guardamos os dados</h2>
              <p>
                As mensagens recebidas ficam armazenadas na caixa de e-mail do responsável pelo site enquanto
                forem necessárias para o atendimento, ou até que você solicite a exclusão.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Seus direitos</h2>
              <p className="mb-3">De acordo com o art. 18 da LGPD, você pode, a qualquer momento, solicitar:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confirmação de que tratamos seus dados</li>
                <li>Acesso aos dados</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados tratados com base no consentimento</li>
                <li>Informação sobre com quem compartilhamos seus dados</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail{' '}
                <a href="mailto:producoesvam@gmail.com" className="text-accent hover:underline">producoesvam@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Segurança</h2>
              <p>
                Adotamos medidas razoáveis para proteger os dados que recebemos contra acesso não
                autorizado, perda ou uso indevido. Nenhum sistema é 100% seguro, mas nos comprometemos a
                agir rapidamente em caso de incidente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Cookies</h2>
              <p className="mb-3">
                Este site não utiliza cookies de rastreamento ou publicidade no momento. Não realizamos
                análise de comportamento de navegação nem compartilhamos dados com redes de anúncios.
              </p>
              <p>
                Guardamos apenas a sua escolha no banner de cookies (aceitar ou rejeitar) no armazenamento
                local do seu navegador, para não exibir o aviso novamente a cada visita. Você pode alterar
                essa escolha a qualquer momento pelo link "Preferências de Cookies" no rodapé do site. Caso
                no futuro passemos a usar ferramentas de análise (como Google Analytics), esta política será
                atualizada e o consentimento será solicitado novamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">11. Alterações nesta política</h2>
              <p>
                Podemos atualizar esta política periodicamente. A data da última atualização estará sempre
                indicada no topo desta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">12. Contato</h2>
              <p>
                Dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados podem ser
                enviadas para{' '}
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
