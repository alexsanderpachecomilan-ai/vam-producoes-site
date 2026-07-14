import { ArrowLeft, ArrowRight, CheckCircle, Play, Quote } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'wouter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getWhatsAppLink } from '@/lib/whatsapp';
import { caseStudies, getCaseStudyBySlug } from '@shared/caseStudies';
import NotFound from './NotFound';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!data) {
    return <NotFound />;
  }

  const index = caseStudies.findIndex((c) => c.slug === data.slug);
  const prev = index > 0 ? caseStudies[index - 1] : undefined;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined;

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  useDocumentMeta({
    title: `${data.client} — Case de Sucesso | VAM Produções`,
    description: data.shortDescription,
    image: origin + data.image,
    url: `${origin}/portfolio/${data.slug}`,
    type: 'article',
  });

  const orcamentoLink = getWhatsAppLink(
    `Olá! Vi o case da ${data.client} no site e gostaria de solicitar um orçamento.`
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <div className="pt-32 md:pt-40">
        <div className="container">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-semibold mb-8">
            <ArrowLeft size={16} />
            Voltar ao Portfólio
          </Link>

          {/* Hero */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{data.client}</h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-accent font-semibold">{data.category}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{data.segment}</span>
              {data.year && (
                <>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{data.year}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Featured media */}
        <div className="container">
          <CaseMedia data={data} />
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto py-12 md:py-16 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">{data.description}</p>
          </div>

          {/* Challenge / Solution / Result */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-t border-border">
            <div>
              <h2 className="text-accent font-bold uppercase text-sm tracking-wide mb-2">Desafio</h2>
              <p className="text-muted-foreground leading-relaxed">{data.challenge}</p>
            </div>
            <div>
              <h2 className="text-accent font-bold uppercase text-sm tracking-wide mb-2">Como a VAM ajudou</h2>
              <p className="text-muted-foreground leading-relaxed">{data.solution}</p>
            </div>
            <div>
              <h2 className="text-accent font-bold uppercase text-sm tracking-wide mb-2">Resultado</h2>
              <p className="text-muted-foreground leading-relaxed">{data.result}</p>
            </div>
          </div>

          {/* Services */}
          <div className="py-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Serviços Realizados</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {data.services.map((service) => (
                <li key={service} className="flex items-center gap-2 text-foreground">
                  <CheckCircle size={18} className="text-accent flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {data.gallery && data.gallery.length > 0 && (
            <div className="py-12 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Galeria</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {data.gallery.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border aspect-video">
                    <img src={src} alt={`${data.client} — imagem ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {data.testimonial && (
            <div className="py-12 border-t border-border">
              <div className="max-w-2xl mx-auto text-center vam-card bg-card rounded-xl border border-border p-8 md:p-12">
                <Quote className="w-10 h-10 text-accent mx-auto mb-4" />
                <p className="text-xl text-foreground leading-relaxed mb-6">"{data.testimonial.quote}"</p>
                <p className="font-bold text-foreground">{data.testimonial.author}</p>
                {data.testimonial.role && <p className="text-sm text-muted-foreground">{data.testimonial.role}</p>}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="py-16 border-t border-border text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quer um resultado <span className="text-accent">como esse</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Cada projeto é único. Vamos conversar sobre o seu.
            </p>
            <a href={orcamentoLink} target="_blank" rel="noopener noreferrer" className="vam-button inline-block">
              Solicitar um Orçamento
            </a>
          </div>

          {/* Prev / Next navigation */}
          <div className="py-8 border-t border-border flex items-center justify-between gap-4">
            {prev ? (
              <Link href={`/portfolio/${prev.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <ArrowLeft size={18} />
                <span className="hidden sm:inline">{prev.client}</span>
                <span className="sm:hidden">Anterior</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/portfolio/${next.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <span className="hidden sm:inline">{next.client}</span>
                <span className="sm:hidden">Próximo</span>
                <ArrowRight size={18} />
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function CaseMedia({ data }: { data: ReturnType<typeof getCaseStudyBySlug> }) {
  const [isPlaying, setIsPlaying] = useState(false);
  if (!data) return null;

  return (
    <div className="relative mx-auto aspect-video max-h-[60vh] bg-black rounded-xl overflow-hidden border border-border">
      {isPlaying && data.youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${data.youtubeId}?autoplay=1`}
          title={`${data.client} — ${data.category}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => data.youtubeId && setIsPlaying(true)}
          className="group absolute inset-0 w-full h-full"
          aria-label={data.youtubeId ? `Assistir case: ${data.client}` : data.client}
        >
          <img
            src={data.image}
            alt={data.client}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {data.youtubeId && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={30} className="text-accent-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          )}
        </button>
      )}
    </div>
  );
}
