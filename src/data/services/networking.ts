import type { ServiceMapping } from '../types';

export const networking: ServiceMapping[] = [
  {
    id: 'networking-vnet',
    category: 'networking',
    concept: 'Virtual Network',
    azure: {
      name: 'Azure Virtual Network (VNet)',
      tagline: 'Private isolated cloud network',
      description:
        'A logically isolated private network in Azure where you place resources, define subnets, route traffic, and control connectivity with network security groups.',
      limitations: [
        'Default limit of 1,000 VNets per subscription per region.',
        'Maximum 500 VNet peerings per virtual network.',
        'VNet peering is non-transitive; hub-and-spoke needs gateway transit or a network virtual appliance.',
        'A single VNet address space cannot span multiple regions.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/virtual-network/',
    },
    aws: {
      name: 'Amazon VPC',
      tagline: 'Isolated virtual private cloud',
      description:
        'A logically isolated section of the AWS cloud where you launch resources into subnets, with full control over IP ranges, route tables, gateways, and security groups.',
      limitations: [
        'Default limit of 5 VPCs per region (soft, can be raised).',
        'Maximum 125 active VPC peering connections per VPC.',
        'VPC peering is non-transitive; use Transit Gateway for hub-and-spoke routing.',
        'Up to 5 IPv4 CIDR blocks per VPC by default (max 50).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/vpc/',
    },
  },
  {
    id: 'networking-load-balancer-l4',
    category: 'networking',
    concept: 'Layer 4 Load Balancer',
    azure: {
      name: 'Azure Load Balancer',
      tagline: 'High-performance L4 traffic distribution',
      description:
        'A layer-4 (TCP/UDP) load balancer that distributes inbound and outbound traffic across backend pool instances with ultra-low latency and high throughput.',
      limitations: [
        'No TLS termination or content-based (L7) routing.',
        'Standard SKU supports up to 1,000 backend instances per pool.',
        'Backend pool members must be in the same VNet as the load balancer.',
        'Basic SKU is retiring and lacks availability-zone and outbound-rule support.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/load-balancer/',
    },
    aws: {
      name: 'AWS Network Load Balancer',
      tagline: 'Ultra-low-latency L4 load balancing',
      description:
        'A layer-4 load balancer that handles millions of requests per second for TCP, UDP, and TLS traffic while preserving the client source IP.',
      limitations: [
        'Cannot perform content-based HTTP routing (that requires an ALB).',
        'Default limit of 50 listeners and 200 targets per Availability Zone per NLB.',
        'Cross-zone load balancing is disabled by default and incurs inter-AZ data charges when enabled.',
        'Security groups on NLBs are only supported when configured at creation time.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/network/',
    },
  },
  {
    id: 'networking-load-balancer-l7',
    category: 'networking',
    concept: 'Layer 7 Application Load Balancer',
    azure: {
      name: 'Azure Application Gateway',
      tagline: 'L7 web traffic load balancer',
      description:
        'A layer-7 load balancer for web traffic with URL-based routing, SSL/TLS termination, cookie-based session affinity, and an optional integrated web application firewall.',
      limitations: [
        'Maximum 100 backend pools and 100 HTTP listeners per gateway.',
        'Supports HTTP/HTTPS/HTTP2/WebSocket only, not arbitrary TCP/UDP.',
        'v1 SKU is retiring; migration to v2 (autoscaling) is required.',
        'A gateway is confined to a single VNet and region.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/application-gateway/',
    },
    aws: {
      name: 'AWS Application Load Balancer',
      tagline: 'Content-based L7 routing',
      description:
        'A layer-7 load balancer that routes HTTP/HTTPS traffic based on host, path, headers, and query strings, with native support for containers and Lambda targets.',
      limitations: [
        'Default limit of 100 rules per ALB and 100 targets per rule group.',
        'Handles HTTP/HTTPS/gRPC only; no raw TCP/UDP load balancing.',
        'Idle connection timeout capped at 4,000 seconds.',
        'Header and URL length constraints (e.g. request-line limited to 16 KB).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/elasticloadbalancing/latest/application/',
    },
  },
  {
    id: 'networking-dns',
    category: 'networking',
    concept: 'Managed DNS',
    azure: {
      name: 'Azure DNS',
      tagline: 'Managed domain name hosting',
      description:
        'Host your DNS domains in Azure using Microsoft global name server infrastructure, managing DNS records with the same tools as your other Azure resources.',
      limitations: [
        'Maximum 250 public DNS zones per subscription (soft limit).',
        'Up to 10,000 record sets per zone by default.',
        'Does not register domain names (no registrar service).',
        'No built-in latency- or geo-based traffic routing (use Traffic Manager).',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/dns/',
    },
    aws: {
      name: 'Amazon Route 53',
      tagline: 'Scalable DNS and domain registration',
      description:
        'A highly available and scalable DNS web service that also handles domain registration and health-check-based routing policies (latency, geo, weighted, failover).',
      limitations: [
        'Default limit of 500 hosted zones per account (soft).',
        'Maximum 10,000 records per hosted zone (raise via support).',
        'Health checks limited to 200 per account by default.',
        'Alias records can only point to a supported subset of AWS resources.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/route53/',
    },
  },
  {
    id: 'networking-cdn',
    category: 'networking',
    concept: 'Content Delivery Network',
    azure: {
      name: 'Azure Front Door',
      tagline: 'Global edge delivery and acceleration',
      description:
        'A global content delivery network and application accelerator that caches static content at the edge and provides L7 routing, TLS offload, and WAF at Microsoft edge sites.',
      limitations: [
        'Default limit of 200 custom domains per Front Door profile.',
        'Maximum cacheable response size and configurable route/rule limits per SKU.',
        'Classic Azure CDN (Edgio) is retiring in favor of Front Door.',
        'Cache purge operations can take several minutes to propagate globally.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/frontdoor/',
    },
    aws: {
      name: 'Amazon CloudFront',
      tagline: 'Global low-latency content delivery',
      description:
        'A content delivery network that caches content at global edge locations to reduce latency, with support for Lambda@Edge and CloudFront Functions for edge compute.',
      limitations: [
        'Default limit of 25 alternate domain names (CNAMEs) per distribution.',
        'Maximum default file size of 30 GB per object.',
        'Cache invalidations beyond 1,000 paths/month incur charges and take time to propagate.',
        'Origin request/response header count and size limits apply.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/cloudfront/',
      free: true,
    },
  },
  {
    id: 'networking-private-connectivity',
    category: 'networking',
    concept: 'Dedicated On-Premises Connectivity',
    azure: {
      name: 'Azure ExpressRoute',
      tagline: 'Private dedicated cloud connection',
      description:
        'Establish a private, dedicated connection from on-premises to Azure through a connectivity provider, bypassing the public internet for higher reliability and consistent latency.',
      limitations: [
        'Requires a connectivity provider; provisioning can take days to weeks.',
        'Default limit of 10 ExpressRoute circuits per subscription.',
        'Route advertisement limits (e.g. 4,000 IPv4 prefixes standard, 10,000 with Premium).',
        'Higher fixed cost than VPN; not suited to small or short-lived workloads.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/expressroute/',
    },
    aws: {
      name: 'AWS Direct Connect',
      tagline: 'Dedicated private network link',
      description:
        'A dedicated network connection from your premises to AWS that reduces network costs, increases bandwidth throughput, and provides a more consistent experience than internet links.',
      limitations: [
        'Physical port provisioning requires a partner/colocation and can take weeks.',
        'Default limit of 50 virtual interfaces per dedicated connection.',
        'BGP route advertisement limited to 100 prefixes per BGP session (VIF).',
        'A single connection is not redundant; HA requires a second link.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/directconnect/',
    },
  },
  {
    id: 'networking-vpn-gateway',
    category: 'networking',
    concept: 'Site-to-Site VPN Gateway',
    azure: {
      name: 'Azure VPN Gateway',
      tagline: 'Encrypted cross-premises tunnels',
      description:
        'Send encrypted traffic between an Azure virtual network and on-premises locations, or between VNets, over the public internet using IPsec/IKE VPN tunnels.',
      limitations: [
        'Throughput capped by SKU (e.g. VpnGw1 ~650 Mbps up to VpnGw5 ~10 Gbps).',
        'Default limit of 30 site-to-site tunnels per gateway (SKU dependent).',
        'Gateway provisioning/resizing can take 30-45 minutes.',
        'Basic SKU lacks BGP, active-active, and zone redundancy.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/vpn-gateway/',
    },
    aws: {
      name: 'AWS Site-to-Site VPN',
      tagline: 'IPsec tunnels to your VPC',
      description:
        'Create encrypted IPsec tunnels between your on-premises network and an AWS VPC via a virtual private gateway or transit gateway, with two tunnels for redundancy.',
      limitations: [
        'Each VPN connection provides two tunnels with ~1.25 Gbps aggregate throughput.',
        'Maximum 100 routes advertised per BGP session on a VPN connection.',
        'Static/BGP route limits and a default of 10 VPN connections per region.',
        'Higher latency and variability than Direct Connect (traverses the internet).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/vpn/latest/s2svpn/',
    },
  },
  {
    id: 'networking-private-endpoints',
    category: 'networking',
    concept: 'Private Service Connectivity',
    azure: {
      name: 'Azure Private Link',
      tagline: 'Private access to PaaS services',
      description:
        'Access Azure PaaS services and your own services over a private endpoint in your VNet, keeping traffic on the Microsoft backbone and off the public internet.',
      limitations: [
        'Default limit of 1,000 private endpoints per subscription.',
        'A Private Link service supports a limited number of NAT IP configurations per instance.',
        'Private endpoints incur per-hour plus per-GB processing charges.',
        'Some services require DNS overrides (private DNS zones) to resolve correctly.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/private-link/',
    },
    aws: {
      name: 'AWS PrivateLink',
      tagline: 'Private connectivity to services',
      description:
        'Access services across VPCs and accounts privately through interface VPC endpoints, keeping traffic within the AWS network without internet gateways or NAT.',
      limitations: [
        'Default limit of 50 interface endpoints per VPC.',
        'An endpoint service supports up to 10 network/gateway load balancers.',
        'Interface endpoints are billed per hour per AZ plus per-GB data processing.',
        'Cross-region access requires additional configuration and is not automatic.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/vpc/latest/privatelink/',
    },
  },
  {
    id: 'networking-global-traffic',
    category: 'networking',
    concept: 'Global Traffic Routing',
    azure: {
      name: 'Azure Traffic Manager',
      tagline: 'DNS-based global load balancing',
      description:
        'A DNS-based traffic load balancer that distributes traffic across global endpoints using routing methods such as priority, weighted, performance, and geographic.',
      limitations: [
        'DNS-level routing only; it does not proxy or inspect the traffic itself.',
        'Failover speed is bounded by DNS TTL and client caching.',
        'Default limit of 200 profiles per subscription and 200 endpoints per profile.',
        'Endpoint health is inferred from HTTP/HTTPS/TCP probes, not deep app checks.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/traffic-manager/',
    },
    aws: {
      name: 'AWS Global Accelerator',
      tagline: 'Anycast global network acceleration',
      description:
        'Improves availability and performance by routing traffic over the AWS global network to optimal endpoints using static anycast IP addresses.',
      limitations: [
        'Default limit of 10 accelerators per account.',
        'Each accelerator provides two static anycast IP addresses.',
        'Charged a fixed hourly fee plus a data-transfer-premium per GB.',
        'Supports a limited set of endpoint types (ALB, NLB, EC2, Elastic IP).',
      ],
      docsUrl: 'https://docs.aws.amazon.com/global-accelerator/',
    },
  },
];
