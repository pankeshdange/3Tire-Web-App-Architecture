import React, { useState } from 'react';
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

const DocumentationContainer = styled.div`
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

const PageTitle = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #FF9900;
  margin-bottom: 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 900;
  animation: ${fadeInUp} 0.8s ease-out 0.1s both;
`;

const DocumentationSection = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.08) 0%, rgba(255, 153, 0, 0.02) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 15px;
  padding: 3rem 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 0.8s ease-out both;
  box-shadow: 0 10px 30px rgba(255, 153, 0, 0.1);
  
  &:nth-child(1) { animation-delay: 0.2s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.4s; }
`;

const SectionTitle = styled.h2`
  color: #FF9900;
  font-size: 1.8rem;
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
  }
`;

const DocumentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DocumentCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.12) 0%, rgba(255, 153, 0, 0.04) 100%);
  border: 2px solid rgba(255, 153, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out both;
  
  &:nth-child(1) { animation-delay: 0.3s; }
  &:nth-child(2) { animation-delay: 0.4s; }
  &:nth-child(3) { animation-delay: 0.5s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  &:nth-child(5) { animation-delay: 0.7s; }
  &:nth-child(6) { animation-delay: 0.8s; }
  
  &:hover {
    border-color: #FF9900;
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(255, 153, 0, 0.25);
  }
  
  h3 {
    color: #FF9900;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
  
  p {
    color: #c0c0c0;
    font-size: 0.95rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #FF9900 0%, #ff7700 100%);
  color: #000;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 20px rgba(255, 153, 0, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(255, 153, 0, 0.5);
  }
`;

const UploadBox = styled.div`
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(255, 153, 0, 0.02) 100%);
  border: 2px dashed rgba(255, 153, 0, 0.5);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  
  &:hover {
    border-color: #FF9900;
    background: linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(255, 153, 0, 0.05) 100%);
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  color: #FF9900;
  font-weight: bold;
  font-size: 1.1rem;
  
  small {
    display: block;
    font-size: 0.85rem;
    color: #a0a0a0;
    margin-top: 0.5rem;
  }
`;

const Description = styled.p`
  color: #d0d0d0;
  line-height: 1.8;
  font-size: 1rem;
  margin: 1rem 0;
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: rgba(76, 175, 80, 0.15);
  border-left: 4px solid #4CAF50;
  border-radius: 8px;
  color: #4CAF50;
  font-weight: bold;
  animation: ${fadeInUp} 0.4s ease-out;
`;

const DocList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
`;

const DocListItem = styled.li`
  padding: 0.8rem 0;
  color: #d0d0d0;
  margin-left: 2rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  
  &:hover {
    color: #FF9900;
    transform: translateX(10px);
  }
  
  strong {
    color: #FFD580;
  }
`;

const Documentation = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      console.log('File selected:', file.name);
    }
  };

  return (
    <DocumentationContainer>
      <ContentWrapper>
        <PageTitle>Project Documentation</PageTitle>

        <DocumentationSection>
          <SectionTitle>Available Resources</SectionTitle>
          <Description>
            Access comprehensive documentation about the AWS 3-Tier Web Application architecture, 
            deployment procedures, and industry best practices for cloud infrastructure management.
          </Description>

          <DocumentList>
            <DocumentCard>
              <h3>📘 Architecture Guide</h3>
              <p>
                In-depth explanation of the 3-tier architecture design patterns and component interactions
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>

            <DocumentCard>
              <h3>🚀 Deployment Guide</h3>
              <p>
                Complete step-by-step instructions for deploying the application to AWS infrastructure
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>

            <DocumentCard>
              <h3>🔒 Security Best Practices</h3>
              <p>
                Comprehensive security configurations and best practices implemented in the architecture
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>

            <DocumentCard>
              <h3>📊 API Documentation</h3>
              <p>
                Complete API reference with all available endpoints, parameters, and usage examples
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>

            <DocumentCard>
              <h3>⚙️ Configuration Guide</h3>
              <p>
                Configuration options, environment variables, and customization reference resource
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>

            <DocumentCard>
              <h3>🔧 Troubleshooting Guide</h3>
              <p>
                Common issues, error solutions, and troubleshooting procedures for all components
              </p>
              <DownloadButton href="#" onClick={(e) => { e.preventDefault(); alert('Documentation coming soon!'); }}>
                Download PDF
              </DownloadButton>
            </DocumentCard>
          </DocumentList>
        </DocumentationSection>

        <DocumentationSection>
          <SectionTitle>Upload Additional Resources</SectionTitle>
          <Description>
            Have additional documentation, guides, or resources? Upload them here for team access and knowledge sharing.
          </Description>

          <UploadBox>
            <UploadLabel htmlFor="doc-upload">
              📎 Click to upload or drag and drop
              <small>(PDF, DOC, TXT, MD formats supported)</small>
            </UploadLabel>
            <UploadInput
              id="doc-upload"
              type="file"
              onChange={handleFileUpload}
              accept=".pdf,.doc,.docx,.txt,.md"
            />
          </UploadBox>

          {uploadedFile && (
            <SuccessMessage>
              ✓ File selected: <strong>{uploadedFile.name}</strong>
            </SuccessMessage>
          )}
        </DocumentationSection>

        <DocumentationSection>
          <SectionTitle>Documentation Overview</SectionTitle>
          <Description>
            Our comprehensive documentation library covers the following topics:
          </Description>
          <DocList>
            <DocListItem>
              <strong>Getting Started:</strong> Quick start guide for new developers and operators
            </DocListItem>
            <DocListItem>
              <strong>Architecture Design:</strong> Detailed descriptions of each tier, component interaction, and design decisions
            </DocListItem>
            <DocListItem>
              <strong>Deployment Procedures:</strong> Manual deployment, automated CI/CD pipelines, and infrastructure-as-code examples
            </DocListItem>
            <DocListItem>
              <strong>Operations Guide:</strong> Monitoring, scaling, maintenance procedures, and incident response
            </DocListItem>
            <DocListItem>
              <strong>Security Implementation:</strong> Security group configurations, IAM policies, encryption, and compliance
            </DocListItem>
            <DocListItem>
              <strong>API Reference:</strong> Complete endpoint documentation with request/response examples and error codes
            </DocListItem>
            <DocListItem>
              <strong>Troubleshooting Guide:</strong> Common problems, solutions, and debugging procedures
            </DocListItem>
            <DocListItem>
              <strong>Performance Tuning:</strong> Optimization tips, caching strategies, and load balancing configuration
            </DocListItem>
          </DocList>
        </DocumentationSection>
      </ContentWrapper>
    </DocumentationContainer>
  );
};

export default Documentation;
