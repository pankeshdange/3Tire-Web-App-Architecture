import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
const architecture = '/pankesh.gif';

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

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0A0128 0%, #1a0a3e 50%, #0A0128 100%);
  padding: 2rem;
  color: white;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 2rem 2rem 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.1s both;
`;

const MainTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 4rem);
  background: linear-gradient(135deg, #FF9900 0%, #ffcc80 50%, #ff7700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  text-shadow: 0 0 30px rgba(255, 153, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: #d0d0d0;
  margin-bottom: 3rem;
  line-height: 1.6;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const ArchitectureSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.08) 0%, rgba(255, 153, 0, 0.02) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 3rem auto;
  max-width: 1400px;
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.8s ease-out 0.3s both;
  box-shadow: 0 20px 60px rgba(255, 153, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 2rem auto;
  }
`;

const ArchitectureTitle = styled.h2`
  color: #FF9900;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #FF9900, transparent);
  }
`;

const ArchitectureImageContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 1rem 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 153, 0, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 153, 0, 0.5);
    border-radius: 4px;
    
    &:hover {
      background: rgba(255, 153, 0, 0.7);
    }
  }
`;

const ArchitectureImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(255, 153, 0, 0.2);
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 80px rgba(255, 153, 0, 0.3);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.12) 0%, rgba(255, 153, 0, 0.05) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 15px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  animation: ${fadeInUp} 0.8s ease-out both;
  position: relative;
  
  &:nth-child(1) { animation-delay: 0.4s; }
  &:nth-child(2) { animation-delay: 0.5s; }
  &:nth-child(3) { animation-delay: 0.6s; }
  &:nth-child(4) { animation-delay: 0.7s; }
  &:nth-child(5) { animation-delay: 0.8s; }
  &:nth-child(6) { animation-delay: 0.9s; }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 153, 0, 0.1), transparent);
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    border-color: #FF9900;
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(255, 153, 0, 0.25);
    
    &:before {
      opacity: 1;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(255, 153, 0, 0.3));
  transition: all 0.3s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.2) rotate(10deg);
    filter: drop-shadow(0 0 20px rgba(255, 153, 0, 0.6));
  }
`;

const FeatureTitle = styled.h3`
  color: #FF9900;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  color: #c0c0c0;
  line-height: 1.8;
  font-size: 1rem;
  position: relative;
  z-index: 1;
`;

const ActionSection = styled.div`
  max-width: 1100px;
  margin: 4rem auto;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0.05) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.8s ease-out 1s both;
  box-shadow: 0 20px 60px rgba(255, 153, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: 3rem 1rem;
  }
`;

const ActionTitle = styled.h2`
  color: #FF9900;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ActionDescription = styled.p`
  color: #d0d0d0;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #FF9900 0%, #ff7700 100%);
  color: #000;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 10px 30px rgba(255, 153, 0, 0.4);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.3s ease;
    z-index: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(255, 153, 0, 0.6);
    
    &:before {
      left: 100%;
    }
  }
`;

const SecondaryButton = styled(ActionButton)`
  background: transparent;
  border: 2px solid #FF9900;
  color: #FF9900;
  box-shadow: none;
  
  &:hover {
    background: rgba(255, 153, 0, 0.15);
    box-shadow: 0 10px 30px rgba(255, 153, 0, 0.3);
  }
`;

const TierDescription = styled.div`
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.5s both;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeading = styled.h2`
  color: #FF9900;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const TierGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TierCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(255, 153, 0, 0.02) 100%);
  border-left: 5px solid #FF9900;
  border-radius: 10px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.8s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.6s; }
  &:nth-child(2) { animation-delay: 0.7s; }
  &:nth-child(3) { animation-delay: 0.8s; }
  
  &:hover {
    border-left-color: #ffcc80;
    transform: translateX(10px);
    box-shadow: 0 15px 40px rgba(255, 153, 0, 0.2);
  }
  
  h3 {
    color: #FF9900;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  p {
    color: #d0d0d0;
    line-height: 1.8;
    font-size: 1rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <MainTitle>AWS 3-Tier Web Application</MainTitle>
        <Subtitle>
          Enterprise-grade cloud architecture designed for scalability, security, and high performance
        </Subtitle>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>☁️</FeatureIcon>
          <FeatureTitle>Scalable</FeatureTitle>
          <FeatureDescription>
            Auto-scaling infrastructure that dynamically adjusts to your demand with zero downtime
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>Secure</FeatureTitle>
          <FeatureDescription>
            Multi-layer security architecture with VPC isolation, Security Groups, and IAM controls
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>⚡</FeatureIcon>
          <FeatureTitle>High Performance</FeatureTitle>
          <FeatureDescription>
            Load-balanced, optimized infrastructure for ultra-fast response times and reliability
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>📊</FeatureIcon>
          <FeatureTitle>Monitored</FeatureTitle>
          <FeatureDescription>
            Real-time CloudWatch monitoring with comprehensive metrics and intelligent alerting
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>💰</FeatureIcon>
          <FeatureTitle>Cost Optimized</FeatureTitle>
          <FeatureDescription>
            Pay only for what you use with automatic resource optimization and reserved capacity
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>🚀</FeatureIcon>
          <FeatureTitle>Production Ready</FeatureTitle>
          <FeatureDescription>
            Enterprise best practices with disaster recovery and business continuity built-in
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <ArchitectureSection>
        <ArchitectureTitle>Architecture Diagram</ArchitectureTitle>
        <ArchitectureImageContainer>
          <ArchitectureImage src={architecture} alt="AWS 3-Tier Web Application Architecture" />
        </ArchitectureImageContainer>
      </ArchitectureSection>

      <TierDescription>
        <SectionHeading>Application Tiers</SectionHeading>
        <TierGrid>
          <TierCard>
            <h3>🌐 Web Tier</h3>
            <p>
              Nginx and React.js frontend servers running in public subnets across multiple Availability Zones. 
              Handles user interface rendering and initial request routing. 
              Auto-scales based on traffic patterns through the Network Load Balancer.
            </p>
          </TierCard>

          <TierCard>
            <h3>⚙️ Application Tier</h3>
            <p>
              Node.js/Express backend servers deployed in private subnets with isolated network access. 
              Processes all business logic and API requests with enhanced security isolation. 
              Communicates securely with the database tier through internal network routes only.
            </p>
          </TierCard>

          <TierCard>
            <h3>🗄️ Database Tier</h3>
            <p>
              Amazon RDS instance configured in private subnets across multiple Availability Zones. 
              Stores all application data with automated backups, automatic failover, and point-in-time recovery. 
              Accessible exclusively from the application tier for maximum security compliance.
            </p>
          </TierCard>
        </TierGrid>
      </TierDescription>

      <ActionSection>
        <ActionTitle>Ready to Explore?</ActionTitle>
        <ActionDescription>
          Dive into our interactive demo, explore AWS service architecture, and learn best practices
        </ActionDescription>
        <ButtonGroup>
          <ActionButton to="/analytics">View Dashboard</ActionButton>
          <ActionButton to="/add-transaction">New Transaction</ActionButton>
          <SecondaryButton to="/aws-services">AWS Services</SecondaryButton>
          <SecondaryButton to="/about">Learn More</SecondaryButton>
        </ButtonGroup>
      </ActionSection>
    </HomeContainer>
  );
};

export default Home;