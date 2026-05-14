import { howWeWorkItems } from '../content/howWeWork';
import { howWeWorkSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function HowWeWorkSection() {
  return (
    <Section
      id={howWeWorkSection.id}
      title={howWeWorkSection.title}
      description={howWeWorkSection.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {howWeWorkItems.map((item) => (
          <Card key={item.id} title={item.title}>
            {item.body}
          </Card>
        ))}
      </div>
    </Section>
  );
}
