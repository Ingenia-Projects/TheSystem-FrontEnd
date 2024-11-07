
// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useTheme } from '../context/ThemeContext';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow-y: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const MainLayout = ({ children, user, signOut }) => {
  const { theme } = useTheme(); // Asegúrate de que theme no sea nulo
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <ThemeProvider theme={theme || { background: '#fff', text: '#000' }}>
      <LayoutContainer>
        <Header
          user={user}
          signOut={signOut}
          toggleMobileSidebar={toggleMobileSidebar}
        />
        <ContentWrapper>
          <Sidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            isMobileSidebarOpen={isMobileSidebarOpen}
            toggleMobileSidebar={toggleMobileSidebar}
          />
          <MainContent>{children}</MainContent>
        </ContentWrapper>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default MainLayout;
