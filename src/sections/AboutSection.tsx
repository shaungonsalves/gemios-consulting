import { aboutParagraphs } from '../content/about';
import { aboutSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';

export function AboutSection() {
  return (
    <Section id={aboutSection.id} title={aboutSection.title} description={aboutSection.description}>
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-slate-600">
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
