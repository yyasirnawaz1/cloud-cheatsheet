import type { Category } from './types';

export const categories: Category[] = [
  { id: 'compute', name: 'Compute', icon: '🖥️', description: 'Virtual machines, scale sets, and dedicated hosts.' },
  { id: 'serverless', name: 'Serverless', icon: '⚡', description: 'Event-driven functions and pay-per-use execution.' },
  { id: 'containers', name: 'Containers & Orchestration', icon: '📦', description: 'Container registries, runtimes, and Kubernetes.' },
  { id: 'storage', name: 'Storage', icon: '💾', description: 'Object, block, and file storage plus archival tiers.' },
  { id: 'databases', name: 'Databases', icon: '🗄️', description: 'Relational, NoSQL, cache, and graph databases.' },
  { id: 'networking', name: 'Networking & CDN', icon: '🌐', description: 'VPCs, load balancers, DNS, and content delivery.' },
  { id: 'security', name: 'Security & Identity', icon: '🔐', description: 'Identity, secrets, key management, and compliance.' },
  { id: 'observability', name: 'Monitoring & Observability', icon: '📊', description: 'Metrics, logs, tracing, and alerting.' },
  { id: 'devops', name: 'DevOps & CI/CD', icon: '🚀', description: 'Pipelines, artifact repos, and infrastructure as code.' },
  { id: 'integration', name: 'Messaging & Integration', icon: '🔗', description: 'Queues, pub/sub, event buses, and API gateways.' },
  { id: 'analytics', name: 'Analytics & Big Data', icon: '📈', description: 'Data warehouses, streaming, and big-data processing.' },
  { id: 'ai', name: 'AI & Machine Learning', icon: '🤖', description: 'ML platforms, cognitive APIs, and generative AI.' },
  { id: 'management', name: 'Management & Governance', icon: '🛠️', description: 'Cost, policy, resource, and account governance.' },
  { id: 'iot', name: 'IoT & Edge', icon: '📡', description: 'Device connectivity, edge compute, and telemetry.' },
];

export const categoryMap: Record<string, Category> = Object.fromEntries(
  categories.map((c) => [c.id, c]),
);
