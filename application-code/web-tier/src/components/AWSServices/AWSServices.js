import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 153, 0, 0);
  }
`;

const ServicesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0128 0%, #1a0a3e 50%, #0A0128 100%);
  padding: 2rem;
  color: white;
  animation: ${slideIn} 0.8s ease-out;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #FF9900;
  margin-bottom: 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  animation: ${slideIn} 0.8s ease-out 0.1s both;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #d0d0d0;
  margin-bottom: 3rem;
  animation: ${slideIn} 0.8s ease-out 0.2s both;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.12) 0%, rgba(255, 153, 0, 0.04) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 15px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  animation: ${slideIn} 0.6s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.3s; }
  &:nth-child(2) { animation-delay: 0.35s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.45s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.55s; }
  &:nth-child(7) { animation-delay: 0.6s; }
  &:nth-child(8) { animation-delay: 0.65s; }
  &:nth-child(9) { animation-delay: 0.7s; }
  &:nth-child(10) { animation-delay: 0.75s; }
  &:nth-child(11) { animation-delay: 0.8s; }
  &:nth-child(12) { animation-delay: 0.85s; }
  &:nth-child(13) { animation-delay: 0.9s; }
  &:nth-child(14) { animation-delay: 0.95s; }
  &:nth-child(15) { animation-delay: 1s; }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 153, 0, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border-color: #FF9900;
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(255, 153, 0, 0.25);
    
    &:before {
      left: 100%;
    }
  }
`;

const IconContainer = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #FF9900;
  filter: drop-shadow(0 0 10px rgba(255, 153, 0, 0.3));
  transition: all 0.3s ease;
  
  ${ServiceCard}:hover & {
    transform: scale(1.2) rotate(-10deg);
    filter: drop-shadow(0 0 20px rgba(255, 153, 0, 0.6));
  }
`;

const ServiceName = styled.h3`
  font-size: 1.4rem;
  color: #FF9900;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;

const ServiceType = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.3), rgba(255, 153, 0, 0.1));
  color: #FFD580;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.75rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  border: 1px solid rgba(255, 153, 0, 0.4);
`;

const ServiceDescription = styled.p`
  color: #d0d0d0;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const DetailsSection = styled.div`
  display: ${props => props.expanded ? 'block' : 'none'};
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 153, 0, 0.2);
  animation: ${slideIn} 0.3s ease-out;
`;

const DetailsTitle = styled.h4`
  color: #FFD580;
  margin: 1.2rem 0 0.7rem 0;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  color: #c0c0c0;
  margin: 0.6rem 0;
  font-size: 0.9rem;
  padding-left: 1.8rem;
  position: relative;
  line-height: 1.5;
  
  &:before {
    content: '→';
    position: absolute;
    left: 0;
    color: #FF9900;
    font-weight: bold;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #FF9900 0%, #ff7700 100%);
  color: #000;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.85rem;
  margin-right: 0.7rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 153, 0, 0.4);
  }
`;

const ToggleButton = styled.button`
  background: transparent;
  border: 2px solid #FF9900;
  color: #FF9900;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    background: rgba(255, 153, 0, 0.15);
    transform: scale(1.02);
    box-shadow: 0 8px 20px rgba(255, 153, 0, 0.3);
  }
