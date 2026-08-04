import type { ServiceMapping } from '../types';

export const serverless: ServiceMapping[] = [
  {
    id: 'serverless-functions',
    category: 'serverless',
    concept: 'Functions as a Service (FaaS)',
    azure: {
      name: 'Azure Functions',
      tagline: 'Event-driven serverless compute',
      description:
        'Run small pieces of code (functions) without managing infrastructure, triggered by HTTP, timers, queues, or events. Supports multiple languages and hosting plans (Consumption, Premium, Dedicated).',
      limitations: [
        'Consumption plan: 5-minute default timeout (10-min max); Premium/Dedicated up to 60 min or unbounded.',
        'Consumption plan cold starts can add hundreds of ms to several seconds.',
        'Default scale-out limit of 200 instances (Windows Consumption).',
        '1.5 GB memory per instance on Consumption plan.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-functions/',
      free: true,
    },
    aws: {
      name: 'AWS Lambda',
      tagline: 'Run code without provisioning servers',
      description:
        'Execute code in response to events (S3, DynamoDB, API Gateway, etc.) and automatically scale. You pay only for compute time consumed, billed per millisecond.',
      limitations: [
        'Hard 15-minute maximum execution timeout.',
        'Default account concurrency limit of 1,000 concurrent executions (soft, can be raised).',
        'Deployment package limit: 50 MB zipped / 250 MB unzipped (10 GB via container image).',
        'Memory configurable 128 MB–10,240 MB; /tmp storage 512 MB–10 GB.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/lambda/',
      free: true,
    },
  },
  {
    id: 'serverless-workflow',
    category: 'serverless',
    concept: 'Serverless Workflow Orchestration',
    azure: {
      name: 'Azure Logic Apps',
      tagline: 'Visual workflow & integration automation',
      description:
        'Low-code/no-code platform to automate workflows and integrate apps, data, and services across cloud and on-premises with hundreds of prebuilt connectors.',
      limitations: [
        'Consumption plan: action/trigger throughput throttling per 5-minute rolling window.',
        'Max 90-day default run duration (Standard); message size limits (~100 MB with chunking).',
        'Connector-specific throttling limits apply.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/logic-apps/',
      free: false,
    },
    aws: {
      name: 'AWS Step Functions',
      tagline: 'Serverless state-machine orchestration',
      description:
        'Coordinate distributed application components as a series of steps in a visual state machine, with built-in error handling, retries, and parallel execution.',
      limitations: [
        'Standard workflows: max 1-year execution duration; Express: 5-minute max.',
        'Max 25,000 events in a Standard execution history.',
        'State machine definition size limit of 1 MB; payload limit 256 KB between states.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/step-functions/',
      free: true,
    },
  },
];
