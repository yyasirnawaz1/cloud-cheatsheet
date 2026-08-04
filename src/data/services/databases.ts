import type { ServiceMapping } from '../types';

export const databases: ServiceMapping[] = [
  {
    id: 'databases-relational',
    category: 'databases',
    concept: 'Managed relational database',
    azure: {
      name: 'Azure SQL Database',
      tagline: 'Managed SQL Server engine',
      description:
        'Fully managed relational database built on the SQL Server engine with automated patching, backups, and high availability.',
      limitations: [
        'General Purpose single database max size is 4 TB.',
        'Maximum of 30,000 concurrent workers (requests) per database.',
        'DTU-based tiers cap at limited DTUs; vCore model needed for larger workloads.',
        'Cross-database queries are limited compared with a full SQL Server instance.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-sql/database/',
      free: true,
    },
    aws: {
      name: 'Amazon RDS',
      tagline: 'Managed relational databases',
      description:
        'Managed relational database service supporting SQL Server, Oracle, PostgreSQL, MySQL, and MariaDB engines with automated administration.',
      limitations: [
        'Maximum storage is 64 TiB for most engines (16 TiB for SQL Server).',
        'Provisioned IOPS (io1/io2) cap at 256,000 IOPS depending on engine/instance.',
        'Maximum of 40 DB instances per account by default (soft limit).',
        'Major version upgrades and some parameters require instance reboots.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/rds/',
      free: true,
    },
  },
  {
    id: 'databases-distributed-sql',
    category: 'databases',
    concept: 'Cloud-native distributed SQL',
    azure: {
      name: 'Azure SQL Hyperscale',
      tagline: 'Highly scalable managed SQL',
      description:
        'Hyperscale service tier (and SQL Managed Instance) decouples compute and storage for near-instant scaling and rapid backups up to very large databases.',
      limitations: [
        'Hyperscale supports databases up to 128 TB.',
        'Supports up to 30 named readable secondary replicas.',
        'Reverting from Hyperscale to another tier is not supported (one-way migration).',
        'Some features like long-term retention have Hyperscale-specific constraints.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-sql/database/service-tier-hyperscale',
    },
    aws: {
      name: 'Amazon Aurora',
      tagline: 'Cloud-native MySQL/PostgreSQL',
      description:
        'MySQL- and PostgreSQL-compatible relational database with distributed, fault-tolerant, self-healing storage that scales automatically.',
      limitations: [
        'Maximum cluster volume size is 128 TiB.',
        'Supports up to 15 read replicas per cluster.',
        'Storage autoscales in 10 GB increments and cannot be manually shrunk.',
        'Only MySQL and PostgreSQL engines are supported.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/',
    },
  },
  {
    id: 'databases-nosql',
    category: 'databases',
    concept: 'NoSQL document / multi-model',
    azure: {
      name: 'Azure Cosmos DB',
      tagline: 'Globally distributed multi-model',
      description:
        'Globally distributed, multi-model NoSQL database with turnkey global replication and multiple consistency levels.',
      limitations: [
        'Logical partition key value is capped at 20 GB of data.',
        'Maximum item (document) size is 2 MB.',
        'Physical partitions are limited to 10,000 RU/s throughput each.',
        'Maximum stored procedure/transaction execution is bounded (~5 seconds).',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/cosmos-db/',
      free: true,
    },
    aws: {
      name: 'Amazon DynamoDB',
      tagline: 'Serverless key-value NoSQL',
      description:
        'Fully managed serverless key-value and document database delivering single-digit millisecond performance at any scale.',
      limitations: [
        'Maximum item size is 400 KB (including attribute names and values).',
        'A single partition supports up to 3,000 RCU and 1,000 WCU.',
        'Query/Scan return a maximum of 1 MB of data per request.',
        'Transactions are limited to 100 items or 4 MB per call.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/dynamodb/',
      free: true,
    },
  },
  {
    id: 'databases-cache',
    category: 'databases',
    concept: 'In-memory cache',
    azure: {
      name: 'Azure Cache for Redis',
      tagline: 'Managed in-memory Redis',
      description:
        'Fully managed, in-memory Redis cache providing sub-millisecond data access to accelerate applications.',
      limitations: [
        'Maximum cache size is 1.2 TB (Enterprise/Enterprise Flash tiers).',
        'Basic tier has no SLA and runs on a single node with no replication.',
        'Number of client connections is capped per tier (e.g. 40,000 on some tiers).',
        'Clustering is only available on Premium and Enterprise tiers.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/azure-cache-for-redis/',
    },
    aws: {
      name: 'Amazon ElastiCache',
      tagline: 'Managed Redis and Memcached',
      description:
        'Fully managed in-memory caching service compatible with Redis (Valkey) and Memcached for low-latency data access.',
      limitations: [
        'Redis supports up to 500 nodes (shards) per cluster with cluster mode enabled.',
        'Memcached clusters are limited to 40 nodes per cluster.',
        'Maximum item size in Memcached is 1 MB by default.',
        'Redis is single-threaded per node, bounding per-node CPU throughput.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/elasticache/',
    },
  },
  {
    id: 'databases-postgresql',
    category: 'databases',
    concept: 'Managed PostgreSQL',
    azure: {
      name: 'Azure Database for PostgreSQL',
      tagline: 'Managed PostgreSQL service',
      description:
        'Fully managed community PostgreSQL with the Flexible Server deployment model offering zone-redundant HA and burstable to memory-optimized compute.',
      limitations: [
        'Flexible Server maximum storage is 32 TiB per instance.',
        'Maximum vCores depend on SKU (up to 96 vCores on memory-optimized).',
        'Storage cannot be scaled down after being increased.',
        'Some extensions must be explicitly allow-listed via server parameters.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/postgresql/',
      free: true,
    },
    aws: {
      name: 'Amazon RDS for PostgreSQL',
      tagline: 'Managed PostgreSQL on RDS',
      description:
        'Managed community PostgreSQL on Amazon RDS with automated backups, patching, read replicas, and Multi-AZ deployments.',
      limitations: [
        'Maximum storage is 64 TiB per instance.',
        'Supports up to 15 read replicas per source instance.',
        'Superuser access is restricted; only the rds_superuser role is granted.',
        'Certain extensions are unavailable or must be enabled via parameter groups.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html',
      free: true,
    },
  },
  {
    id: 'databases-mysql',
    category: 'databases',
    concept: 'Managed MySQL',
    azure: {
      name: 'Azure Database for MySQL',
      tagline: 'Managed MySQL service',
      description:
        'Fully managed community MySQL using the Flexible Server model with zone-redundant high availability and stop/start compute.',
      limitations: [
        'Flexible Server maximum storage is 16 TiB per instance.',
        'Maximum number of connections scales with compute size (memory-bound).',
        'Storage size cannot be reduced once increased.',
        'Only InnoDB is fully supported for HA; some storage engines are restricted.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/mysql/',
      free: true,
    },
    aws: {
      name: 'Amazon RDS for MySQL',
      tagline: 'Managed MySQL on RDS',
      description:
        'Managed community MySQL on Amazon RDS with automated administration, read replicas, and Multi-AZ failover.',
      limitations: [
        'Maximum storage is 64 TiB per instance.',
        'Supports up to 15 read replicas per source instance.',
        'SUPER privilege is not granted; some admin tasks use RDS procedures.',
        'Maximum connections are bounded by instance memory (parameter-driven).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html',
      free: true,
    },
  },
  {
    id: 'databases-graph',
    category: 'databases',
    concept: 'Graph database',
    azure: {
      name: 'Azure Cosmos DB Gremlin API',
      tagline: 'Managed graph via Gremlin',
      description:
        'Graph database service built on Cosmos DB exposing the Apache TinkerPop Gremlin API for storing and traversing graph data.',
      limitations: [
        'Inherits the 20 GB logical partition limit from Cosmos DB.',
        'Maximum item size is 2 MB per vertex/edge document.',
        'Gremlin bytecode and some traversal steps are not fully supported.',
        'Cross-partition graph traversals consume significant RU/s.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/cosmos-db/gremlin/',
    },
    aws: {
      name: 'Amazon Neptune',
      tagline: 'Managed graph database',
      description:
        'Fully managed graph database supporting property graph (Gremlin, openCypher) and RDF/SPARQL query models.',
      limitations: [
        'Maximum cluster volume size is 128 TiB.',
        'Supports up to 15 read replicas per cluster.',
        'A single query is bounded by the instance memory available for traversal.',
        'Mixing property-graph and RDF data models in one cluster is not supported.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/neptune/',
    },
  },
  {
    id: 'databases-warehouse',
    category: 'databases',
    concept: 'Data warehouse',
    azure: {
      name: 'Azure Synapse Analytics',
      tagline: 'Enterprise analytics warehouse',
      description:
        'Integrated analytics platform combining dedicated SQL pools (MPP data warehouse), serverless SQL, and Spark for large-scale analytics.',
      limitations: [
        'Dedicated SQL pool supports a maximum of 128 concurrent queries.',
        'A maximum of 1,000 active concurrent connections per dedicated SQL pool.',
        'Distributed tables use exactly 60 distributions, affecting skew.',
        'Some T-SQL features available in Azure SQL are unsupported in dedicated pools.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/synapse-analytics/',
    },
    aws: {
      name: 'Amazon Redshift',
      tagline: 'Petabyte-scale data warehouse',
      description:
        'Fully managed, petabyte-scale MPP data warehouse for running complex analytic queries against structured and semi-structured data.',
      limitations: [
        'Maximum of 50 concurrent queries per cluster (with concurrency scaling for bursts).',
        'A single row is limited to 4 MB (and 65,535 bytes for VARCHAR/text).',
        'Maximum of 1,600 columns per table.',
        'Maximum of 100,000 tables on large node types (fewer on smaller ones).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/redshift/',
    },
  },
];
