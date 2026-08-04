import type { ServiceMapping } from '../types';

export const security: ServiceMapping[] = [
  {
    id: 'security-identity-provider',
    category: 'security',
    concept: 'Cloud Identity Provider',
    azure: {
      name: 'Microsoft Entra ID (Azure AD)',
      tagline: 'Cloud identity and access',
      description:
        'A cloud-based identity and access management service that authenticates users and applications, providing single sign-on, multi-factor authentication, and conditional access.',
      limitations: [
        'Advanced features (conditional access, PIM, identity protection) require P1/P2 licenses.',
        'Default limit of ~50,000 created objects per non-verified tenant.',
        'B2B/B2C are separate offerings with their own limits and pricing.',
        'Dynamic group and nested-group membership changes have evaluation propagation delays.',
      ],
      docsUrl: 'https://learn.microsoft.com/entra/identity/',
      free: true,
    },
    aws: {
      name: 'AWS IAM Identity Center',
      tagline: 'Centralized workforce SSO',
      description:
        'Centrally manage workforce access to multiple AWS accounts and applications with single sign-on, integrating with external identity providers via SAML/SCIM.',
      limitations: [
        'One IAM Identity Center instance per organization (single home region).',
        'Permission set session duration capped at 12 hours.',
        'Default limits on permission sets (e.g. ~500) and accounts per assignment operation.',
        'SCIM provisioning throughput and attribute mapping constraints apply.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/singlesignon/',
      free: true,
    },
  },
  {
    id: 'security-access-management',
    category: 'security',
    concept: 'Access Management & Roles',
    azure: {
      name: 'Azure RBAC',
      tagline: 'Role-based access control',
      description:
        'Manage fine-grained access to Azure resources by assigning built-in or custom roles to users, groups, and service principals at management group, subscription, or resource scope.',
      limitations: [
        'Maximum 4,000 role assignments per subscription.',
        'Limit of 5,000 custom roles per tenant.',
        'Role assignment changes can take several minutes to propagate.',
        'Deny assignments are limited and mostly system-managed (via Blueprints/managed apps).',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/role-based-access-control/',
      free: true,
    },
    aws: {
      name: 'AWS IAM',
      tagline: 'Fine-grained permissions and roles',
      description:
        'Securely control access to AWS services and resources through users, groups, roles, and JSON policies that grant least-privilege permissions.',
      limitations: [
        'Default limit of 5,000 IAM users and 1,000 IAM roles per account.',
        'Maximum 10 managed policies attachable per IAM entity.',
        'Managed policy document size limited to 6,144 characters.',
        'Maximum role session duration of 12 hours.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/IAM/',
      free: true,
    },
  },
  {
    id: 'security-secrets',
    category: 'security',
    concept: 'Secrets Management',
    azure: {
      name: 'Azure Key Vault',
      tagline: 'Managed secrets and keys store',
      description:
        'Securely store and access secrets, connection strings, and certificates, with access policies or RBAC, versioning, and audit logging.',
      limitations: [
        'Subscription-wide throttling (e.g. ~2,000 secret GET transactions per 10 seconds per vault).',
        'Maximum secret value size of 25 KB.',
        'Soft-deleted vault names are reserved during the retention period, blocking reuse.',
        'No native cross-region replication (uses paired-region failover only).',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/key-vault/secrets/',
    },
    aws: {
      name: 'AWS Secrets Manager',
      tagline: 'Rotate and manage secrets',
      description:
        'Store, retrieve, and automatically rotate database credentials, API keys, and other secrets, with fine-grained IAM policies and Lambda-based rotation.',
      limitations: [
        'Maximum secret value size of 64 KB.',
        'Default limit of 500,000 secrets per account per region.',
        'API request rate quotas (e.g. GetSecretValue throttling) apply per account.',
        'Billed per secret per month plus per 10,000 API calls (no perpetual free tier).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/secretsmanager/',
    },
  },
  {
    id: 'security-key-management',
    category: 'security',
    concept: 'Key Management & HSM',
    azure: {
      name: 'Azure Key Vault Managed HSM',
      tagline: 'Single-tenant FIPS 140-2 HSM',
      description:
        'A fully managed, single-tenant, highly available HSM service that lets you safeguard cryptographic keys in FIPS 140-2 Level 3 validated hardware.',
      limitations: [
        'Each pool is a cluster of 3 HSM partitions billed per hour regardless of usage.',
        'Maximum of 5,000 keys per Managed HSM pool.',
        'Cryptographic throughput is bounded by the underlying HSM partitions.',
        'No free tier; provisioning creates fixed dedicated capacity.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/key-vault/managed-hsm/',
    },
    aws: {
      name: 'AWS KMS / CloudHSM',
      tagline: 'Managed key management and HSM',
      description:
        'AWS KMS provides managed multi-tenant key management integrated across AWS services, while CloudHSM offers dedicated single-tenant FIPS 140-2 Level 3 hardware.',
      limitations: [
        'KMS default limit of ~100,000 customer managed keys per region.',
        'KMS cryptographic request rate quotas apply (e.g. shared symmetric operation limits).',
        'KMS keys pending deletion enforce a 7–30 day mandatory waiting period.',
        'CloudHSM charges per hour per HSM instance and requires you to manage the cluster.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/kms/',
      free: true,
    },
  },
  {
    id: 'security-waf',
    category: 'security',
    concept: 'Web Application Firewall',
    azure: {
      name: 'Azure WAF',
      tagline: 'Protects web apps at L7',
      description:
        'A web application firewall that protects apps from common exploits such as SQL injection and XSS, deployed on Application Gateway or Azure Front Door.',
      limitations: [
        'Custom rule count is limited per policy (e.g. 100 custom rules).',
        'Request body inspection size is capped (e.g. 128 KB–2 MB depending on tier).',
        'Managed rule set updates are controlled by Microsoft, not fully user-tunable.',
        'Only protects endpoints fronted by Application Gateway or Front Door.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/web-application-firewall/',
    },
    aws: {
      name: 'AWS WAF',
      tagline: 'Rule-based web traffic filtering',
      description:
        'A web application firewall that lets you create rules to filter and monitor HTTP(S) requests to CloudFront, ALB, API Gateway, and AppSync.',
      limitations: [
        'Default limit of 100 rules per web ACL and a max web ACL capacity of 5,000 WCUs.',
        'Inspected request body limited to 8 KB by default (up to 64 KB on some resources).',
        'Rate-based rules evaluate over a fixed 5-minute (or 10-minute/1-minute) window.',
        'Billed per web ACL, per rule, and per million requests (no free tier).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/waf/',
    },
  },
  {
    id: 'security-ddos',
    category: 'security',
    concept: 'DDoS Protection',
    azure: {
      name: 'Azure DDoS Protection',
      tagline: 'Network DDoS attack mitigation',
      description:
        'Protects Azure resources from distributed denial-of-service attacks with always-on traffic monitoring, adaptive tuning, and attack analytics.',
      limitations: [
        'Network/IP Protection tiers carry a significant fixed monthly fee.',
        'Network Protection plan covers up to 100 public IP resources before overage charges.',
        'Only mitigates L3/L4 volumetric and protocol attacks (L7 needs WAF).',
        'Basic (free) tier offers only platform-level protection without tuning or reports.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/ddos-protection/',
    },
    aws: {
      name: 'AWS Shield',
      tagline: 'Managed DDoS defense',
      description:
        'Shield Standard provides automatic L3/L4 DDoS protection at no cost, while Shield Advanced adds enhanced mitigation, cost protection, and 24/7 response team access.',
      limitations: [
        'Shield Advanced requires a 1-year commitment at USD 3,000/month plus data fees.',
        'Advanced protections apply only to specific resource types (CloudFront, ALB, NLB, EIP, Route 53).',
        'Standard tier lacks detailed attack diagnostics and the response team.',
        'L7 protection depends on integrating AWS WAF alongside Shield.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html',
      free: true,
    },
  },
  {
    id: 'security-posture',
    category: 'security',
    concept: 'Cloud Security Posture & Threat Detection',
    azure: {
      name: 'Microsoft Defender for Cloud',
      tagline: 'Posture management and threat protection',
      description:
        'A cloud security posture management and workload protection platform that assesses configurations against benchmarks and detects threats across Azure, AWS, GCP, and on-prem.',
      limitations: [
        'Advanced workload protection plans are billed per resource/hour (only free CSPM is no-cost).',
        'Multicloud (AWS/GCP) onboarding requires connectors and additional configuration.',
        'Recommendation and alert data retention is time-bounded unless exported.',
        'Some detections depend on the Log Analytics/Monitoring agent being deployed.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/defender-for-cloud/',
      free: true,
    },
    aws: {
      name: 'AWS Security Hub / GuardDuty',
      tagline: 'Findings aggregation and threat detection',
      description:
        'Security Hub aggregates and prioritizes security findings against standards like CIS, while GuardDuty continuously analyzes logs and network activity to detect threats.',
      limitations: [
        'GuardDuty billing scales with analyzed log/event and data volume (can grow unexpectedly).',
        'Security Hub charges per security check and per ingested finding.',
        'Cross-account/cross-region aggregation requires explicit delegated-admin setup.',
        'Finding ingestion and standards support vary by region.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/securityhub/',
    },
  },
  {
    id: 'security-certificates',
    category: 'security',
    concept: 'Certificate Management',
    azure: {
      name: 'Azure Key Vault Certificates',
      tagline: 'Managed TLS certificate lifecycle',
      description:
        'Provision, manage, and auto-renew X.509/TLS certificates within Key Vault, integrating with supported CAs and Azure services for automatic deployment.',
      limitations: [
        'Integrated auto-enrollment is limited to partnered CAs (DigiCert, GlobalSign).',
        'Certificate operations share the vault-level transaction throttling limits.',
        'Auto-rotation to Azure services can lag, requiring cache refresh on consumers.',
        'No public certificate authority is included; issuance/cost is via the external CA.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/key-vault/certificates/',
    },
    aws: {
      name: 'AWS Certificate Manager',
      tagline: 'Free managed TLS certificates',
      description:
        'Provision, manage, and deploy public and private SSL/TLS certificates, with free auto-renewal for public certificates used with integrated AWS services.',
      limitations: [
        'ACM-issued public certificates cannot be exported for use outside AWS.',
        'Public certificates only deploy to integrated services (CloudFront, ALB, API Gateway).',
        'Default limit of ~2,500 ACM certificates per account per region.',
        'Auto-renewal for imported certificates is not supported (manual re-import required).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/acm/',
      free: true,
    },
  },
];
