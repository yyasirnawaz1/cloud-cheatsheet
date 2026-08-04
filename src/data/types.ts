export type CloudId = 'azure' | 'aws';

export type CategoryId =
  | 'compute'
  | 'serverless'
  | 'containers'
  | 'storage'
  | 'databases'
  | 'networking'
  | 'security'
  | 'observability'
  | 'devops'
  | 'integration'
  | 'analytics'
  | 'ai'
  | 'management'
  | 'iot';

/** A single cloud provider's offering for a given concept. */
export interface CloudService {
  /** Product name, e.g. "Azure Functions" or "AWS Lambda". */
  name: string;
  /** Short one-liner shown on the tile. */
  tagline: string;
  /** 1-2 sentence description surfaced on hover. */
  description: string;
  /** Notable ecosystem limits / quotas / gotchas. */
  limitations: string[];
  /** Official documentation URL. */
  docsUrl: string;
  /** Whether the service offers a free tier. */
  free?: boolean;
}

/** Maps an equivalent concept across Azure and AWS. */
export interface ServiceMapping {
  /** Stable slug, e.g. "serverless-functions". */
  id: string;
  category: CategoryId;
  /** Cloud-agnostic concept name, e.g. "Serverless Functions". */
  concept: string;
  azure: CloudService;
  aws: CloudService;
}

export interface Category {
  id: CategoryId;
  name: string;
  /** Emoji used as a compact icon. */
  icon: string;
  description: string;
}
