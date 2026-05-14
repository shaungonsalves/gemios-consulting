import { stackIconUrl, stackItems } from '../content/stack';
import { stackSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';
import { TechLogoGrid } from '../components/TechLogoGrid';

export function StackSection() {
  return (
    <Section id={stackSection.id} title={stackSection.title} description={stackSection.description}>
      <TechLogoGrid items={stackItems} iconUrl={stackIconUrl} />
    </Section>
  );
}
