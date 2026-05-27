import { cta } from '../content/cta';
import { contactSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';
import { mailtoHref } from '../lib/mailto';

export function ContactSection() {
  return (
    <Section
      id={contactSection.id}
      title={contactSection.title}
      description={contactSection.description}
    >
      <div className="max-w-4xl space-y-8">
        <p className="text-base leading-relaxed text-slate-600 max-w-2xl">{cta.contactIntro}</p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Card 1: Email Inquiry */}
          <a
            href={mailtoHref(cta.email, cta.primarySubject)}
            className="group flex flex-col items-center justify-center rounded-2xl border border-gemios-accent/20 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gemios-accent/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gemios-accent focus:ring-offset-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gemios-cream text-gemios-accent transition-colors group-hover:bg-gemios-accent group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="mt-6 font-serif text-xl font-semibold text-gemios-navy group-hover:text-gemios-accent transition-colors">
              {cta.primaryLabel}
            </h3>
            <p className="mt-2 text-sm text-slate-500 font-sans">
              Send us a direct message at
            </p>
            <span className="mt-1 text-sm font-semibold text-gemios-navy/90 group-hover:underline">
              {cta.email}
            </span>
          </a>

          {/* Card 2: Book Appointment */}
          <a
            href={cta.schedulingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center rounded-2xl border border-gemios-accent/20 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gemios-accent/80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gemios-accent focus:ring-offset-2"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gemios-cream text-gemios-accent transition-colors group-hover:bg-gemios-accent group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                />
              </svg>
            </div>
            <h3 className="mt-6 font-serif text-xl font-semibold text-gemios-navy group-hover:text-gemios-accent transition-colors">
              {cta.secondaryLabel}
            </h3>
            <p className="mt-2 text-sm text-slate-500 font-sans">
              Select a time to chat
            </p>
            <span className="mt-1 text-sm font-semibold text-gemios-navy/90 group-hover:underline">
              View Calendar & Availability
            </span>
          </a>
        </div>

        <p className="text-sm leading-relaxed text-slate-500 font-sans text-center sm:text-left mt-6">
          {cta.schedulingNote}
        </p>
      </div>
    </Section>
  );
}
