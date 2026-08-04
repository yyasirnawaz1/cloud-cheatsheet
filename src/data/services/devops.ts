import type { ServiceMapping } from '../types';

export const devops: ServiceMapping[] = [
  {
    id: 'devops-cicd',
    category: 'devops',
    concept: 'CI/CD Pipelines',
    azure: {
      name: 'Azure Pipelines',
      tagline: 'Cloud-native CI/CD pipelines',
      description:
        'Build, test, and deploy pipelines defined in YAML or the classic editor, integrating with any language and deploying to any cloud or on-premises target.',
      limitations: [
        'Free tier: 1 Microsoft-hosted parallel job with 1,800 minutes/month for private projects.',
        'Microsoft-hosted job timeout capped at 60 minutes (6 hours on paid parallelism).',
        'YAML pipeline file limited to ~2 MB and 100 separate YAML files per pipeline.',
        'Hosted agents provide ephemeral, non-persistent storage cleared after each job.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/devops/pipelines/',
      free: true,
    },
    aws: {
      name: 'AWS CodePipeline',
      tagline: 'Automated release pipelines',
      description:
        'Orchestrates continuous delivery workflows that model release stages such as source, build, test, and deploy, integrating with CodeBuild, CodeDeploy, and third-party tools.',
      limitations: [
        'Default limit of 300 pipelines per Region and 50 actions per pipeline (soft).',
        'Maximum of 500 stages per pipeline and 50 actions per stage.',
        'Input/output artifacts pass through S3; per-action artifact size limits apply.',
        'A pipeline execution can run for at most one year before timing out.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/codepipeline/',
      free: true,
    },
  },
  {
    id: 'devops-repos',
    category: 'devops',
    concept: 'Source Code Repositories',
    azure: {
      name: 'Azure Repos',
      tagline: 'Managed Git and TFVC repos',
      description:
        'Unlimited private Git repositories with pull requests, branch policies, and code review, hosted as part of Azure DevOps.',
      limitations: [
        'Recommended repository size under 10 GB; individual file push limited to 5 GB.',
        'Push payloads over 6 GB may be rejected by the service.',
        'Only one TFVC repository is allowed per project.',
        'Branch/tag names and pull request size subject to Azure DevOps service limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/devops/repos/',
      free: true,
    },
    aws: {
      name: 'AWS CodeCommit',
      tagline: 'Managed private Git hosting',
      description:
        'Hosts secure, private Git repositories that scale and integrate with AWS IAM, though it is closed to new customers as of mid-2024.',
      limitations: [
        'Closed to new customers since July 2024; no new repository creation for new accounts.',
        'Individual files limited to 6 GB and repository blob size limits apply.',
        'Default of 1,000 repositories per account (soft limit).',
        'API request rates and reference (branch/tag) counts are throttled/capped per repo.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/codecommit/',
      free: true,
    },
  },
  {
    id: 'devops-build',
    category: 'devops',
    concept: 'Build Service',
    azure: {
      name: 'Azure Pipelines Agents',
      tagline: 'Hosted and self-hosted build agents',
      description:
        'Executes build and release jobs on Microsoft-hosted or self-hosted agents, providing on-demand compute with preinstalled toolchains for many languages.',
      limitations: [
        'Microsoft-hosted agents offer fixed vCPU/RAM (e.g. ~2 vCPU, 7 GB) with limited disk.',
        'Hosted agent jobs capped at 60 minutes on the free tier.',
        'Agents are ephemeral; no state persists between jobs without artifacts or caching.',
        'Concurrency is limited by purchased parallel jobs (1 free hosted job).',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/devops/pipelines/agents/agents',
      free: true,
    },
    aws: {
      name: 'AWS CodeBuild',
      tagline: 'Managed build and test service',
      description:
        'A fully managed build service that compiles source, runs tests, and produces deployable artifacts, scaling continuously with no build servers to manage.',
      limitations: [
        'Build timeout configurable from 5 minutes up to a maximum of 8 hours.',
        'Default of 60 concurrently running builds per account (soft limit).',
        'Environment variables in a project limited to a total size of ~5,500 characters.',
        'Compute type selection is fixed per build (vCPU/memory not autoscaled mid-build).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/codebuild/',
      free: true,
    },
  },
  {
    id: 'devops-deploy',
    category: 'devops',
    concept: 'Deployment Service',
    azure: {
      name: 'Azure DevOps Releases',
      tagline: 'Classic release orchestration',
      description:
        'The classic release management experience in Azure DevOps for deploying artifacts to multiple stages with approvals, gates, and environment-specific tasks.',
      limitations: [
        'Classic Releases are in maintenance mode; new features go to YAML pipelines.',
        'Retention of release records subject to configurable but bounded policies.',
        'Number of stages and parallel deployments limited by purchased parallel jobs.',
        'Approvals and gates add latency and are constrained by service timeout limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/devops/pipelines/release/',
      free: true,
    },
    aws: {
      name: 'AWS CodeDeploy',
      tagline: 'Automated application deployments',
      description:
        'Automates code deployments to EC2, on-premises servers, Lambda, and ECS with in-place or blue/green strategies and automatic rollback on failure.',
      limitations: [
        'Default of 1,000 concurrent deployments per account (soft limit).',
        'A single deployment can target at most 1,000 instances.',
        'Deployment group and application counts are capped per account (soft limits).',
        'Deployment lifecycle event scripts (AppSpec hooks) have a 1-hour default timeout each.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/codedeploy/',
      free: true,
    },
  },
  {
    id: 'devops-iac',
    category: 'devops',
    concept: 'Infrastructure as Code',
    azure: {
      name: 'Azure Resource Manager / Bicep',
      tagline: 'Declarative Azure provisioning',
      description:
        'ARM templates (JSON) and Bicep (a DSL that transpiles to ARM) declaratively define and deploy Azure resources with dependency management and idempotent deployments.',
      limitations: [
        'A single template is limited to 4 MB and 800 resources per deployment.',
        'Max 256 parameters, 256 variables, and 64 output values per template.',
        'Deployment nesting is limited and resource-group deployments are region-scoped.',
        'Bicep/ARM manage Azure resources only, not other clouds natively.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-resource-manager/bicep/',
      free: true,
    },
    aws: {
      name: 'AWS CloudFormation',
      tagline: 'Declarative AWS provisioning',
      description:
        'Provisions and manages AWS resources declaratively using JSON or YAML templates organized into stacks, with change sets, drift detection, and rollback.',
      limitations: [
        'Template body limited to 1 MB (51.2 KB when passed inline vs S3).',
        'Maximum of 500 resources per stack and 200 parameters/outputs each.',
        'Default of 2,000 stacks per Region (soft limit).',
        'Manages AWS resources only; custom resources are needed for external providers.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/cloudformation/',
      free: true,
    },
  },
  {
    id: 'devops-artifacts',
    category: 'devops',
    concept: 'Artifact Repository',
    azure: {
      name: 'Azure Artifacts',
      tagline: 'Package feeds for CI/CD',
      description:
        'Hosts and shares Maven, npm, NuGet, Python, and Universal packages through feeds with upstream sources and fine-grained access control.',
      limitations: [
        'Free storage capped at 2 GB per organization; usage beyond is billed.',
        'Universal Package size limited to a maximum of 4 TB per package.',
        'Feed and view counts subject to Azure DevOps service limits.',
        'Upstream source resolution can add latency on first package restore.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/devops/artifacts/',
      free: true,
    },
    aws: {
      name: 'AWS CodeArtifact',
      tagline: 'Managed package repositories',
      description:
        'A secure, scalable artifact management service for npm, PyPI, Maven, NuGet, and generic packages with upstream repositories and IAM-based access control.',
      limitations: [
        'Default of 1,000 repositories per domain and 10 upstream repos per repository (soft).',
        'Individual asset (package file) size limited to 5 GB.',
        'API request rates for package operations are throttled per account.',
        'No perpetual free tier; billed for storage, requests, and cross-Region transfer.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/codeartifact/',
      free: false,
    },
  },
];
