import { navigation } from '../content/navigation';
import { Container } from '../components/Container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gemios-accent/20 bg-gemios-cream/90 backdrop-blur supports-[backdrop-filter]:bg-gemios-cream/80">
      <Container className="flex py-3 items-center justify-between gap-4">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
        >
          <img
            src="/logo.png"
            alt="Gemios Logo"
            className="h-20 w-auto shrink-0"
          />
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 text-sm font-medium text-slate-700">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded px-1 py-1 text-gemios-navy transition-colors hover:text-gemios-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-gemios-accent/30 px-3 py-2 text-sm font-medium text-gemios-navy marker:hidden [&::-webkit-details-marker]:hidden bg-white/50 hover:bg-white transition-colors">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-md border border-gemios-accent/25 bg-white py-2 shadow-lg">
            <ul className="flex flex-col gap-1 px-2 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block rounded px-3 py-2 text-slate-700 hover:bg-gemios-cream hover:text-gemios-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </Container>
    </header>
  );
}
