import type { ServiceMapping } from '../types';

export const compute: ServiceMapping[] = [
  {
    id: 'compute-virtual-machines',
    category: 'compute',
    concept: 'Virtual Machines (IaaS)',
    azure: {
      name: 'Azure Virtual Machines',
      tagline: 'On-demand Linux and Windows VMs',
      description:
        'Provision on-demand, scalable Linux or Windows virtual machines with full control over the OS, networking, and storage.',
      limitations: [
        'Default subscription quota of 20 vCPUs per region (soft, must request increases per region and VM family).',
        'Managed OS disk is capped at 4 TiB, and disk size directly influences IOPS/throughput tiers.',
        'Not all VM sizes (e.g. GPU or high-memory SKUs) are available in every region or availability zone.',
        'Single-instance VMs using premium/ultra disks carry a 99.9% SLA; higher SLAs require availability sets or zones.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-machines/',
    },
    aws: {
      name: 'Amazon EC2',
      tagline: 'Resizable cloud compute capacity',
      description:
        'Launch resizable virtual servers (instances) in the cloud with a wide selection of instance types, AMIs, and pricing models.',
      limitations: [
        'Default On-Demand vCPU limits are per-region and per instance-family (e.g. standard family starts around 5 vCPUs, soft limit).',
        'Default soft limit of 5 Elastic IP addresses per region.',
        'EBS-backed instances are limited by instance type for attachable volumes and aggregate EBS bandwidth.',
        'Some instance types are only available in specific regions and Availability Zones.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/ec2/',
    },
  },
  {
    id: 'compute-autoscaling',
    category: 'compute',
    concept: 'VM autoscaling groups',
    azure: {
      name: 'Azure Virtual Machine Scale Sets',
      tagline: 'Autoscaling identical VM fleets',
      description:
        'Deploy and manage a group of load-balanced, identical VMs that automatically scale in or out based on demand or a schedule.',
      limitations: [
        'A scale set supports up to 1,000 VMs using a single marketplace image (100 with custom images) in Uniform orchestration.',
        'Autoscale evaluates metrics on a cadence (default 5-minute aggregation), so scaling reactions are not instantaneous.',
        'Flexible orchestration mode has feature differences and lower per-set instance limits than Uniform mode.',
        'Mixing multiple VM sizes/families requires Flexible orchestration; Uniform sets use a single size.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-machine-scale-sets/',
    },
    aws: {
      name: 'AWS EC2 Auto Scaling Groups',
      tagline: 'Maintain and scale EC2 fleets',
      description:
        'Automatically add or remove EC2 instances to maintain a desired capacity and respond to demand using scaling policies and health checks.',
      limitations: [
        'Default soft limit of 500 Auto Scaling groups and 2,500 launch configurations per region.',
        'Default cooldown period is 300 seconds, which can delay successive scaling actions.',
        'Instance launches are still bounded by the account EC2 vCPU service quotas.',
        'Launch configurations are legacy and do not support newer features; launch templates are recommended.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/autoscaling/ec2/userguide/',
    },
  },
  {
    id: 'compute-spot-vms',
    category: 'compute',
    concept: 'Discounted interruptible VMs',
    azure: {
      name: 'Azure Spot Virtual Machines',
      tagline: 'Deeply discounted spare capacity',
      description:
        'Run workloads on unused Azure capacity at steep discounts, with the trade-off that instances can be evicted when capacity is needed.',
      limitations: [
        'VMs can be evicted with only 30 seconds of notice when Azure reclaims capacity.',
        'No SLA is offered on Spot VMs, and capacity is not guaranteed to be available.',
        'Spot is unsupported for certain VM series (e.g. B-series burstable and some specialized SKUs).',
        'Evicted instances are not automatically recreated unless paired with a scale set eviction policy.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-machines/spot-vms',
    },
    aws: {
      name: 'Amazon EC2 Spot Instances',
      tagline: 'Spare capacity at steep discounts',
      description:
        'Use spare EC2 capacity at up to 90% off On-Demand prices for fault-tolerant, flexible, and interruptible workloads.',
      limitations: [
        'Spot instances receive a two-minute interruption notice before reclamation.',
        'Availability and price fluctuate by instance type and Availability Zone; capacity is not guaranteed.',
        'Default Spot vCPU service quotas apply per region and can require increase requests.',
        'Not ideal for stateful or long-running workloads that cannot tolerate interruption.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html',
    },
  },
  {
    id: 'compute-dedicated-hosts',
    category: 'compute',
    concept: 'Single-tenant physical hosts',
    azure: {
      name: 'Azure Dedicated Host',
      tagline: 'Physical servers for your VMs',
      description:
        'Provision physical servers dedicated to a single organization to host Azure VMs, supporting hardware isolation and bring-your-own-license scenarios.',
      limitations: [
        'A host is tied to a single VM series/type family, so you cannot mix arbitrary VM families on one host.',
        'Dedicated hosts are region- and zone-specific and priced per host regardless of VM utilization.',
        'You are responsible for placing VMs efficiently to avoid wasted capacity on the host.',
        'Some Azure features (e.g. certain autoscale scenarios) are constrained on dedicated hosts.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-machines/dedicated-hosts',
    },
    aws: {
      name: 'Amazon EC2 Dedicated Hosts',
      tagline: 'Dedicated physical EC2 servers',
      description:
        'Reserve entire physical servers dedicated to your use, giving visibility into sockets/cores for licensing and compliance requirements.',
      limitations: [
        'Each host supports a limited set of instance types/families depending on host configuration.',
        'Default host limits apply per instance family per region and may need quota increases.',
        'You pay per host whether or not the underlying capacity is fully used.',
        'Host-level placement and licensing tracking add operational overhead versus shared tenancy.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html',
    },
  },
  {
    id: 'compute-batch',
    category: 'compute',
    concept: 'Managed batch computing',
    azure: {
      name: 'Azure Batch',
      tagline: 'Large-scale parallel job scheduling',
      description:
        'Schedule and run large-scale parallel and high-performance computing (HPC) batch jobs across a managed pool of VMs.',
      limitations: [
        'Default quota of 20 pools and limited dedicated/low-priority cores per Batch account (soft, increasable).',
        'Compute node cores draw from the same regional vCPU quotas as VMs.',
        'Active job and task limits per account can require quota increases for very large workloads.',
        'Pool resize and node allocation are not instantaneous and depend on regional capacity.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/batch/',
    },
    aws: {
      name: 'AWS Batch',
      tagline: 'Fully managed batch processing',
      description:
        'Dynamically provision compute resources to run batch computing jobs on EC2 or Fargate without managing the underlying scheduler.',
      limitations: [
        'Default soft limits on job queues, compute environments, and jobs submitted per region.',
        'Underlying capacity is bound by EC2/Fargate service quotas for the account.',
        'Array jobs are capped (up to 10,000 child jobs per array job).',
        'Fargate-backed jobs inherit Fargate resource sizing and vCPU limits.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/batch/',
    },
  },
  {
    id: 'compute-paas-web-hosting',
    category: 'compute',
    concept: 'Managed PaaS web hosting',
    azure: {
      name: 'Azure App Service',
      tagline: 'Managed hosting for web apps',
      description:
        'A fully managed platform for building, deploying, and scaling web apps and APIs without managing the underlying infrastructure.',
      limitations: [
        'Free and Shared tiers cap daily CPU minutes (e.g. 60 CPU-min/day on Free) and lack custom domains/SSL on Free.',
        'Scale-out instance counts are bounded by the pricing tier (e.g. up to 30 instances on Premium v3).',
        'Always On and deployment slots are unavailable on the Free/Shared tiers.',
        'Each App Service plan is tied to a single region.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/app-service/',
      free: true,
    },
    aws: {
      name: 'AWS Elastic Beanstalk / App Runner',
      tagline: 'Deploy and run web apps',
      description:
        'Elastic Beanstalk orchestrates EC2, load balancing, and scaling for your uploaded app, while App Runner runs containerized web apps and APIs fully managed.',
      limitations: [
        'Elastic Beanstalk defaults to soft limits of ~75 applications and ~200 environments per region.',
        'Elastic Beanstalk provisions and bills the underlying EC2/ELB/ASG resources you must still manage.',
        'App Runner has per-region service quotas and supported-region constraints.',
        'App Runner auto-scaling concurrency and max instance counts are bounded by configurable service limits.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/elasticbeanstalk/',
      free: true,
    },
  },
];
