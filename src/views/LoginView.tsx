// src/views/LoginView.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate para redirecionar o usuário
import styled from 'styled-components';
import Input from '../components/form/Input';
import Button from '../components/buttons/Button';
import MessageAlert from '../components/alerts/MessageAlert';
import { useAuth } from '../context/AuthContext';

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
  const [email, setEmail] = useState<string>('');
  const [password_hash, setPassword_hash] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('error');
  const { login } = useAuth();
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password_hash)
      .then(() => {
        setMessageType('success');
        setMessage('Login bem-sucedido!');

        setTimeout(() => {
          setMessage(null);
          navigate('/'); // Redireciona para a página home
        }, 3000);
      })
      .catch((error: any) => {
        setMessageType('error');
        setMessage(error.response?.data?.message || 'Erro ao fazer login');
      });
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
    <LoginContainer>
      {message && <MessageAlert message={message} type={messageType} onClose={handleCloseMessage} />}
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
              value={password_hash}
              onChange={e => setPassword_hash(e.target.value)}
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
