import { services } from '../content/services';
import { expertiseSection } from '../content/sectionsMeta';
import { Section } from '../components/Section';
import { Card } from '../components/Card';

export function ExpertiseSection() {
  return (
    <Section
      id={expertiseSection.id}
      title={expertiseSection.title}
      description={expertiseSection.description}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} title={service.title}>
            {service.summary}
          </Card>
        ))}
      </div>
    </Section>
  );
}
