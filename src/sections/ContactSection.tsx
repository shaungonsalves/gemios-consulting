import { cta } from '../content/cta';
import { contactSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';
import { ButtonLink } from '../components/ButtonLink';
import { mailtoHref } from '../lib/mailto';

export function ContactSection() {
  return (
    <Section
      id={contactSection.id}
      title={contactSection.title}
      description={contactSection.description}
    >
      <div className="max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base leading-relaxed text-slate-600">{cta.contactIntro}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={mailtoHref(cta.email, cta.primarySubject)} variant="primary">
            {cta.primaryLabel}
          </ButtonLink>
          <ButtonLink href={mailtoHref(cta.email, cta.secondarySubject)} variant="secondary">
            {cta.secondaryLabel}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate-500">{cta.schedulingNote}</p>
        <p className="mt-4 text-sm font-medium text-slate-800">
          <a
            href={mailtoHref(cta.email, cta.primarySubject)}
            className="rounded text-gemios-accent hover:text-gemios-accentDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
          >
            {cta.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
