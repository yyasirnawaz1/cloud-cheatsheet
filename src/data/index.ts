import type { ServiceMapping } from './types';
import { compute } from './services/compute';
import { serverless } from './services/serverless';
import { containers } from './services/containers';
import { storage } from './services/storage';
import { databases } from './services/databases';
import { networking } from './services/networking';
import { security } from './services/security';
import { observability } from './services/observability';
import { devops } from './services/devops';
import { integration } from './services/integration';
import { analytics } from './services/analytics';
import { ai } from './services/ai';
import { management } from './services/management';
import { iot } from './services/iot';

export const mappings: ServiceMapping[] = [
  ...compute,
  ...serverless,
  ...containers,
  ...storage,
  ...databases,
  ...networking,
  ...security,
  ...observability,
  ...devops,
  ...integration,
  ...analytics,
  ...ai,
  ...management,
  ...iot,
];

export const mappingsById: Record<string, ServiceMapping> = Object.fromEntries(
  mappings.map((m) => [m.id, m]),
);

export * from './types';
export { categories, categoryMap } from './categories';
