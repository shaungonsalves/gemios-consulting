import type { StackItem } from '../types/content';

interface TechLogoGridProps {
  items: StackItem[];
  iconUrl: (slug: string) => string;
}

export function TechLogoGrid({ items, iconUrl }: TechLogoGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6" role="list">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-6 text-center shadow-sm"
        >
          <img
            src={iconUrl(item.iconSlug)}
            alt={`${item.name} logo`}
            width={40}
            height={40}
            className="h-10 w-10 opacity-90"
            loading="lazy"
            decoding="async"
          />
          <span className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-600">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
