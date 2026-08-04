import type { ServiceMapping } from '../types';

export const management: ServiceMapping[] = [
  {
    id: 'management-cost',
    category: 'management',
    concept: 'Cost Management & Billing Analysis',
    azure: {
      name: 'Microsoft Cost Management',
      tagline: 'Monitor & optimize cloud spend',
      description:
        'Tools to analyze, monitor, and control Azure and (via connectors) AWS spend, with cost analysis, budgets, alerts, and exports to storage for downstream reporting.',
      limitations: [
        'Cost data typically has a latency of up to 8–24 hours before it appears.',
        'Historical cost data retention/queryable window is generally limited to ~13 months in the portal.',
        'Budgets trigger alerts and automation but cannot hard-stop spending.',
        'AWS cost connector is a paid add-on and is being deprecated for new sign-ups.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/cost-management-billing/',
      free: true,
    },
    aws: {
      name: 'AWS Cost Explorer',
      tagline: 'Visualize & analyze AWS costs',
      description:
        'Service for visualizing, understanding, and forecasting AWS spending and usage over time, with rightsizing recommendations and Reserved Instance/Savings Plans analysis.',
      limitations: [
        'Cost and usage data can lag up to 24 hours; final billing data settles over days.',
        'Historical data limited to the past 12 months by default (up to 38 months configurable).',
        'Cost Explorer API requests are billed at $0.01 per paginated request.',
        'Hourly and resource-level granularity must be explicitly (and separately) enabled.',
      ],
      docsUrl:
        'https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html',
      free: true,
    },
  },
  {
    id: 'management-policy',
    category: 'management',
    concept: 'Policy & Governance',
    azure: {
      name: 'Azure Policy',
      tagline: 'Enforce org standards at scale',
      description:
        'Enforces organizational rules and compliance across resources by evaluating them against policy definitions, with audit, deny, and deployIfNotExists remediation effects.',
      limitations: [
        'Max 500 policy definitions per management group and 200 per subscription.',
        'Max 200 policy assignments per scope; initiatives limited to 1,000 policies each.',
        'Compliance evaluation runs roughly every 24 hours (or on-demand), not instantly.',
        'Some resource providers and properties are not policy-aliased/evaluable.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/governance/policy/',
      free: true,
    },
    aws: {
      name: 'AWS Config & Organizations SCP',
      tagline: 'Compliance rules & guardrails',
      description:
        'AWS Config tracks resource configuration and evaluates compliance rules, while Organizations Service Control Policies set permission guardrails across accounts in an org.',
      limitations: [
        'Config: default 150 Config rules per region per account (soft, raisable).',
        'SCPs: max 5 SCPs per account/OU/root and 5,120 characters per policy document.',
        'SCPs restrict permissions only — they never grant access.',
        'Config rules evaluate on change or periodically; near-real-time but not instantaneous.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/config/',
      free: false,
    },
  },
  {
    id: 'management-orga',
    category: 'management',
    concept: 'Resource Organization & Account Structure',
    azure: {
      name: 'Azure Resource & Management Groups',
      tagline: 'Organize resources & subscriptions',
      description:
        'Resource groups contain related resources within a subscription, while management groups organize multiple subscriptions into a hierarchy for governance and access control.',
      limitations: [
        'Management group hierarchy limited to 6 levels of depth (excluding root and subscriptions).',
        'A management group can have only one parent and up to 10,000 management groups per directory.',
        'Max 800 resource groups per subscription; a resource belongs to exactly one group.',
        'Resources can be moved between groups but some resource types do not support move.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/azure-resource-manager/management/overview',
      free: true,
    },
    aws: {
      name: 'AWS Organizations & Resource Groups',
      tagline: 'Multi-account org & grouping',
      description:
        'AWS Organizations centrally manages multiple accounts in an OU hierarchy with consolidated billing and SCPs, while Resource Groups group resources by tags or CloudFormation stack.',
      limitations: [
        'OU hierarchy limited to 5 levels of nesting below the root.',
        'Default limit of 10 accounts per organization (raisable) and one org per management account.',
        'A resource can be tagged into many groups, but tag/key limits apply (50 tags per resource).',
        'Some services are not fully integrated with Organizations trusted access.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/organizations/',
      free: true,
    },
  },
  {
    id: 'management-automation',
    category: 'management',
    concept: 'Operations Automation',
    azure: {
      name: 'Azure Automation',
      tagline: 'Process automation & config',
      description:
        'Cloud automation service for process automation (PowerShell/Python runbooks), configuration management (DSC), update management, and shared resources like credentials and schedules.',
      limitations: [
        'Cloud (Azure sandbox) job limited to 3 hours of fair-share execution and 400 MB memory.',
        'Max 200 concurrent running jobs per automation account.',
        'Module storage limited to 100 MB per automation account.',
        'Runbook job data and logs are retained for 30 days.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/automation/',
      free: false,
    },
    aws: {
      name: 'AWS Systems Manager',
      tagline: 'Operate & automate at scale',
      description:
        'Unified operations service for managing infrastructure with Automation runbooks, Run Command, State Manager, Patch Manager, Parameter Store, and Session Manager.',
      limitations: [
        'Automation: default 100 concurrent automations and 25 concurrent rate-controlled executions.',
        'Parameter Store standard parameters limited to 4 KB (8 KB advanced) and 10,000 standard params/account.',
        'Run Command targets and per-account concurrency subject to service quotas.',
        'Automation document (runbook) execution has a max 30-day duration.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/systems-manager/',
      free: true,
    },
  },
  {
    id: 'management-landing-zone',
    category: 'management',
    concept: 'Landing Zone / Environment Setup',
    azure: {
      name: 'Azure Landing Zones',
      tagline: 'Governed cloud foundation',
      description:
        'Cloud Adoption Framework blueprint and accelerator (ALZ) for a scalable, governed multi-subscription environment with management groups, policies, networking, and identity baked in.',
      limitations: [
        'ALZ is a reference architecture/accelerator, not a single managed service with an SLA.',
        'Deployed via Bicep/Terraform/portal — ongoing drift management is the customer’s responsibility.',
        'Underlying management group and policy limits (6-level depth, assignment caps) apply.',
        'Customizing the accelerator requires IaC expertise to avoid breaking the baseline.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/cloud-adoption-framework/ready/landing-zone/',
      free: true,
    },
    aws: {
      name: 'AWS Control Tower',
      tagline: 'Set up & govern multi-account',
      description:
        'Automates setup of a well-architected multi-account AWS environment (landing zone) with a baseline of guardrails, centralized logging, and an Account Factory for provisioning.',
      limitations: [
        'Preventive/detective guardrails are predefined; deep customization needs SCPs/Config directly.',
        'Landing zone updates may require re-registering or updating enrolled OUs/accounts.',
        'Account Factory account creation is subject to Organizations account quotas.',
        'Some regions and legacy accounts are not fully supported for enrollment.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/controltower/',
      free: false,
    },
  },
  {
    id: 'management-advisor',
    category: 'management',
    concept: 'Recommendations & Best Practices',
    azure: {
      name: 'Azure Advisor',
      tagline: 'Personalized best-practice guidance',
      description:
        'Free service that analyzes resource usage and configuration to provide recommendations across cost, reliability, security, operational excellence, and performance.',
      limitations: [
        'Recommendations refresh periodically (often daily) rather than in real time.',
        'Coverage is limited to resource types and scenarios that Advisor supports.',
        'Cost recommendations depend on sufficient historical usage data being present.',
        'Security recommendations require Microsoft Defender for Cloud for full depth.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/advisor/',
      free: true,
    },
    aws: {
      name: 'AWS Trusted Advisor',
      tagline: 'Account best-practice checks',
      description:
        'Provides real-time guidance to follow AWS best practices across cost optimization, performance, security, fault tolerance, and service limits.',
      limitations: [
        'Basic/Developer support plans only get a limited subset of checks (security & service limits).',
        'Full set of checks and programmatic API access require Business or Enterprise Support.',
        'Check results refresh periodically (or on-demand within rate limits), not continuously.',
        'Recommendations are advisory and are not automatically remediated.',
      ],
      docsUrl:
        'https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html',
      free: true,
    },
  },
];
