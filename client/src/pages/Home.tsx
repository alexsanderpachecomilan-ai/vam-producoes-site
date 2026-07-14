import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

/**
 * VAM Produções - Página Principal
 *
 * Design: Sophisticated Storytelling
 * - Preto sofisticado com acentos em dourado
 * - Tipografia: Playfair Display (títulos) + Inter (corpo)
 * - Layout assimétrico que conta a história da marca
 * - Animações suaves e hover states em dourado
 */
export default function Home() {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  useDocumentMeta({
    title: 'VAM Produções - Soluções Audiovisuais',
    description: 'Produção de vídeo aulas, transmissões ao vivo, gravação para marketing, vídeos com Inteligência Artificial e edição de vídeo. Conheça nossos cases de sucesso.',
    image: `${origin}/portfolio/faster-logo.png`,
    url: origin,
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}
