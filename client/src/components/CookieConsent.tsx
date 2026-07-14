import { Cookie } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function CookieConsent() {
  const { isBannerOpen, accept, reject } = useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-secondary/95 backdrop-blur-sm border-t border-border">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Usamos cookies apenas para funções essenciais do site. Não usamos cookies de
              rastreamento ou publicidade no momento. Saiba mais na nossa{' '}
              <a href="/politica-de-privacidade" className="text-accent hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={reject}
              className="px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors"
            >
              Rejeitar
            </button>
            <button onClick={accept} className="vam-button text-sm py-2.5">
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
