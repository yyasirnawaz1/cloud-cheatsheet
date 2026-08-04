import type { ServiceMapping } from '../types';

export const storage: ServiceMapping[] = [
  {
    id: 'storage-object',
    category: 'storage',
    concept: 'Object storage',
    azure: {
      name: 'Azure Blob Storage',
      tagline: 'Massively scalable object store',
      description:
        'Store unstructured object data (blobs) at scale with hot, cool, cold, and archive access tiers for cost optimization.',
      limitations: [
        'Single block blob max size is ~190.7 TiB (50,000 blocks x 4,000 MiB).',
        'Max block size is 4,000 MiB (4.75 TiB with Put Block via a single upload).',
        'Standard account default max ingress/egress and up to 20,000 requests/sec per blob soft limits.',
        'Max storage account capacity is 5 PiB by default.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/storage/blobs/',
      free: true,
    },
    aws: {
      name: 'Amazon S3',
      tagline: 'Industry-standard object storage',
      description:
        'Store and retrieve any amount of object data with 11 nines of durability and multiple storage classes.',
      limitations: [
        'Maximum single object size is 5 TB.',
        'Single PUT upload is limited to 5 GB; larger objects require multipart upload.',
        'Multipart upload allows a maximum of 10,000 parts.',
        'Bucket names must be globally unique across all AWS accounts.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/s3/',
      free: true,
    },
  },
  {
    id: 'storage-block',
    category: 'storage',
    concept: 'Block storage / disks',
    azure: {
      name: 'Azure Managed Disks',
      tagline: 'Persistent block storage for VMs',
      description:
        'Block-level storage volumes for Azure VMs, available in Ultra, Premium SSD v2, Premium SSD, Standard SSD, and Standard HDD tiers.',
      limitations: [
        'Maximum managed disk size is 64 TiB.',
        'Premium SSD v2 tops out at 80,000 IOPS and 1,200 MB/s per disk.',
        'Ultra Disk supports up to 400,000 IOPS per disk.',
        'A disk can only be attached to one VM at a time unless shared disks are enabled.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-machines/managed-disks-overview',
    },
    aws: {
      name: 'Amazon EBS',
      tagline: 'Block storage for EC2 instances',
      description:
        'Elastic Block Store provides persistent block-level volumes for EC2, with SSD (gp3, io2) and HDD (st1, sc1) volume types.',
      limitations: [
        'Maximum volume size is 64 TiB (gp3, io1, io2).',
        'io2 Block Express supports up to 256,000 IOPS and 4,000 MB/s per volume.',
        'gp3 baseline is 3,000 IOPS / 125 MB/s, scalable to 16,000 IOPS / 1,000 MB/s.',
        'Volumes are AZ-scoped and can only attach within the same Availability Zone.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/ebs/',
    },
  },
  {
    id: 'storage-file',
    category: 'storage',
    concept: 'Managed file shares',
    azure: {
      name: 'Azure Files',
      tagline: 'Fully managed SMB/NFS shares',
      description:
        'Fully managed file shares accessible via SMB and NFS protocols, mountable concurrently by cloud and on-premises clients.',
      limitations: [
        'Maximum file share size is 100 TiB (large file shares / provisioned).',
        'Maximum single file size is 4 TiB.',
        'Standard SMB shares are limited to ~20,000 IOPS per share.',
        'NFS shares require premium (FileStorage) accounts and do not support snapshots at share scope in all regions.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/storage/files/',
      free: true,
    },
    aws: {
      name: 'Amazon EFS / FSx',
      tagline: 'Elastic NFS and Windows file systems',
      description:
        'Amazon EFS provides elastic NFS file storage for Linux workloads, while Amazon FSx offers managed Windows, Lustre, NetApp ONTAP, and OpenZFS file systems.',
      limitations: [
        'EFS single file maximum size is 47.9 TiB.',
        'EFS General Purpose mode is limited to 55,000 read IOPS per file system.',
        'FSx for Windows single file system max is 64 TiB per volume (up to 512 TiB with larger deployments).',
        'EFS is NFS-only; SMB/Windows workloads require FSx for Windows File Server.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/efs/',
      free: true,
    },
  },
  {
    id: 'storage-archive',
    category: 'storage',
    concept: 'Archive / cold storage',
    azure: {
      name: 'Azure Blob Archive Tier',
      tagline: 'Lowest-cost long-term archive',
      description:
        'Offline access tier for rarely accessed blob data offering the lowest storage cost in exchange for higher retrieval latency.',
      limitations: [
        'Data must be rehydrated to an online tier before reading; can take up to 15 hours (standard priority).',
        'Early deletion incurs a charge if removed before 180 days.',
        'Archive tier is set at the blob level, not the account or container level.',
        'Reading archived data requires rehydration or copy, not direct access.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/storage/blobs/access-tiers-overview',
    },
    aws: {
      name: 'Amazon S3 Glacier',
      tagline: 'Low-cost archival storage classes',
      description:
        'S3 Glacier Instant Retrieval, Flexible Retrieval, and Deep Archive storage classes provide low-cost archival with retrieval times from milliseconds to hours.',
      limitations: [
        'Deep Archive standard retrieval takes up to 12 hours; bulk up to 48 hours.',
        'Minimum storage duration is 90 days (Flexible) or 180 days (Deep Archive).',
        'Flexible/Deep Archive objects cannot be read without a restore request.',
        'Early deletion before the minimum duration is billed for the full period.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html',
    },
  },
  {
    id: 'storage-data-lake',
    category: 'storage',
    concept: 'Data lake storage',
    azure: {
      name: 'Azure Data Lake Storage Gen2',
      tagline: 'Hierarchical big-data lake',
      description:
        'Blob Storage with a hierarchical namespace optimized for big-data analytics, supporting directory semantics and POSIX-style ACLs.',
      limitations: [
        'Maximum of 32 ACL entries per file or directory.',
        'Hierarchical namespace cannot be disabled once enabled on an account.',
        'Some legacy blob features (e.g. soft delete for some scenarios) have limited support with HNS.',
        'Inherits the 5 PiB default account capacity limit.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-introduction',
    },
    aws: {
      name: 'Amazon S3 + Lake Formation',
      tagline: 'S3 data lake with governance',
      description:
        'Amazon S3 provides the storage layer while AWS Lake Formation adds centralized permissions, cataloging, and fine-grained access control for data lakes.',
      limitations: [
        'Lake Formation fine-grained access requires integrated engines (Athena, Redshift Spectrum, EMR, Glue).',
        'Inherits S3 limits: 5 TB max object size and 5 GB single PUT.',
        'Cross-account data sharing requires resource links and RAM configuration.',
        'Row/column-level security is only enforced through Lake Formation-aware services.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/lake-formation/',
    },
  },
  {
    id: 'storage-hybrid-gateway',
    category: 'storage',
    concept: 'Hybrid / on-prem gateway',
    azure: {
      name: 'Azure File Sync',
      tagline: 'Cache Azure Files on-premises',
      description:
        'Centralizes file shares in Azure Files while caching frequently accessed data on Windows Servers on-premises with cloud tiering.',
      limitations: [
        'Requires Windows Server registered as a Storage Sync Service server endpoint.',
        'Maximum of 100 server endpoints per sync group.',
        'A single sync group supports one cloud endpoint (Azure file share).',
        'Cloud tiering has minimum free-space and file-size thresholds before tiering occurs.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/storage/file-sync/file-sync-introduction',
    },
    aws: {
      name: 'AWS Storage Gateway',
      tagline: 'Hybrid cloud storage bridge',
      description:
        'Connects on-premises applications to AWS storage via File, Volume, and Tape gateway types with local caching.',
      limitations: [
        'Cached volume gateway supports up to 32 TiB per volume (max 1 PiB per gateway).',
        'Stored volume gateway supports up to 16 TiB per volume.',
        'Tape gateway virtual tapes range from 100 GiB to 15 TiB each.',
        'Requires a VM or hardware appliance with sufficient local cache/upload buffer disks.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/storagegateway/',
    },
  },
  {
    id: 'storage-bulk-transfer',
    category: 'storage',
    concept: 'Bulk data transfer',
    azure: {
      name: 'Azure Data Box',
      tagline: 'Offline petabyte-scale transfer',
      description:
        'Physical appliances shipped to your datacenter to move large volumes of data into Azure when network transfer is impractical.',
      limitations: [
        'Data Box has ~80 TB usable capacity (100 TB raw) per device.',
        'Data Box Disk offers 40 TB total (8 TB usable per disk, 5 disks).',
        'Data Box Heavy provides ~770 TB usable capacity.',
        'Devices must be physically shipped, adding days of turnaround time.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/databox/',
    },
    aws: {
      name: 'AWS Snowball',
      tagline: 'Rugged offline data migration',
      description:
        'Physical Snowball Edge devices transfer large datasets into and out of AWS with onboard compute for edge processing.',
      limitations: [
        'Snowball Edge Storage Optimized provides ~80 TB usable capacity per device.',
        'Snowball Edge Compute Optimized provides ~28 TB usable capacity.',
        'Devices must be shipped physically, adding days of transit time.',
        'Data is encrypted and keys are managed via KMS; keys never ship with the device.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/snowball/',
    },
  },
];
