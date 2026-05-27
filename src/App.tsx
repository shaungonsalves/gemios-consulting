import { useEffect } from 'react';
import { site } from './content/site';
import { SiteFooter } from './layout/SiteFooter';
import { SiteHeader } from './layout/SiteHeader';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExpertiseSection } from './sections/ExpertiseSection';
import { HeroSection } from './sections/HeroSection';
import { PortfolioSection } from './sections/PortfolioSection';

export default function App() {
  useEffect(() => {
    document.title = site.pageTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', site.metaDescription);
    }
  }, []);

  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
