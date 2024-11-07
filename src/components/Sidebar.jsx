// src/components/Sidebar.jsx
import React from 'react';
import styled from 'styled-components';
import {
  FaHome,
  FaChevronRight,
  FaChevronLeft,
  FaBolt,
  FaUserPlus,
  FaRedo,
  FaShareAlt,
  FaDollarSign,
  FaBullhorn,
  FaSchool,
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

// Definición de los ítems de navegación
const navItems = [
  { name: 'Home', path: '/home', icon: <FaHome /> },
  { name: 'Activation', path: '/activation', icon: <FaBolt /> },
  { name: 'Acquisition', path: '/acquisition', icon: <FaUserPlus /> },
  { name: 'Retention', path: '/retention', icon: <FaRedo /> },
  { name: 'Referral', path: '/referral', icon: <FaShareAlt /> },
  { name: 'Revenue', path: '/revenue', icon: <FaDollarSign /> },
  { name: 'Campaigns', path: '/campaigns', icon: <FaBullhorn /> },
  { name: 'School Analytics', path: '/school-analytics', icon: <FaSchool /> },
];

const SidebarContainer = styled.aside`
  width: ${({ isCollapsed }) => (isCollapsed ? '80px' : '250px')};
  background-color: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.sidebarText};
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  transition: width 0.3s ease;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px; /* Altura del Header */
    left: ${({ isMobileSidebarOpen }) => (isMobileSidebarOpen ? '0' : '-250px')};
    height: calc(100vh - 60px);
    z-index: 1000;
    transition: left 0.3s ease;
    width: 250px;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isMobileSidebarOpen }) => (isMobileSidebarOpen ? 'block' : 'none')};
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: calc(100vh - 60px);
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  flex: 1;
`;

const NavItem = styled.li`
  width: 100%;
  margin-bottom: 15px;
`;

const StyledNavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme, active }) => (active ? theme.activeLink : theme.sidebarText)};
  text-decoration: none;
  font-size: 1.2rem;
  padding: ${({ isCollapsed }) => (isCollapsed ? '10px' : '12px 16px')};
  border-radius: 8px;
  gap: 10px;
  justify-content: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-start')};
  background-color: ${({ active, theme }) => (active ? theme.sidebarHoverBg : 'transparent')};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.sidebarHoverBg};
    color: ${({ theme }) => theme.text};
  }

  svg {
    font-size: 1.5rem;
  }

  /* Ajuste para el nombre del ítem cuando el sidebar está colapsado */
  span {
    display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'inline')};
  }
`;

const CollapseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.sidebarText};
  cursor: pointer;
  font-size: 1.2rem;
  align-self: ${({ isCollapsed }) => (isCollapsed ? 'center' : 'flex-end')};
  margin-top: auto;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  isMobileSidebarOpen,
  toggleMobileSidebar,
}) => {
  const location = useLocation();

  return (
    <>
      <Overlay
        isMobileSidebarOpen={isMobileSidebarOpen}
        onClick={toggleMobileSidebar}
      />
      <SidebarContainer
        isCollapsed={isCollapsed}
        isMobileSidebarOpen={isMobileSidebarOpen}
      >
        <NavList isCollapsed={isCollapsed}>
          {navItems.map((item) => (
            <NavItem key={item.name}>
              <StyledNavLink
                to={item.path}
                isCollapsed={isCollapsed}
                active={location.pathname === item.path ? 1 : 0}
                onClick={toggleMobileSidebar}
                aria-label={item.name}
              >
                {item.icon}
                <span>{!isCollapsed && item.name}</span>
              </StyledNavLink>
            </NavItem>
          ))}
        </NavList>
        <CollapseButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          isCollapsed={isCollapsed}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </CollapseButton>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
