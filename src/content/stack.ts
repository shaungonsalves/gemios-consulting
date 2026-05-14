import type { StackItem } from '../types/content';

/** Simple Icons CDN — https://github.com/simple-icons/simple-icons */
const SIMPLE_ICONS_VERSION = '11.15.0';

export const stackItems: StackItem[] = [
  { id: 'java', name: 'Java', iconSlug: 'java' },
  { id: 'kubernetes', name: 'Kubernetes', iconSlug: 'kubernetes' },
  { id: 'aws', name: 'AWS', iconSlug: 'amazonaws' },
  { id: 'gcp', name: 'Google Cloud', iconSlug: 'googlecloud' },
  { id: 'terraform', name: 'Terraform', iconSlug: 'terraform' },
  { id: 'python', name: 'Python', iconSlug: 'python' },
];

export function stackIconUrl(iconSlug: string): string {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${iconSlug}.svg`;
}
