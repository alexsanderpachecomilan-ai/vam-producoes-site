import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' },
  ];

  const orcamentoLink = getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para produção audiovisual.');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/vam-logo-icon-Apprpda2vVBh562toGU7MV.webp"
              alt="VAM Produções"
              className="w-10 h-10"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-xl font-bold text-foreground">VAM</span>
              <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">
                Soluções Audiovisuais
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={orcamentoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="vam-button"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <a
                href={orcamentoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="vam-button w-full block text-center"
              >
                Orçamento
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