`;

const AWSServices = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const awsServices = [
    {
      id: 1,
      name: 'Amazon EC2',
      type: 'Compute',
      icon: '☁️',
      description: 'Elastic Compute Cloud - Resizable virtual server instances for hosting applications',
      uses: [
        'Web Tier EC2 instances in public subnets running Nginx and React',
        'App Tier EC2 instances in private subnets running Node.js/Express',
        'Multiple instances across availability zones for high availability',
        'Auto Scaling Groups for dynamic capacity management'
      ],
      benefits: [
        'Pay-as-you-go pricing model',
        'Instant scalability and flexibility',
        'Multiple instance types and sizes',
        'Integration with CloudWatch monitoring',
        'Support for various operating systems'
      ],
      link: 'https://aws.amazon.com/ec2/'
    },
    {
      id: 2,
      name: 'Amazon RDS',
      type: 'Database',
      icon: '🗄️',
      description: 'Relational Database Service - Managed SQL database with automated backups and failover',
      uses: [
        'Primary database for transaction storage and management',
        'Multi-AZ deployment across availability zones',
        'Automated daily backups and point-in-time recovery',
        'Enhanced monitoring and performance insights'
      ],
      benefits: [
        'Fully managed database operations',
        'Automatic patching and maintenance windows',
        'Multi-AZ automatic failover capability',
        'Read replicas for horizontal scaling',
        'Built-in security and encryption'
      ],
      link: 'https://aws.amazon.com/rds/'
    },
    {
      id: 3,
      name: 'Amazon VPC',
      type: 'Networking',
      icon: '🔗',
      description: 'Virtual Private Cloud - Isolated network environment with complete control',
      uses: [
        'Public subnets for web tier accessibility',
        'Private subnets for app and database tier isolation',
        'Custom route tables for traffic management',
        'Network ACLs and Security Groups for access control'
      ],
      benefits: [
        'Complete network isolation and security',
        'Custom IP address ranges and subnetting',
        'Multiple availability zone support',
        'VPN and Direct Connect options',
        'Fine-grained traffic control'
      ],
      link: 'https://aws.amazon.com/vpc/'
    },
    {
      id: 4,
      name: 'Network Load Balancer (NLB)',
      type: 'Load Balancing',
      icon: '⚖️',
      description: 'Ultra-high performance load balancer for extreme throughput and low latency',
      uses: [
        'Layer 4 (Transport) load balancing',
        'Distributes traffic across multiple EC2 instances',
        'Handles millions of requests per second',
        'Connection-based routing and health checks'
      ],
      benefits: [
        'Ultra-low latency (microsecond)',
        'Extreme performance at scale',
        'Connection pooling capabilities',
        'Preserves source IP information',
        'Integration with Auto Scaling groups'
      ],
      link: 'https://aws.amazon.com/elasticloadbalancing/'
    },
    {
      id: 5,
      name: 'Application Load Balancer (ALB)',
      type: 'Load Balancing',
      icon: '⚙️',
      description: 'Application-aware load balancer for content-based routing',
      uses: [
        'Layer 7 (Application) aware routing',
        'Host-based and path-based routing rules',
        'Distributes requests to web tier servers',
        'WebSocket and HTTP/2 support'
      ],
      benefits: [
        'Content-based intelligent routing',
        'Host and path-based load balancing',
        'WebSocket support for real-time applications',
        'Better resource utilization',
        'Simplified microservices deployment'
      ],
      link: 'https://aws.amazon.com/elasticloadbalancing/'
    },
    {
      id: 6,
      name: 'Amazon CloudWatch',
      type: 'Monitoring',
      icon: '📊',
      description: 'Comprehensive monitoring and observability service for metrics and logs',
      uses: [
        'Monitor EC2 CPU, memory, disk, and network metrics',
        'Track application logs and errors in real-time',
        'Create alarms based on custom thresholds',
        'Generate dashboards for system visibility'
      ],
      benefits: [
        'Real-time monitoring and metrics collection',
        'Custom dashboards and visualizations',
        'Log aggregation and analysis',
        'Automated alerting and notifications',
        'Performance optimization insights'
      ],
      link: 'https://aws.amazon.com/cloudwatch/'
    },
    {
      id: 7,
      name: 'AWS Auto Scaling',
      type: 'Scaling',
      icon: '📈',
      description: 'Automatically adjust capacity based on demand and defined policies',
      uses: [
        'Scale EC2 instances up/down based on CPU metrics',
        'Maintain desired capacity during traffic spikes',
        'Scheduled scaling for predictable patterns',
        'Integration with CloudWatch metrics'
      ],
      benefits: [
        'Cost optimization through right-sizing',
        'Automatic failure recovery',
        'Maintains application performance',
        'Custom scaling policies available',
        'Seamless integration with ELB'
      ],
      link: 'https://aws.amazon.com/autoscaling/'
    },
    {
      id: 8,
      name: 'AWS IAM',
      type: 'Security & Access',
      icon: '🔐',
      description: 'Identity and Access Management for secure user and service control',
      uses: [
        'User authentication and authorization',
        'Role-based access control (RBAC)',
        'Fine-grained permissions policies',
        'Service roles for EC2 instances'
      ],
      benefits: [
        'Secure least privilege access',
        'Audit trails and activity logging',
        'Multi-factor authentication support',
        'Cross-account access capabilities',
        'Compliance and regulatory support'
      ],
      link: 'https://aws.amazon.com/iam/'
    },
    {
      id: 9,
      name: 'Amazon SNS',
      type: 'Messaging',
      icon: '📧',
      description: 'Simple Notification Service for scalable messaging',
      uses: [
        'Send email notifications for system events',
        'Alert on critical CloudWatch alarms',
        'Fan-out messaging to multiple subscribers',
        'Integration with other AWS services'
      ],
      benefits: [
        'Fully managed messaging service',
        'Email and SMS notification support',
        'Topic-based publish-subscribe model',
        'Message filtering capabilities',
        'Highly reliable delivery'
      ],
      link: 'https://aws.amazon.com/sns/'
    },
    {
      id: 10,
      name: 'Amazon S3',
      type: 'Storage',
      icon: '📦',
      description: 'Simple Storage Service for object storage and archival',
      uses: [
        'Store VPC Flow logs for network monitoring',
        'Store application logs and backups',
        'Backup database snapshots',
        'Archive old data with lifecycle policies'
      ],
      benefits: [
        '99.999999999% durability',
        'Unlimited scalability',
        'Cost-effective storage classes',
        'Lifecycle policies for automation',
        'Versioning and MFA delete protection'
      ],
      link: 'https://aws.amazon.com/s3/'
    },
    {
      id: 11,
      name: 'AWS Route 53',
      type: 'DNS',
      icon: '🛣️',
      description: 'Scalable DNS web service for domain management',
      uses: [
        'Manage domain name resolution',
        'Health checks for application endpoints',
        'Routing policies for failover scenarios',
        'Traffic policy for complex routing rules'
      ],
      benefits: [
        'Highly available DNS service',
        'Health checking and failover',
        'Latency-based geolocation routing',
        'Weighted round-robin distribution',
        'Integration with AWS services'
      ],
      link: 'https://aws.amazon.com/route53/'
    },
    {
      id: 12,
      name: 'NAT Gateway',
      type: 'Networking',
      icon: '🌉',
      description: 'Network Address Translation for private subnet outbound connectivity',
      uses: [
        'Enable private subnet instances to access internet',
        'High availability and bandwidth support',
        'Automatic IP address mapping',
        'Managed service with no configuration'
      ],
      benefits: [
        'High availability across AZs',
        'Automatic IP failover',
        'Up to 45 Gbps bandwidth',
        'Pay per hour + data processing charges',
        'No management overhead'
      ],
      link: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html'
    },
    {
      id: 13,
      name: 'Internet Gateway',
      type: 'Networking',
      icon: '🚪',
      description: 'Enables communication between VPC instances and the internet',
      uses: [
        'Allow public subnet instances to reach internet',
        'Provide internet route for web servers',
        'Enable inbound connections from users',
        'Route public traffic from load balancers'
      ],
      benefits: [
        'Redundancy and high availability',
        'No bandwidth limitations',
        'Horizontally scaled',
        'No additional cost',
        'Transparent operation'
      ],
      link: 'https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html'
    },
    {
      id: 14,
      name: 'Route Tables',
      type: 'Networking',
      icon: '🗺️',
      description: 'Define network traffic routing rules within VPC',
      uses: [
        'Route traffic from public subnets to Internet Gateway',
        'Route private subnet traffic to NAT Gateway',
        'Define custom routing rules',
        'Propagate routes dynamically'
      ],
      benefits: [
        'Fine-grained traffic control',
        'Dynamic route propagation',
        'Multiple routing options',
        'No additional costs',
        'Simple to manage and update'
      ],
      link: 'https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html'
    },
    {
      id: 15,
      name: 'Security Groups',
      type: 'Security',
      icon: '🛡️',
      description: 'Virtual firewall for controlling inbound and outbound traffic',
      uses: [
        'Control traffic between EC2 instances',
        'Define ingress rules for incoming connections',
        'Define egress rules for outgoing connections',
        'Implement network segmentation',
        'Restrict access at instance level'
      ],
      benefits: [
        'Stateful firewall rules',
        'Easy to modify rules',
        'Reference other security groups',
        'No additional cost',
        'Applied immediately'
      ],
      link: 'https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html'
    }
  ];

  return (
    <ServicesContainer>
      <ContentWrapper>
        <PageTitle>AWS Services Architecture</PageTitle>
        <Subtitle>
          Complete AWS service ecosystem powering the 3-tier application infrastructure
        </Subtitle>

        <ServiceGrid>
          {awsServices.map(service => (
            <ServiceCard key={service.id}>
              <IconContainer>{service.icon}</IconContainer>
              <ServiceType>{service.type}</ServiceType>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>

              <DetailsSection expanded={expandedId === service.id}>
                <DetailsTitle>️ Uses in This Project:</DetailsTitle>
                <DetailsList>
                  {service.uses.map((use, idx) => (
                    <DetailItem key={idx}>{use}</DetailItem>
                  ))}
                </DetailsList>

                <DetailsTitle>✓ Key Benefits:</DetailsTitle>
                <DetailsList>
                  {service.benefits.map((benefit, idx) => (
                    <DetailItem key={idx}>{benefit}</DetailItem>
                  ))}
                </DetailsList>

                <div style={{ marginTop: '1.2rem' }}>
                  <LinkButton href={service.link} target="_blank" rel="noopener noreferrer">
                    Learn More →
                  </LinkButton>
                </div>
              </DetailsSection>

              <ToggleButton onClick={() => toggleExpand(service.id)}>
                {expandedId === service.id ? '▼ Hide Details' : '▶ Show Details'}
              </ToggleButton>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default AWSServices;
