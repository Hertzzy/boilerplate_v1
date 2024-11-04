import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Button from '../../components/common/Buttons/Button';
import MessageAlert from '../../components/common/MessageAlert';
import { useAuth } from '../../context/AuthContext';
import { LoginContainer, LoginForm, FormGroup } from './LoginStyles';
import DarkModeButton from '../../components/common/DarkModeButton';

const LoginView: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password_hash, setPassword_hash] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('error');
  const { login, authenticated } = useAuth();
  const navigate = useNavigate();

  if (authenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    login(email, password_hash)
      .then(() => {
        setMessageType('success');
        setMessage('Login bem-sucedido!');
        navigate('/');

        setTimeout(() => {
          setMessage(null);
          navigate('/');
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
    <>
      <div className="postion-btn-dark-login">
        <DarkModeButton />
      </div>
      <LoginContainer>
        {message && <MessageAlert message={message} type={messageType} onClose={handleCloseMessage} />}
        <LoginForm>
          <h2>LOGIN</h2>
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
            <div className="form-footer">
              <Button type="submit">Entrar</Button>

              <Link to="/register">Não tenho cadastro</Link>
            </div>
          </form>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default LoginView;
