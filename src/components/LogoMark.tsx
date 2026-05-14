interface LogoMarkProps {
  className?: string;
  'aria-hidden'?: boolean;
}

export function LogoMark({ className = 'h-9 w-9', 'aria-hidden': ariaHidden = true }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
    >
      <rect width="32" height="32" rx="6" className="fill-gemios-navy" />
      <path
        d="M8 10h6l2 6 2-6h6v12h-4V14l-3 8h-2l-3-8v8H8V10z"
        className="fill-gemios-accent"
      />
    </svg>
  );
}
