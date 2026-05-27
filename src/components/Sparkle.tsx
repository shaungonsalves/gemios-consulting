interface SparkleProps {
  className?: string;
}

export function Sparkle({ className = 'h-4 w-4 text-gemios-accent' }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0L15.3 8.7L24 12L15.3 15.3L12 24L8.7 15.3L0 12L8.7 8.7L12 0Z" />
    </svg>
  );
}
