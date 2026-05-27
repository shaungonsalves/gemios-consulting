import { cta } from '../content/cta';
import { site } from '../content/site';
import { Container } from '../components/Container';
import { ButtonLink } from '../components/ButtonLink';
import { mailtoHref } from '../lib/mailto';

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-gemios-accent/20 bg-gradient-to-b from-gemios-navy to-[#071526] text-slate-100"
    >
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gemios-accent">
              {site.companyName}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {site.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 font-sans">{site.subheadline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 font-sans">
              {site.founderName}, {site.founderTitle}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center font-sans">
              <ButtonLink
                href={mailtoHref(cta.email, cta.primarySubject)}
                variant="primary"
                className="shadow-lg shadow-gemios-accent/15"
              >
                {cta.primaryLabel}
              </ButtonLink>
              <ButtonLink
                href={mailtoHref(cta.email, cta.secondarySubject)}
                variant="secondary"
                className="border-gemios-accent/30 bg-white/5 text-white hover:bg-white/10 hover:border-gemios-accent/60"
              >
                {cta.secondaryLabel}
              </ButtonLink>
            </div>
          </div>
          <div
            className="hidden shrink-0 rounded-2xl border border-gemios-accent/30 bg-white p-6 shadow-2xl lg:flex lg:flex-col lg:items-center transform rotate-1 hover:rotate-0 transition-transform duration-300"
            aria-hidden
          >
            <img
              src="/logo.png"
              alt="Gemios Logo Patch"
              className="h-56 w-auto object-contain"
            />
            <span className="mt-4 text-center text-xs font-semibold uppercase tracking-wider text-gemios-navy font-sans">
              {site.heroBadgeLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
