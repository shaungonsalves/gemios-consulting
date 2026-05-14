import { portfolioFeatured } from '../content/portfolio';
import { portfolioSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';

export function PortfolioSection() {
  return (
    <Section
      id={portfolioSection.id}
      title={portfolioSection.title}
      description={portfolioSection.description}
    >
      <article className="max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-gemios-accent">
          {portfolioFeatured.kicker}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-gemios-navy">{portfolioFeatured.roleTitle}</h3>
        <p className="mt-1 text-sm text-slate-600">
          <span className="font-medium text-slate-800">{portfolioFeatured.clientName}</span>
          {' — '}
          {portfolioFeatured.attribution}
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{portfolioFeatured.summary}</p>
      </article>
    </Section>
  );
}
