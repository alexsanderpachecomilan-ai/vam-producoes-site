import { Mail, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function Footer() {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/vam-logo-icon-Apprpda2vVBh562toGU7MV.webp"
                alt="VAM Produções"
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-foreground">VAM Produções</span>
            </div>
            <p className="text-muted-foreground">
              Transformando ideias em experiências audiovisuais memoráveis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Vídeo Aulas
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Transmissão ao Vivo
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors">
                  Consultoria Audiovisual
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-accent" />
                <a href="mailto:producoesvam@gmail.com" className="hover:text-accent transition-colors">
                  producoesvam@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <a href="tel:11987304510" className="hover:text-accent transition-colors">
                  (11) 98730-4510
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-center">
            <p className="text-muted-foreground">
              &copy; 2024 VAM Produções. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <a href="/politica-de-privacidade" className="text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="text-muted-foreground hover:text-accent transition-colors">
                Termos de Uso
              </a>
              <button onClick={openPreferences} className="text-muted-foreground hover:text-accent transition-colors">
                Preferências de Cookies
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
