// views/LoginView.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/form/Input';
import Button from '../components/buttons/Button';
import { useAuth } from '../context/AuthContext'; // Importe o useAuth

const LoginContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const LoginForm = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const LoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); // Use o login do contexto

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      // Redirecionar o usuário após o login bem-sucedido
    } catch (error) {
      console.error('Erro de login:', error);
      // Exibir mensagem de erro para o usuário
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit" color="#536d82">
            Login
          </Button>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginView;
