import type { ServiceMapping } from '../types';

export const integration: ServiceMapping[] = [
  {
    id: 'integration-queue',
    category: 'integration',
    concept: 'Message Queue',
    azure: {
      name: 'Azure Service Bus Queues',
      tagline: 'Enterprise message queuing',
      description:
        'A fully managed message broker offering FIFO queues with sessions, dead-lettering, transactions, and at-least-once or exactly-once delivery semantics.',
      limitations: [
        'Message size limited to 256 KB (Standard) or 100 MB (Premium).',
        'Default maximum message time-to-live and queue size (up to 80 GB on Premium).',
        'Batch size limited to 4,500 messages or 1 MB per SendMessageBatch operation.',
        'Standard tier throughput is shared and can be throttled under high load.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/service-bus-messaging/',
      free: true,
    },
    aws: {
      name: 'Amazon SQS',
      tagline: 'Fully managed message queues',
      description:
        'A distributed message queuing service offering Standard (best-effort ordering) and FIFO (exactly-once, ordered) queues that decouple application components.',
      limitations: [
        'Maximum message size of 256 KB (larger payloads via the S3 extended client).',
        'Message retention configurable from 60 seconds to a maximum of 14 days.',
        'Visibility timeout maximum of 12 hours; long polling wait time up to 20 seconds.',
        'FIFO queues limited to 300 TPS (3,000 TPS with batching) per message group.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/sqs/',
      free: true,
    },
  },
  {
    id: 'integration-pubsub',
    category: 'integration',
    concept: 'Pub/Sub Topics',
    azure: {
      name: 'Azure Service Bus Topics',
      tagline: 'Topic-based publish/subscribe',
      description:
        'Publish/subscribe messaging where publishers send to a topic and multiple subscriptions receive filtered copies of messages using SQL or correlation rules.',
      limitations: [
        'Maximum of 2,000 subscriptions per topic.',
        'Up to 2,000 SQL/correlation filter rules per subscription.',
        'Message size limited to 256 KB (Standard) or 100 MB (Premium).',
        'Complex SQL filters add per-message evaluation latency.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/service-bus-messaging/service-bus-queues-topics-subscriptions',
      free: true,
    },
    aws: {
      name: 'Amazon SNS',
      tagline: 'Managed pub/sub notifications',
      description:
        'A fully managed publish/subscribe service that fans out messages to subscribers such as SQS, Lambda, HTTP endpoints, email, and SMS.',
      limitations: [
        'Message payload limited to 256 KB (2 MB extended for SMS aggregation only).',
        'Default of 100,000 topics per account and 12,500,000 subscriptions per topic (soft).',
        'Standard topics provide best-effort ordering; FIFO topics cap at 300 messages/second.',
        'Default publish rate throttled per account (e.g. 30,000 messages/second in many Regions).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/sns/',
      free: true,
    },
  },
  {
    id: 'integration-eventbus',
    category: 'integration',
    concept: 'Event Bus',
    azure: {
      name: 'Azure Event Grid',
      tagline: 'Serverless event routing',
      description:
        'A fully managed event routing service delivering events from Azure sources and custom publishers to subscribers using a publish/subscribe model with filtering.',
      limitations: [
        'Event size limited to 1 MB; events over 64 KB are billed in 64 KB increments.',
        'Default publish rate of 5,000 events/second per topic (Basic tier).',
        'Retries for up to 24 hours with exponential backoff before dead-lettering.',
        'Maximum of 500 event subscriptions per topic.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/event-grid/',
      free: true,
    },
    aws: {
      name: 'Amazon EventBridge',
      tagline: 'Serverless event bus',
      description:
        'A serverless event bus that ingests events from AWS services, SaaS partners, and custom apps, then routes them to targets using rules and content-based filtering.',
      limitations: [
        'PutEvents entry size limited to 256 KB per event.',
        'Default PutEvents rate of 10,000 requests/second in many Regions (soft limit).',
        'Maximum of 300 rules per event bus and 5 targets per rule.',
        'Events retried for up to 24 hours before being dropped or dead-lettered.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/eventbridge/',
      free: true,
    },
  },
  {
    id: 'integration-streaming',
    category: 'integration',
    concept: 'Event Streaming',
    azure: {
      name: 'Azure Event Hubs',
      tagline: 'Big-data event ingestion',
      description:
        'A hyperscale event streaming platform that ingests millions of events per second into partitioned streams for real-time analytics and downstream processing.',
      limitations: [
        'Event size limited to 1 MB per event.',
        'Standard tier retention of 1–7 days; partition count is fixed at creation.',
        'Throughput governed by Throughput Units (~1 MB/s ingress, 2 MB/s egress each).',
        'Maximum of 32 partitions per Standard hub; consumer groups capped at 20.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/event-hubs/',
      free: false,
    },
    aws: {
      name: 'Amazon Kinesis Data Streams',
      tagline: 'Real-time data streaming',
      description:
        'A scalable service for ingesting and processing streaming data in real time using shards, supporting multiple consumers with enhanced fan-out.',
      limitations: [
        'Each shard supports 1 MB/s or 1,000 records/second ingest and 2 MB/s read.',
        'Record payload limited to 1 MB.',
        'Data retention configurable from 24 hours up to 365 days (extended retention billed).',
        'Standard consumers share 2 MB/s per shard; enhanced fan-out limited to 20 consumers.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/kinesis/',
      free: false,
    },
  },
  {
    id: 'integration-apigateway',
    category: 'integration',
    concept: 'API Gateway & Management',
    azure: {
      name: 'Azure API Management',
      tagline: 'Full lifecycle API gateway',
      description:
        'A managed gateway to publish, secure, transform, and monitor APIs, with a developer portal, policies, rate limiting, and multi-region deployment.',
      limitations: [
        'Consumption tier throughput and request size are capped; requires higher tiers for scale.',
        'Consumption tier limits request/response payloads (buffered) to around 1 MB.',
        'Policy execution and backend timeouts are bounded (default backend timeout ~30–240s).',
        'Custom domains, VNet, and multi-region features require Premium/Developer tiers.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/api-management/',
      free: true,
    },
    aws: {
      name: 'Amazon API Gateway',
      tagline: 'Managed API front door',
      description:
        'A fully managed service to create, publish, and secure REST, HTTP, and WebSocket APIs at any scale, with throttling, authorization, and caching.',
      limitations: [
        'REST API integration timeout is a hard maximum of 29 seconds.',
        'Default account-level throttle of 10,000 requests/second with a 5,000 burst.',
        'Payload size limited to 10 MB for REST APIs (no binary chunking beyond that).',
        'Maximum of 300 routes/resources per API and 600 APIs per Region (soft limits).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/apigateway/',
      free: true,
    },
  },
  {
    id: 'integration-kafka',
    category: 'integration',
    concept: 'Managed Kafka',
    azure: {
      name: 'Azure Event Hubs for Kafka',
      tagline: 'Kafka-compatible event streaming',
      description:
        'Exposes a Kafka endpoint on Azure Event Hubs, letting existing Kafka producers and consumers stream data without running Kafka brokers.',
      limitations: [
        'Kafka Streams and some broker-level admin APIs are not fully supported.',
        'Event/message size limited to 1 MB.',
        'Partition count is fixed at creation and capped (32 on Standard).',
        'Throughput bounded by Throughput Units / Processing Units rather than raw brokers.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/event-hubs/azure-event-hubs-kafka-overview',
      free: false,
    },
    aws: {
      name: 'Amazon MSK',
      tagline: 'Fully managed Apache Kafka',
      description:
        'A fully managed Apache Kafka service that provisions, configures, and maintains Kafka clusters, offering both provisioned and serverless options.',
      limitations: [
        'Default of 90 brokers per account and 30 brokers per provisioned cluster (soft).',
        'Serverless clusters cap write throughput (~200 MB/s) and partitions per cluster.',
        'Default message size determined by broker config (1 MB default, tunable).',
        'No perpetual free tier; billed per broker-hour, storage, and data transfer.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/msk/',
      free: false,
    },
  },
];
