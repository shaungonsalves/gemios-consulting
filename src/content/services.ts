import type { Service } from '../types/content';

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Backend Systems Engineering',
    summary:
      'High-concurrency Java and Python architectures, API design, service boundaries, and distributed systems patterns suited to regulated and high-traffic workloads.',
  },
  {
    id: 'cloud',
    title: 'Cloud Platform Development',
    summary:
      'Kubernetes orchestration, GitOps-based delivery workflows, and automated infrastructure (IaC) to support repeatable environments and controlled change.',
  },
  {
    id: 'data',
    title: 'Big Data Analytics',
    summary:
      'Scalable data pipelines, real-time stream processing, and analytics infrastructure that align storage, compute, and observability with business objectives.',
  },
];
