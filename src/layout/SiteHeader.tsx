import { navigation } from '../content/navigation';
import { site } from '../content/site';
import { Container } from '../components/Container';
import { LogoMark } from '../components/LogoMark';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-md text-gemios-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
        >
          <LogoMark className="h-9 w-9 shrink-0" />
          <span className="text-lg font-semibold tracking-tight">{site.companyName}</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 text-sm font-medium text-slate-700">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="rounded px-1 py-1 text-slate-700 transition-colors hover:text-gemios-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-gemios-navy marker:hidden [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-md border border-slate-200 bg-white py-2 shadow-lg">
            <ul className="flex flex-col gap-1 px-2 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="block rounded px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-gemios-accent"
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
