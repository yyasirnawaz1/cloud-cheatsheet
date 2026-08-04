import type { ServiceMapping } from '../types';

export const observability: ServiceMapping[] = [
  {
    id: 'observability-metrics',
    category: 'observability',
    concept: 'Metrics & Monitoring',
    azure: {
      name: 'Azure Monitor',
      tagline: 'Platform metrics and alerting',
      description:
        'Collects platform and custom metrics from Azure resources and applications, with alerting, autoscale, and visualization. Metrics are near real-time numeric time-series data.',
      limitations: [
        'Platform metrics retained for 93 days; guest OS metrics require the diagnostics extension.',
        'Standard metric aggregation granularity is 1 minute; custom metrics limited to 50 dimensions per metric.',
        'Metric alert rules evaluate at minimum 1-minute frequency.',
        'A single metric alert can monitor up to 5,000 resources via multi-resource scope.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-monitor/',
      free: true,
    },
    aws: {
      name: 'Amazon CloudWatch',
      tagline: 'Metrics, alarms, and monitoring',
      description:
        'Collects metrics, logs, and events from AWS services and custom sources, with alarms and dashboards. Supports standard (1-minute) and high-resolution (1-second) metrics.',
      limitations: [
        'Metric data retained 15 months; sub-60-second data rolled up after 3 hours.',
        'Default limit of 5,000 alarms per Region (soft) and 30 dimensions per metric.',
        'PutMetricData payload limited to 1 MB (HTTP POST) / 40 KB (GET).',
        'Metrics are Region-scoped and not automatically aggregated cross-Region.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/cloudwatch/',
      free: true,
    },
  },
  {
    id: 'observability-logs',
    category: 'observability',
    concept: 'Logs & Queries',
    azure: {
      name: 'Azure Monitor Logs (Log Analytics)',
      tagline: 'Centralized log store with KQL',
      description:
        'Ingests and stores log and performance data in a Log Analytics workspace, queried with Kusto Query Language (KQL) for troubleshooting and analytics.',
      limitations: [
        'Query returns max 500,000 rows and 64 MB of data; 10-minute query execution timeout.',
        'Default data ingestion latency of a few minutes; free tier retention capped.',
        'Interactive retention up to 730 days; long-term archive up to 12 years (extra cost).',
        'Default of 200 concurrent queries per user and throttling above workspace limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-monitor/logs/log-analytics-overview',
      free: true,
    },
    aws: {
      name: 'Amazon CloudWatch Logs',
      tagline: 'Log ingestion and Insights queries',
      description:
        'Centralizes logs from applications and AWS services into log groups and streams, with Logs Insights for interactive querying and metric filters for extraction.',
      limitations: [
        'PutLogEvents batch limited to 1 MB and 10,000 events per request.',
        'Logs Insights queries scan up to 10,000 log groups and return max 10,000 rows.',
        'A single Logs Insights query runs for max 60 minutes before timing out.',
        'Default 5 concurrent Logs Insights queries per account.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/',
      free: true,
    },
  },
  {
    id: 'observability-apm',
    category: 'observability',
    concept: 'APM & Distributed Tracing',
    azure: {
      name: 'Azure Application Insights',
      tagline: 'Application performance monitoring',
      description:
        'An APM feature of Azure Monitor that collects telemetry, dependencies, exceptions, and distributed traces from live applications for performance and failure analysis.',
      limitations: [
        'Adaptive sampling defaults to ~5 telemetry items/second per host to control volume.',
        'Ingestion throttled at 32,000 events/second per instrumentation key by default.',
        'Default data retention of 90 days for raw telemetry.',
        'Metrics/log data backed by Log Analytics, inheriting its query row and timeout limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview',
      free: true,
    },
    aws: {
      name: 'AWS X-Ray',
      tagline: 'Distributed request tracing',
      description:
        'Traces requests as they travel through distributed applications, building a service map and surfacing latency, errors, and bottlenecks across microservices.',
      limitations: [
        'Trace documents (segments) limited to 64 KB each.',
        'Traces retained for 30 days and cannot be extended.',
        'Default sampling records the first request each second plus 5% of additional requests.',
        'GetTraceSummaries returns traces from a time window of at most 6 hours per call.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/xray/',
      free: true,
    },
  },
  {
    id: 'observability-dashboards',
    category: 'observability',
    concept: 'Dashboards & Visualization',
    azure: {
      name: 'Azure Managed Grafana',
      tagline: 'Fully managed Grafana service',
      description:
        'A managed Grafana offering integrated with Azure Monitor, enabling dashboards over Azure and third-party data sources with Azure AD authentication.',
      limitations: [
        'Regional availability is more limited than core Azure Monitor.',
        'Standard tier caps the number of Grafana instances and concurrent users per instance.',
        'Some Grafana Enterprise plugins are unavailable in the managed offering.',
        'API/dashboard provisioning subject to Azure resource management throttling.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/managed-grafana/',
      free: false,
    },
    aws: {
      name: 'Amazon Managed Grafana',
      tagline: 'Managed Grafana for observability',
      description:
        'A fully managed Grafana service for querying, visualizing, and alerting on metrics, logs, and traces from AWS and external data sources.',
      limitations: [
        'Per-workspace quotas on data sources, API keys, and concurrent alert rules.',
        'Priced per active editor/admin and viewer user per month with no perpetual free tier.',
        'Alerting evaluation frequency and API request rates are throttled per workspace.',
        'Not all community Grafana plugins are supported in the managed environment.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/grafana/',
      free: false,
    },
  },
  {
    id: 'observability-audit',
    category: 'observability',
    concept: 'Audit & Activity Logs',
    azure: {
      name: 'Azure Activity Log',
      tagline: 'Subscription control-plane events',
      description:
        'Records control-plane operations on Azure resources (who did what, when) at the subscription level, useful for auditing and change tracking.',
      limitations: [
        'Events retained in the platform for only 90 days; export to a workspace/storage for longer.',
        'Captures control-plane operations only, not data-plane actions.',
        'Ingestion latency of a few minutes before events are queryable.',
        'Scoped per subscription; cross-subscription views require aggregation.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-monitor/essentials/activity-log',
      free: true,
    },
    aws: {
      name: 'AWS CloudTrail',
      tagline: 'Account activity and API auditing',
      description:
        'Records API calls and account activity across AWS services for governance, compliance, and operational auditing, delivering events to the console, S3, or CloudWatch.',
      limitations: [
        'Event history console retains management events for only 90 days.',
        'Management event delivery to S3 can lag by up to ~15 minutes.',
        'Limited to 5 trails per Region; data events incur additional charges.',
        'A single lookup call returns up to 50 events and supports one attribute filter.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/cloudtrail/',
      free: true,
    },
  },
  {
    id: 'observability-prometheus',
    category: 'observability',
    concept: 'Managed Prometheus',
    azure: {
      name: 'Azure Monitor managed Prometheus',
      tagline: 'Managed Prometheus metrics',
      description:
        'A fully managed, Prometheus-compatible metrics service that scrapes and stores metrics from AKS and other Kubernetes clusters using an Azure Monitor workspace.',
      limitations: [
        'Metrics retained for 18 months in the Azure Monitor workspace.',
        'Default ingestion limits of ~1 million events/minute and active time series per workspace.',
        'Query (PromQL) requests throttled per workspace above default rate limits.',
        'Regional availability narrower than classic Azure Monitor metrics.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-monitor/essentials/prometheus-metrics-overview',
      free: false,
    },
    aws: {
      name: 'Amazon Managed Service for Prometheus',
      tagline: 'Managed Prometheus at scale',
      description:
        'A Prometheus-compatible, managed service for ingesting, storing, and querying operational metrics from container workloads using PromQL.',
      limitations: [
        'Metrics retained for 150 days, after which data is deleted.',
        'Default ingestion of 1,000,000 active series and remote-write rate limits per workspace (soft).',
        'Default limit of 100 rules per rule group and quotas on query samples processed.',
        'No perpetual free tier; billed per sample ingested, stored, and queried.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/prometheus/',
      free: false,
    },
  },
];
