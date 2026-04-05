import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #0A0128 0%, #1a0a3e 100%);
  border-bottom: 2px solid rgba(255, 153, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const HeaderWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FF9900;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  span {
    font-size: 2rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 1200px) {
    gap: 0.5rem;
  }
  
  @media (max-width: 768px) {
    gap: 0.3rem;
    flex-wrap: wrap;
  }
`;

const NavLink = styled(Link)`
  color: #d0d0d0;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  white-space: nowrap;
  
  @media (max-width: 1024px) {
    font-size: 0.75rem;
    padding: 0.4rem 0.5rem;
  }
  
  &:hover {
    color: #FF9900;
    background: rgba(255, 153, 0, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    color: #FF9900;
    background: rgba(255, 153, 0, 0.15);
  }
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(76, 175, 80, 0.2);
  color: #4CAF50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #4CAF50;
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

const Header = ({ showHeader = true }) => {
  if (!showHeader) return null;

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo to="/">
          <span>☁️</span>
          AWS App
        </Logo>

        <NavLinks>
          <NavLink to="/">🏠 Home</NavLink>
          <NavLink to="/analytics">📊 Analytics</NavLink>
          <NavLink to="/add-transaction">➕ Add Txn</NavLink>
          <NavLink to="/db">📋 DB Demo</NavLink>
          <NavLink to="/aws-services">☁️ AWS</NavLink>
          <NavLink to="/documentation">📚 Docs</NavLink>
          <NavLink to="/about">ℹ️ About</NavLink>
        </NavLinks>

        <StatusBadge>
          System Online
        </StatusBadge>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
