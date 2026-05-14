import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-semibold text-gemios-navy">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{children}</p>
    </article>
  );
}
