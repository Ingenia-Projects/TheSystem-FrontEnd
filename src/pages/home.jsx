// src/pages/Home/Home.jsx
import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Home = ({ user }) => {
  return (
    <HomeContainer>
      <WelcomeMessage>¡Bienvenido, {user?.username}!</WelcomeMessage>
      {/* Agrega más contenido según sea necesario */}
    </HomeContainer>
  );
};

export default Home;
