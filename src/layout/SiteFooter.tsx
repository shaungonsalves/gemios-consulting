import { cta } from '../content/cta';
import { site } from '../content/site';
import { Container } from '../components/Container';
import { mailtoHref } from '../lib/mailto';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          © {site.copyrightYear} {site.companyName}. All rights reserved.
        </p>
        <a
          href={mailtoHref(cta.email, 'Inquiry')}
          className="rounded text-sm font-medium text-gemios-accent hover:text-gemios-accentDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gemios-accent focus-visible:ring-offset-2"
        >
          {cta.email}
        </a>
      </Container>
    </footer>
  );
}
