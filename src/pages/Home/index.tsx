import Container from '../../components/container';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

const Home = () => {
  const { user } = useAuth();

  return (
    <Container>
      <h2>Bem-vindo, {user ? user.name : ' '}!</h2>
    </Container>
  );
};

export default Home;
