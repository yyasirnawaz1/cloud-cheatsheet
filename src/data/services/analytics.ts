import type { ServiceMapping } from '../types';

export const analytics: ServiceMapping[] = [
  {
    id: 'analytics-warehouse',
    category: 'analytics',
    concept: 'Cloud Data Warehouse',
    azure: {
      name: 'Azure Synapse Analytics',
      tagline: 'Enterprise analytics & data warehousing',
      description:
        'Unified analytics platform combining dedicated/serverless SQL pools, Spark, and pipelines for large-scale data warehousing and analytics over relational and big-data sources.',
      limitations: [
        'Dedicated SQL pool scales in DWU units up to DW30000c; max 128 concurrent queries per pool.',
        'Max 10,000 open concurrent sessions per dedicated SQL pool.',
        'Row size limit of 1 MB; up to 10,000 tables per dedicated SQL pool.',
        'Synapse Link and some features require specific regions and are not available everywhere.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/synapse-analytics/',
      free: false,
    },
    aws: {
      name: 'Amazon Redshift',
      tagline: 'Petabyte-scale data warehouse',
      description:
        'Fully managed, columnar MPP data warehouse for running complex analytic queries against structured and semi-structured data, with Redshift Serverless and RA3 provisioned options.',
      limitations: [
        'Max 500 concurrent user connections per provisioned cluster.',
        'Default limit of 50 concurrent queries per cluster (WLM-dependent).',
        'Max 100 databases and 9,900 schemas per database per cluster.',
        'Stored procedure nesting limited to 16 levels; some SQL differs from PostgreSQL.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/redshift/',
      free: true,
    },
  },
  {
    id: 'analytics-spark',
    category: 'analytics',
    concept: 'Big Data / Apache Spark',
    azure: {
      name: 'Azure Databricks',
      tagline: 'Unified lakehouse & Spark analytics',
      description:
        'First-party Apache Spark–based analytics and lakehouse platform for data engineering, ML, and collaborative notebooks, integrated with Azure identity, storage, and networking.',
      limitations: [
        'Cluster and job counts constrained by regional vCPU quotas on the underlying VMs.',
        'Default limit of ~1,000 concurrent jobs per workspace and 145 jobs a workspace can create per hour via API.',
        'Some SKUs/features (e.g. serverless compute) are limited to specific regions.',
        'Premium features like Unity Catalog and RBAC require the Premium tier.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/databricks/',
      free: false,
    },
    aws: {
      name: 'Amazon EMR',
      tagline: 'Managed Hadoop & Spark clusters',
      description:
        'Managed big-data platform for running Apache Spark, Hadoop, Hive, Presto, and more on EC2, EKS, or EMR Serverless, for large-scale processing and ETL.',
      limitations: [
        'Cluster size bounded by EC2 On-Demand/Spot vCPU service quotas per region.',
        'Default limit of active clusters and steps per account (soft, raisable via quotas).',
        'Max 256 steps that can be active or completed on a cluster at once.',
        'EMR Serverless jobs subject to per-account aggregate vCPU/memory quotas.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/emr/',
      free: false,
    },
  },
  {
    id: 'analytics-stream',
    category: 'analytics',
    concept: 'Real-time Stream Analytics',
    azure: {
      name: 'Azure Stream Analytics',
      tagline: 'Real-time event stream processing',
      description:
        'Fully managed, SQL-based real-time analytics engine for processing streaming data from Event Hubs, IoT Hub, and Blob Storage with sub-second latency.',
      limitations: [
        'Throughput measured in Streaming Units (SUs); default max 192 SUs per job (raisable).',
        'Max 60 inputs and 60 outputs per Stream Analytics job.',
        'Query uses a SQL-like subset; not all T-SQL functions are supported.',
        'Reference data blob limited to 5 GB per job.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/stream-analytics/',
      free: false,
    },
    aws: {
      name: 'Amazon Kinesis Data Analytics',
      tagline: 'Managed Apache Flink streaming',
      description:
        'Managed service (Amazon Managed Service for Apache Flink) to transform and analyze streaming data in real time using Apache Flink applications in Java, Scala, Python, or SQL.',
      limitations: [
        'Application parallelism scales via Kinesis Processing Units (KPUs), 1 KPU = 1 vCPU + 4 GB.',
        'Default max of 64 KPUs per application (soft limit).',
        'Legacy SQL applications are on a deprecation path in favor of Apache Flink.',
        'Application state and durable storage subject to per-KPU running-storage limits.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/managed-flink/',
      free: false,
    },
  },
  {
    id: 'analytics-kafka',
    category: 'analytics',
    concept: 'Managed Kafka / Event Streaming',
    azure: {
      name: 'Azure Event Hubs',
      tagline: 'Big-data event ingestion',
      description:
        'Fully managed, real-time data ingestion service that can receive and process millions of events per second, with a Kafka-compatible endpoint for existing Kafka clients.',
      limitations: [
        'Standard tier: 1 MB/s or 1,000 events/s ingress per throughput unit (max 40 TUs).',
        'Max 32 consumer groups per event hub (Standard); 1,000 (Premium/Dedicated).',
        'Standard tier default message retention limited to 7 days (up to 90 on Premium/Dedicated).',
        'Max event/message size of 1 MB per publish.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/event-hubs/',
      free: false,
    },
    aws: {
      name: 'Amazon MSK',
      tagline: 'Fully managed Apache Kafka',
      description:
        'Fully managed Apache Kafka service that provisions, configures, and maintains Kafka clusters (provisioned or serverless) for building streaming data pipelines and applications.',
      limitations: [
        'Provisioned: default max 90 brokers per account and 30 brokers per cluster (soft).',
        'MSK Serverless: max 200 MB/s write and 400 MB/s read throughput per cluster.',
        'MSK Serverless limits partitions to 2,400 per cluster.',
        'Broker storage and partition counts constrained by chosen instance type.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/msk/',
      free: false,
    },
  },
  {
    id: 'analytics-etl',
    category: 'analytics',
    concept: 'Data Integration / ETL',
    azure: {
      name: 'Azure Data Factory',
      tagline: 'Cloud data integration & ETL',
      description:
        'Serverless, hybrid data integration service for orchestrating and automating data movement and transformation with 90+ connectors and mapping data flows built on Spark.',
      limitations: [
        'Max 100 concurrent pipeline activity runs per pipeline.',
        'Default 5,000 concurrent External activity runs and 3,000 pipeline activity runs per subscription per region.',
        'Max 40 activities per pipeline.',
        'Data flow debug session default timeout and cluster TTL limits apply.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/data-factory/',
      free: false,
    },
    aws: {
      name: 'AWS Glue',
      tagline: 'Serverless data integration',
      description:
        'Serverless ETL and data integration service that discovers, catalogs, cleans, and transforms data using Spark or Python shell jobs, with a central Data Catalog.',
      limitations: [
        'Default limit of 200 concurrent job runs per account and 25 triggers per account (soft).',
        'Each DPU provides 4 vCPU and 16 GB; jobs default to a limited max DPU count.',
        'Data Catalog: default 1,000,000 tables per account (soft, raisable).',
        'Python shell jobs limited to 1 or 0.0625 DPU.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/glue/',
      free: false,
    },
  },
  {
    id: 'analytics-query',
    category: 'analytics',
    concept: 'Interactive Query on Object Storage',
    azure: {
      name: 'Azure Synapse Serverless SQL',
      tagline: 'Query data lakes with T-SQL',
      description:
        'Serverless SQL pool in Synapse that lets you query files (Parquet, CSV, JSON, Delta) directly in Azure Data Lake Storage using T-SQL, paying per TB of data processed.',
      limitations: [
        'Billing is per TB of data processed; poorly partitioned scans get expensive.',
        'Result set size limited (~200 GB) and long-running queries may hit 30-minute limits.',
        'No dedicated compute control — concurrency is managed automatically.',
        'CETAS and some T-SQL/DML operations are not fully supported.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/synapse-analytics/sql/on-demand-workspace-overview',
      free: false,
    },
    aws: {
      name: 'Amazon Athena',
      tagline: 'Serverless SQL over S3',
      description:
        'Serverless interactive query service to analyze data directly in Amazon S3 (and federated sources) using standard SQL powered by Trino/Presto, billed per TB scanned.',
      limitations: [
        'Billed at ~$5 per TB of data scanned (engine v3), so full scans are costly.',
        'Default DML query timeout of 30 minutes and DDL timeout of 600 seconds.',
        'Default 20–25 concurrent DML queries per account per region (soft).',
        'No support for transactions across arbitrary tables (except Iceberg/ACID formats).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/athena/',
      free: false,
    },
  },
  {
    id: 'analytics-bi',
    category: 'analytics',
    concept: 'Business Intelligence / Visualization',
    azure: {
      name: 'Microsoft Power BI',
      tagline: 'Interactive dashboards & reports',
      description:
        'Business analytics service for creating interactive reports and dashboards from many data sources, with self-service modeling, DAX, and broad Microsoft 365 integration.',
      limitations: [
        'Pro per-dataset model size limited to 1 GB; Premium/PPU up to 400 GB (capacity-dependent).',
        'Scheduled refresh limited to 8/day on Pro (48/day on Premium).',
        'Individual published report file (.pbix) upload limited to 1 GB (Pro).',
        'Some features (paginated reports, large models, deployment pipelines) require Premium/PPU.',
      ],
      docsUrl: 'https://learn.microsoft.com/power-bi/',
      free: true,
    },
    aws: {
      name: 'Amazon QuickSight',
      tagline: 'Serverless BI dashboards',
      description:
        'Serverless, scalable BI service for building interactive dashboards and paginated reports, with the in-memory SPICE engine and ML-powered insights and Q natural-language queries.',
      limitations: [
        'SPICE dataset limited to 1 billion rows or 1 TB per dataset (Enterprise).',
        'Max 500 columns per SPICE dataset and 2 GB per data ingestion for some sources.',
        'Standard edition lacks row-level security, VPC connectivity, and Active Directory.',
        'Per-user SPICE capacity and reader session pricing quotas apply.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/quicksight/',
      free: true,
    },
  },
  {
    id: 'analytics-search',
    category: 'analytics',
    concept: 'Search & Indexing',
    azure: {
      name: 'Azure AI Search',
      tagline: 'AI-powered cloud search',
      description:
        'Managed search-as-a-service with full-text search, vector and hybrid search, semantic ranking, and AI enrichment pipelines for building search over heterogeneous content.',
      limitations: [
        'Free tier limited to 3 indexes, 50 MB storage, and no SLA.',
        'Max 1,000 indexes and 3,000 fields per index (service-tier dependent).',
        'Indexers have per-tier document-size and run-duration limits (e.g. 2–24 hour caps).',
        'Semantic ranker and higher storage require Standard/Storage-Optimized tiers.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/search/',
      free: true,
    },
    aws: {
      name: 'Amazon OpenSearch Service',
      tagline: 'Managed OpenSearch & Elasticsearch',
      description:
        'Managed OpenSearch/Elasticsearch service for search, log analytics, and observability, offering managed clusters and OpenSearch Serverless collections with built-in dashboards.',
      limitations: [
        'Default limit of 200 nodes per domain and 20 domains per account per region (soft).',
        'Max shard sizes and per-instance shard counts constrain cluster sizing.',
        'Some instance types cap EBS volume size per node.',
        'Serverless collections have OCU-based capacity and per-account limits.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/opensearch-service/',
      free: true,
    },
  },
];
