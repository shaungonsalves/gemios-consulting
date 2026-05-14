import { cta } from '../content/cta';
import { site } from '../content/site';
import { Container } from '../components/Container';
import { ButtonLink } from '../components/ButtonLink';
import { LogoMark } from '../components/LogoMark';
import { mailtoHref } from '../lib/mailto';

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-slate-800/20 bg-gradient-to-b from-gemios-navy to-gemios-slate text-slate-100"
    >
      <Container className="py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-300/90">
              {site.companyName}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              {site.headline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">{site.subheadline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {site.founderName}, {site.founderTitle}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ButtonLink
                href={mailtoHref(cta.email, cta.primarySubject)}
                variant="primary"
                className="shadow-lg shadow-teal-900/30"
              >
                {cta.primaryLabel}
              </ButtonLink>
              <ButtonLink
                href={mailtoHref(cta.email, cta.secondarySubject)}
                variant="secondary"
                className="border-slate-500/60 bg-white/10 text-white hover:bg-white/15"
              >
                {cta.secondaryLabel}
              </ButtonLink>
            </div>
          </div>
          <div
            className="hidden shrink-0 rounded-xl border border-white/10 bg-white/5 p-6 lg:flex lg:flex-col lg:items-center"
            aria-hidden
          >
            <LogoMark className="h-20 w-20" />
            <span className="mt-4 text-center text-xs font-medium uppercase tracking-wider text-slate-400">
              {site.heroBadgeLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
