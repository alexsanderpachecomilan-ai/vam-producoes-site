import { Play } from 'lucide-react';
import { Link } from 'wouter';
import type { CaseStudyData } from '@shared/caseStudies';

export default function PortfolioPreviewCard({ data }: { data: CaseStudyData }) {
  return (
    <Link
      href={`/portfolio/${data.slug}`}
      className="vam-card group block relative overflow-hidden rounded-xl border border-border hover:border-accent bg-card"
    >
      <div className="relative aspect-video">
        <img
          src={data.image}
          alt={data.client}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {data.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={22} className="text-accent-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">{data.category}</span>
        <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{data.client}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{data.shortDescription}</p>
      </div>
    </Link>
  );
}
