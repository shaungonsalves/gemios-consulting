import type { ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, description, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`.trim()}
    >
      <Container>
        <div className="max-w-3xl">
          <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight text-gemios-navy sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
