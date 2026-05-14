import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
}

const base =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gemios-accent text-white hover:bg-gemios-accentDark focus-visible:outline-gemios-accent',
  secondary:
    'border border-slate-300 bg-white text-gemios-navy hover:bg-slate-50 focus-visible:outline-gemios-navy',
  ghost: 'text-gemios-accent hover:text-gemios-accentDark focus-visible:outline-gemios-accent underline-offset-4 hover:underline',
};

export function ButtonLink({
  href,
  variant = 'primary',
  children,
  className = '',
  'aria-label': ariaLabel,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
