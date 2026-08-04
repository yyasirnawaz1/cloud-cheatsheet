import type { ServiceMapping } from '../types';

export const containers: ServiceMapping[] = [
  {
    id: 'containers-kubernetes',
    category: 'containers',
    concept: 'Managed Kubernetes',
    azure: {
      name: 'Azure Kubernetes Service (AKS)',
      tagline: 'Managed Kubernetes control plane',
      description:
        'A managed Kubernetes service that hosts and maintains the control plane while you manage worker node pools for your containerized workloads.',
      limitations: [
        'Default maximum of 5,000 nodes per cluster and 1,000 nodes per node pool (with limits per Availability Zone).',
        'Free tier offers no control-plane SLA; a financially backed uptime SLA requires the Standard tier.',
        'Default limit of around 100 node pools per cluster and 250 pods per node (kubenet lower).',
        'Kubernetes version support follows an N-2 window, forcing periodic mandatory upgrades.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/aks/',
      free: true,
    },
    aws: {
      name: 'Amazon EKS',
      tagline: 'Managed Kubernetes on AWS',
      description:
        'A managed Kubernetes service that runs the upstream control plane across multiple Availability Zones and integrates with AWS networking and IAM.',
      limitations: [
        'The control plane costs a flat hourly fee per cluster in addition to worker compute.',
        'Default soft limit of 100 EKS clusters per region.',
        'VPC-CNI pods-per-node density is bounded by the ENI/IP capacity of the instance type.',
        'Each Kubernetes version is supported for a limited period before forced upgrade or extended-support charges.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/eks/',
    },
  },
  {
    id: 'containers-serverless',
    category: 'containers',
    concept: 'Serverless containers',
    azure: {
      name: 'Azure Container Apps',
      tagline: 'Serverless containers with scaling',
      description:
        'Run containerized apps and microservices serverlessly on a managed Kubernetes-based platform with built-in autoscaling, including scale-to-zero.',
      limitations: [
        'Consumption workload profile caps a replica at 4 vCPU and 8 GiB memory.',
        'Default quotas limit cores and environments per subscription/region (soft, increasable).',
        'Scale-to-zero introduces cold starts when traffic resumes.',
        'Direct low-level Kubernetes API access is not exposed since the platform is abstracted.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/container-apps/',
      free: true,
    },
    aws: {
      name: 'AWS Fargate',
      tagline: 'Serverless compute for containers',
      description:
        'A serverless compute engine for containers that runs ECS or EKS tasks without provisioning or managing EC2 instances.',
      limitations: [
        'Task sizes are fixed to supported vCPU/memory combinations (0.25 vCPU up to 16 vCPU / 120 GB).',
        'Default ephemeral storage is 20 GB, configurable up to 200 GB per task.',
        'Fargate cold starts add latency versus warm EC2-backed tasks.',
        'Default soft quotas cap concurrent Fargate tasks/vCPUs per region.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonECS/latest/userguide/what-is-fargate.html',
    },
  },
  {
    id: 'containers-simple-hosting',
    category: 'containers',
    concept: 'Simple container hosting',
    azure: {
      name: 'Azure Container Instances',
      tagline: 'Run a container in seconds',
      description:
        'Run individual containers or container groups on demand without orchestration, ideal for simple, short-lived, or burst workloads.',
      limitations: [
        'A single container group is capped at 4 vCPU and 16 GB memory on the standard offering.',
        'No built-in autoscaling or load balancing; orchestration must be handled externally.',
        'Default quotas limit container groups and cores per region (soft, increasable).',
        'GPU support is limited to specific regions and SKUs.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/container-instances/',
    },
    aws: {
      name: 'Amazon ECS',
      tagline: 'AWS-native container orchestration',
      description:
        'A fully managed container orchestration service that runs and scales Docker containers on EC2 or Fargate using tasks and services.',
      limitations: [
        'Default soft limit of 5,000 services per cluster and 5,000 tasks per service.',
        'EC2 launch type requires you to manage and patch the underlying container instances.',
        'Task definition size and container-per-task counts have hard limits.',
        'Service scaling reacts to CloudWatch metric periods rather than instantly.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/',
    },
  },
  {
    id: 'containers-registry',
    category: 'containers',
    concept: 'Container image registry',
    azure: {
      name: 'Azure Container Registry',
      tagline: 'Private registry for images',
      description:
        'A managed private Docker/OCI registry for storing and distributing container images and related artifacts with built-in geo-replication.',
      limitations: [
        'Storage and included features are tiered; geo-replication and higher throughput require the Premium tier.',
        'Each tier caps included storage, webhooks, and image-pull throughput (ReadOps/WriteOps).',
        'Geo-replication is a Premium-only capability.',
        'Registry name must be globally unique and is limited to alphanumeric characters.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/container-registry/',
    },
    aws: {
      name: 'Amazon ECR',
      tagline: 'Managed container image registry',
      description:
        'A fully managed container registry for storing, versioning, and deploying OCI images with tight IAM and ECS/EKS integration.',
      limitations: [
        'Default soft limit of 10,000 repositories per region and 10,000 images per repository.',
        'Image layer size is capped (individual layer parts up to 10 MiB, image up to ~10 GiB via manifest limits).',
        'Cross-region replication must be explicitly configured.',
        'API request rates are throttled per account/region.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/AmazonECR/latest/userguide/',
    },
  },
  {
    id: 'containers-web-app',
    category: 'containers',
    concept: 'Web app for containers',
    azure: {
      name: 'Azure App Service for Containers',
      tagline: 'Host containers as web apps',
      description:
        'Run a custom Linux container image as a fully managed web app on App Service, with built-in scaling, custom domains, and TLS.',
      limitations: [
        'Custom containers require a Basic tier or higher (not available on Free/Shared).',
        'Only one custom container image per app for single-container Web App for Containers.',
        'Scale-out instance count is bounded by the App Service plan tier.',
        'Container startup must complete within the platform health-check window or the app is recycled.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/app-service/configure-custom-container',
    },
    aws: {
      name: 'AWS App Runner',
      tagline: 'Run containerized web apps',
      description:
        'A fully managed service that builds and runs containerized web applications and APIs from a source image or repository with automatic scaling and TLS.',
      limitations: [
        'Each instance is limited to supported vCPU/memory combinations (up to 4 vCPU / 12 GB).',
        'Available in a limited set of regions compared to core AWS services.',
        'Default soft quotas cap services and concurrent instances per account/region.',
        'Only HTTP/HTTPS web workloads are supported (no arbitrary TCP/UDP).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/apprunner/',
    },
  },
  {
    id: 'containers-openshift',
    category: 'containers',
    concept: 'Managed Red Hat OpenShift',
    azure: {
      name: 'Azure Red Hat OpenShift',
      tagline: 'Jointly managed OpenShift clusters',
      description:
        'Fully managed Red Hat OpenShift clusters operated jointly by Microsoft and Red Hat, providing an enterprise Kubernetes platform with developer tooling.',
      limitations: [
        'Requires a minimum cluster footprint (3 control-plane and worker nodes), raising baseline cost.',
        'Available only in a subset of Azure regions.',
        'Worker node compute counts against subscription vCPU quotas.',
        'OpenShift/Kubernetes version upgrades are governed by the supported lifecycle window.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/openshift/',
    },
    aws: {
      name: 'Amazon ROSA',
      tagline: 'Managed OpenShift on AWS',
      description:
        'Red Hat OpenShift Service on AWS delivers fully managed OpenShift clusters integrated with AWS services and billed through AWS.',
      limitations: [
        'Requires a minimum multi-node cluster footprint, increasing baseline cost.',
        'Available in a limited set of AWS regions.',
        'Worker nodes consume EC2 vCPU service quotas for the account.',
        'Cluster version support follows the Red Hat OpenShift lifecycle, requiring periodic upgrades.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/rosa/',
    },
  },
];
