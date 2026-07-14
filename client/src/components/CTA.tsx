import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error('Formulário ainda não configurado. Envie um email para producoesvam@gmail.com.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site: ${form.subject || 'Sem assunto'}`,
          from_name: 'Site VAM Produções',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Mensagem enviada! Vamos responder em breve.');
        setForm({ name: '', email: '', subject: '', message: '' });
        setConsent(false);
      } else {
        toast.error('Não foi possível enviar. Tente novamente ou use o email/telefone ao lado.');
      }
    } catch {
      toast.error('Não foi possível enviar. Tente novamente ou use o email/telefone ao lado.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="vam-section bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Vamos <span className="text-accent">Conversar</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada projeto começa com uma conversa. Conte-nos sobre sua ideia e vamos criar uma solução perfeita para você.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="vam-card text-center p-8 bg-card rounded-xl border border-border hover:border-accent">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:producoesvam@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                producoesvam@gmail.com
              </a>
            </div>
            <div className="vam-card text-center p-8 bg-card rounded-xl border border-border hover:border-accent">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Telefone</h3>
              <a href="tel:11987304510" className="text-muted-foreground hover:text-accent transition-colors">
                (11) 98730-4510
              </a>
            </div>
            <div className="vam-card text-center p-8 bg-card rounded-xl border border-border hover:border-accent">
              <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground">São Paulo, SP</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-foreground font-semibold mb-2">
                  Seu Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="João Silva"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground font-semibold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-foreground font-semibold mb-2">
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="Produção de vídeo aula"
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-foreground font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre seu projeto..."
                rows={5}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <div className="mb-6 flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 accent-accent shrink-0"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                Li e concordo com a{' '}
                <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Política de Privacidade
                </a>{' '}
                e autorizo o uso dos meus dados para que a VAM Produções entre em contato comigo.
              </label>
            </div>

            <button type="submit" disabled={isSubmitting || !consent} className="vam-button w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
