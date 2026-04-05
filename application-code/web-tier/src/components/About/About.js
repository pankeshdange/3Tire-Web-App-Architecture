import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0128 0%, #1a0a3e 50%, #0A0128 100%);
  padding: 2rem;
  color: white;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #FF9900;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  animation: ${fadeInUp} 0.8s ease-out 0.1s both;
`;

const Section = styled.div`
  margin: 2.5rem 0;
  padding: 2.5rem;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.08) 0%, rgba(255, 153, 0, 0.02) 100%);
  border-left: 5px solid #FF9900;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(255, 153, 0, 0.1);
  animation: ${fadeInUp} 0.8s ease-out both;
  transition: all 0.3s ease;
  
  &:hover {
    border-left-color: #ffcc80;
    transform: translateX(10px);
    box-shadow: 0 15px 40px rgba(255, 153, 0, 0.2);
  }
  
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.5s; }
  &:nth-child(5) { animation-delay: 0.6s; }
  &:nth-child(6) { animation-delay: 0.7s; }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #FF9900;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  
  &:before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #FF9900;
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const Text = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin: 1rem 0;
`;

const ListItem = styled.li`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin: 0.8rem 0;
  margin-left: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #FF9900;
    transform: translateX(10px);
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.12) 0%, rgba(255, 153, 0, 0.04) 100%);
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 153, 0, 0.3);
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.3s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.5s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  
  &:hover {
    border-color: #FF9900;
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(255, 153, 0, 0.2);
  }
  
  h3 {
    color: #FF9900;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  
  p {
    font-size: 0.95rem;
    color: #d0d0d0;
    line-height: 1.6;
  }
`;

const DeveloperProfile = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0.05) 100%);
  padding: 3rem 2rem;
  border-radius: 12px;
  border: 2px solid rgba(255, 153, 0, 0.4);
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out;
  box-shadow: 0 10px 40px rgba(255, 153, 0, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #FF9900;
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(255, 153, 0, 0.25);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ProfileContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
  max-width: 900px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 280px;
    height: 280px;
    border-radius: 12px;
    border: 5px solid #FF9900;
    box-shadow: 0 0 30px rgba(255, 153, 0, 0.5);
    object-fit: cover;
    transition: all 0.3s ease;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
    
    &:hover {
      transform: scale(1.05) rotateZ(2deg);
      box-shadow: 0 0 40px rgba(255, 153, 0, 0.8);
    }
  }
  
  @media (max-width: 768px) {
    img {
      width: 240px;
      height: 240px;
    }
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
`;

const ProfileName = styled.h2`
  font-size: 2.5rem;
  color: #FF9900;
  margin: 0;
  font-weight: 900;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const ProfileTitle = styled.p`
  font-size: 1.3rem;
  color: #ffcc80;
  margin: 0;
  font-weight: 600;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProfileBio = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #e0e0e0;
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 0.75rem;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.2) 0%, rgba(255, 153, 0, 0.05) 100%);
  border: 2px solid #FF9900;
  color: #FF9900;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.85rem;
  min-width: 110px;
  
  .icon {
    font-size: 1.8rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  &:hover {
    background: #FF9900;
    color: #0A0128;
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(255, 153, 0, 0.4);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <ContentWrapper>
        <Title>About This Project</Title>

        <DeveloperProfile>
          <ProfileContent>
            <ProfileImage>
              <img src={require('../../assets/pankesh-dange.jpeg')} alt="Pankesh Dange" />
            </ProfileImage>
            <ProfileInfo>
              <div>
                <ProfileName>Pankesh Dange</ProfileName>
                <ProfileTitle>Cloud and DevOps Engineer</ProfileTitle>
                <ProfileBio>
                  Passionate about building scalable cloud-native applications and architecting enterprise-grade solutions on AWS. 
                  Specialized in modern web technologies, microservices, containerization, and DevOps practices.
                </ProfileBio>
              </div>
              <SocialLinks>
                <SocialLink 
                  href="https://www.linkedin.com/in/pankeshd/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="LinkedIn Profile"
                >
                  <div className="icon">🔗</div>
                  <div className="label">LinkedIn</div>
                </SocialLink>
                <SocialLink 
                  href="https://github.com/pankeshdange" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="GitHub Profile"
                >
                  <div className="icon">⚙️</div>
                  <div className="label">GitHub</div>
                </SocialLink>
                <SocialLink 
                  href="https://pankeshdange.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Portfolio Website"
                >
                  <div className="icon">🌐</div>
                  <div className="label">Portfolio</div>
                </SocialLink>
              </SocialLinks>
            </ProfileInfo>
          </ProfileContent>
        </DeveloperProfile>

        <Section>
          <SectionTitle>Project Overview</SectionTitle>
          <Text>
            AWS 3-Tier Web Application is a comprehensive, production-ready cloud native application demonstration built on Amazon Web Services. 
            This implementation showcases a modern, enterprise-grade architecture with carefully separated web, application, and database tiers 
            designed for optimal scalability, security, and maintainability in distributed systems.
          </Text>
          <Text>
            The project serves as both a functional application and an educational resource for understanding cloud architecture best practices, 
            DevOps principles, and AWS service integration patterns.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Architecture Highlights</SectionTitle>
          <FeatureList>
            <ListItem><strong>3-Tier Architecture:</strong> Clear separation of concerns with dedicated web, app, and database layers ensuring scalability</ListItem>
            <ListItem><strong>High Availability:</strong> Multi-AZ deployment across different Availability Zones for disaster resilience</ListItem>
            <ListItem><strong>Intelligent Load Balancing:</strong> Network Load Balancer (NLB) for efficient traffic distribution and failover</ListItem>
            <ListItem><strong>Auto Scaling:</strong> Dynamic capacity adjustment based on demand and performance metrics</ListItem>
            <ListItem><strong>Enterprise Security:</strong> VPC isolation, Security Groups, IAM roles, and private subnets for database tier</ListItem>
            <ListItem><strong>Comprehensive Monitoring:</strong> AWS CloudWatch for real-time logs, metrics, and automated alerting</ListItem>
            <ListItem><strong>Data Protection:</strong> Automated backups, encryption, and point-in-time recovery capabilities</ListItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>Technology Stack</SectionTitle>
          <GridContainer>
            <Card>
              <h3>🌐 Frontend Tier</h3>
              <p>React.js with modern UI components, styled-components for styling, responsive design, and interactive dashboards for user engagement</p>
            </Card>
            <Card>
              <h3>⚙️ Backend Tier</h3>
              <p>Node.js with Express.js framework for robust RESTful API development, business logic processing, and seamless service integration</p>
            </Card>
            <Card>
              <h3>🗄️ Database Tier</h3>
              <p>Amazon RDS with SQL/MySQL for reliable, managed relational database services with automated maintenance and backups</p>
            </Card>
            <Card>
              <h3>☁️ Infrastructure</h3>
              <p>AWS services including EC2, VPC, ELB, CloudWatch, S3, IAM, SNS, and Route 53 for secure, scalable cloud operations</p>
            </Card>
          </GridContainer>
        </Section>

        <Section>
          <SectionTitle>Key Features & Capabilities</SectionTitle>
          <FeatureList>
            <ListItem>✓ Real-time transaction management with comprehensive CRUD operations</ListItem>
            <ListItem>✓ Advanced analytics dashboard with performance metrics and insights</ListItem>
            <ListItem>✓ Database operations demonstration with complete data manipulation examples</ListItem>
            <ListItem>✓ Responsive design optimized for desktop, tablet, and mobile devices</ListItem>
            <ListItem>✓ Seamless AWS service integration for production-grade scalability</ListItem>
            <ListItem>✓ Health monitoring and comprehensive system status endpoints</ListItem>
            <ListItem>✓ Automatic error recovery and failover mechanisms</ListItem>
            <ListItem>✓ API documentation and interactive service exploration</ListItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>Educational Use Cases</SectionTitle>
          <Text>
            This application serves as an excellent reference architecture for:
          </Text>
          <FeatureList>
            <ListItem>Learning cloud architecture design patterns and best practices on AWS</ListItem>
            <ListItem>Understanding 3-tier application design for enterprise systems</ListItem>
            <ListItem>Implementing production-grade web applications in the cloud</ListItem>
            <ListItem>Deploying highly available, scalable systems on AWS infrastructure</ListItem>
            <ListItem>Integrating modern frontend frameworks with robust backend services</ListItem>
            <ListItem>Exploring AWS service ecosystem and their integration patterns</ListItem>
            <ListItem>Learning about VPC networking, security, and access control</ListItem>
            <ListItem>Implementing monitoring, logging, and alerting best practices</ListItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>Resources & Documentation</SectionTitle>
          <Text>
            For comprehensive information about the deployment architecture and AWS services used in this project, 
            please explore the following sections in the application:
          </Text>
          <FeatureList>
            <ListItem><strong>AWS Services:</strong> Detailed information about each AWS service with use cases and benefits</ListItem>
            <ListItem><strong>Documentation:</strong> Complete guides for architecture, deployment, security, and operations</ListItem>
            <ListItem><strong>Dashboard:</strong> Interactive analytics and real-time system monitoring</ListItem>
            <ListItem><strong>API Reference:</strong> Full endpoint documentation and usage examples</ListItem>
          </FeatureList>
        </Section>
      </ContentWrapper>
    </AboutContainer>
  );
};

export default About;
