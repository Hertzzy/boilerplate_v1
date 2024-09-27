// src/pages/Login/index.tsx
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../components/Form/Input/Input';
import Button from '../../components/common/Buttons/Button';
import MessageAlert from '../../components/common/MessageAlert';
import { useAuth } from '../../context/AuthContext';
import { LoginContainer, LoginForm, FormGroup } from './LoginStyles';

const LoginView: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password_hash, setPassword_hash] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('error');
  const { login, authenticated } = useAuth();
  const navigate = useNavigate();

  // Redireciona se o usuário já estiver autenticado
  if (authenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password_hash)
      .then(() => {
        setMessageType('success');
        setMessage('Login bem-sucedido!');
        navigate('/'); // Redireciona para a página home

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
          <Button type="submit">Login</Button>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginView;
