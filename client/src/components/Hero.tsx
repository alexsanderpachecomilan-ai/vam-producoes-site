import { ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Hero() {
  const conversarLink = getWhatsAppLink('Olá! Gostaria de conversar sobre um projeto audiovisual.');

  return (
    <section className="relative w-full h-screen mt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028340459/AvSpzQo3LNHrcMpLRFU5Tf/hero-production-NFE2MTWMMjj6u2dSyjKfyn.webp"
          alt="Produção Audiovisual Premium"
          className="w-full h-full object-cover"
        />
        <div className="vam-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative h-full container flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sua Mensagem Merece Ser <span className="text-accent">Vista</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Transformamos ideias em experiências audiovisuais memoráveis. Produção de vídeo aulas, transmissões ao vivo e soluções personalizadas para sua marca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={conversarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="vam-button flex items-center justify-center gap-2 group"
            >
              Vamos Conversar
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="vam-button-outline text-center">
              Ver Portfólio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
