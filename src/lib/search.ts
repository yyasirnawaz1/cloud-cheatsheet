import type { CloudId, ServiceMapping } from '../data/types';

/** Returns true when the mapping matches the query on either cloud side. */
export function matchesQuery(m: ServiceMapping, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    m.concept,
    m.azure.name,
    m.azure.tagline,
    m.azure.description,
    ...m.azure.limitations,
    m.aws.name,
    m.aws.tagline,
    m.aws.description,
    ...m.aws.limitations,
  ]
    .join(' \u0001 ')
    .toLowerCase();
  // Match on every whitespace-separated token (AND semantics).
  return q.split(/\s+/).every((tok) => haystack.includes(tok));
}

/** Which cloud side matched, used to highlight the relevant tile. */
export function sideMatches(m: ServiceMapping, cloud: CloudId, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const s = m[cloud];
  const haystack = [s.name, s.tagline, s.description, ...s.limitations, m.concept]
    .join(' ')
    .toLowerCase();
  return q.split(/\s+/).every((tok) => haystack.includes(tok));
}
