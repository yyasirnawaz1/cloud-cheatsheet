import type { ServiceMapping } from '../types';

export const iot: ServiceMapping[] = [
  {
    id: 'iot-core',
    category: 'iot',
    concept: 'IoT Device Connectivity',
    azure: {
      name: 'Azure IoT Hub',
      tagline: 'Managed device-to-cloud messaging',
      description:
        'Managed service enabling secure, bi-directional communication between IoT devices and the cloud, with per-device identity, device twins, and multiple messaging protocols.',
      limitations: [
        'Cloud-to-device and device-to-cloud message size limited to 256 KB.',
        'Daily message quota is tier-based (e.g. S1 = 400,000 messages/day per unit).',
        'Max 50 units per S1/S2/S3 IoT hub (via support beyond that).',
        'Device twin document size limited to 8 KB per tags/desired/reported section.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/iot-hub/',
      free: true,
    },
    aws: {
      name: 'AWS IoT Core',
      tagline: 'Connect devices to the cloud',
      description:
        'Managed cloud service that lets connected devices securely interact with cloud applications and other devices using MQTT, HTTP, and WebSockets, with a device registry and rules engine.',
      limitations: [
        'MQTT message payload limited to 128 KB (message broker) per publish.',
        'Max 100 subscriptions per MQTT connection and default inbound/outbound publish TPS limits.',
        'Device Shadow document size limited to 8 KB.',
        'Default limit of 500,000 things per account and connection-rate quotas per account (soft).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/iot/',
      free: true,
    },
  },
  {
    id: 'iot-platform',
    category: 'iot',
    concept: 'IoT Application Platform / Fleet Management',
    azure: {
      name: 'Azure IoT Central',
      tagline: 'Managed IoT SaaS app platform',
      description:
        'Fully managed IoT application platform (aPaaS) that simplifies building IoT solutions with device templates, dashboards, rules, and analytics without managing backend infrastructure.',
      limitations: [
        'Device data export and API operations subject to per-application rate limits.',
        'Retention of raw telemetry in the app is limited (~30 days) before it must be exported.',
        'Device template and instance counts scale with the paid tier and are capped per app.',
        'Less low-level control than a custom IoT Hub–based solution.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/iot-central/',
      free: true,
    },
    aws: {
      name: 'AWS IoT Device Management',
      tagline: 'Onboard, organize & manage fleets',
      description:
        'Service to register, organize, monitor, and remotely manage IoT devices at scale, with fleet indexing, thing groups, bulk registration, jobs, and secure tunneling.',
      limitations: [
        'Max 100 dynamic thing groups and hierarchical group depth of 7 levels.',
        'Bulk registration limited to a bounded number of things per task.',
        'Jobs: per-account limits on concurrent jobs and job document size (32 KB).',
        'Fleet indexing and secure tunneling incur additional per-use charges.',
      ],
      docsUrl:
        'https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-management.html',
      free: false,
    },
  },
  {
    id: 'iot-edge',
    category: 'iot',
    concept: 'Edge Compute for IoT',
    azure: {
      name: 'Azure IoT Edge',
      tagline: 'Run cloud workloads at the edge',
      description:
        'Deploys and runs containerized cloud workloads (Azure services, AI, custom code) locally on edge devices, managed from IoT Hub with offline operation and store-and-forward.',
      limitations: [
        'Modules run as Docker/Moby containers, so the edge host must support a container runtime.',
        'Edge-to-cloud messaging still bound by IoT Hub 256 KB message limits.',
        'Constrained/microcontroller devices are not supported (needs a Linux/Windows host).',
        'Module deployment manifests and twin sizes subject to IoT Hub limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/iot-edge/',
      free: true,
    },
    aws: {
      name: 'AWS IoT Greengrass',
      tagline: 'Edge runtime for IoT devices',
      description:
        'Open-source edge runtime and cloud service to build, deploy, and manage device software, running Lambda functions, containers, and ML inference locally with cloud sync.',
      limitations: [
        'Core device requires a supported OS with sufficient CPU/memory (not for tiny MCUs).',
        'Local messaging and cloud sync still bound by IoT Core 128 KB payload limits.',
        'Component deployment size and number of components per deployment are bounded.',
        'Stream Manager and local storage limited by the device’s disk and configuration.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/greengrass/',
      free: true,
    },
  },
  {
    id: 'iot-timeseries',
    category: 'iot',
    concept: 'Time-Series Data Store & Analytics',
    azure: {
      name: 'Azure Data Explorer',
      tagline: 'Fast time-series analytics',
      description:
        'Fully managed, high-performance analytics service for real-time analysis of large volumes of telemetry, logs, and time-series data using the Kusto Query Language (KQL).',
      limitations: [
        'Cluster capacity is bounded by chosen VM SKU and node count; scaling has warm-up time.',
        'Ingestion has per-cluster throughput limits and a default batching latency (~5 min or 1 GB).',
        'Query result set default limited to 500,000 rows / 64 MB unless overridden.',
        'Cross-cluster/cross-database queries add latency and have concurrency limits.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/data-explorer/',
      free: true,
    },
    aws: {
      name: 'Amazon Timestream',
      tagline: 'Serverless time-series database',
      description:
        'Fast, scalable, serverless time-series database for IoT and operational applications, with automatic tiering between a memory store and a cost-optimized magnetic store.',
      limitations: [
        'Single record limited to 100 dimensions and 2,048 bytes per dimension value.',
        'Memory store retention configurable up to 1 year; magnetic up to 200 years.',
        'Default per-account quotas on databases, tables, and query TCUs (soft).',
        'Late-arriving data outside the memory-store window is rejected unless magnetic writes are enabled.',
      ],
      docsUrl:
        'https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html',
      free: true,
    },
  },
  {
    id: 'iot-provisioning',
    category: 'iot',
    concept: 'Zero-touch Device Provisioning',
    azure: {
      name: 'Azure Device Provisioning Service',
      tagline: 'Zero-touch IoT device onboarding',
      description:
        'Helper service for IoT Hub that enables zero-touch, just-in-time provisioning of devices to the right hub without hardcoding credentials, using enrollment groups and attestation.',
      limitations: [
        'Max 10 linked IoT hubs per DPS instance and 100 DPS instances per subscription.',
        'Supports TPM, X.509, and symmetric-key attestation only.',
        'Enrollment group and individual-enrollment counts are quota-limited per instance.',
        'Registration throughput is rate-limited (registrations per minute) per instance.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/iot-dps/',
      free: true,
    },
    aws: {
      name: 'AWS IoT Device Provisioning',
      tagline: 'Register & provision at scale',
      description:
        'Fleet provisioning capability in AWS IoT Core that lets devices obtain certificates and register just-in-time using provisioning templates, claim certificates, or trusted user flows.',
      limitations: [
        'Provisioning template document size limited to 10 KB.',
        'Fleet provisioning by claim subject to per-account certificate signing and registration TPS limits.',
        'Just-in-time provisioning requires a registered CA certificate per account/region.',
        'Number of certificates and policies per thing/account governed by IoT Core quotas.',
      ],
      docsUrl:
        'https://docs.aws.amazon.com/iot/latest/developerguide/iot-provision.html',
      free: true,
    },
  },
];
