import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gemios-accent/20 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="font-serif text-lg font-semibold text-gemios-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 font-sans">{children}</p>
    </article>
  );
}
