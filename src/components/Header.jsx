// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { FaSignOutAlt, FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ToggleThemeButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.text};
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;

  &:hover {
    color: red;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.text};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.text};
  }
`;

const Header = ({ signOut, toggleMobileSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <MobileMenuButton
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
      >
        <FaBars />
      </MobileMenuButton>
      <Title>The System Marketing Analytics</Title>
      <Nav>
        <ToggleThemeButton onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleThemeButton>
        <LogoutButton onClick={signOut} aria-label="Logout">
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
