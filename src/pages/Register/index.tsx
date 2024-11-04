import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { registerUser } from '../../services/users/userServices';
import Button from '../../components/common/Buttons/Button';
import MessageAlert from '../../components/common/MessageAlert';
import Loading from '../../components/common/Loading';
import { RegisterContainer, RegisterForm, FormGroup } from './RegisterStyles';
import DarkModeButton from '../../components/common/DarkModeButton';

// Definindo o esquema de validação com Yup
const schema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password_hash: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
  })
  .required();

interface FormData {
  name: string;
  email: string;
  password_hash: string;
}

const RegisterView: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error'>('error');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async data => {
    setIsLoading(true);
    await registerUser(data)
      .then(response => {
        const msg = response.data.message;
        setMessage(msg);
        setMessageType('success');

        // Aguarda 3 segundos antes de redirecionar para o login
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      })
      .catch(error => {
        if (error.data.message) {
          setMessage(error.data.message || 'Erro ao registrar usuário');
        } else {
          setMessage('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        }
        setMessageType('error');
      })
      .finally(() => setIsLoading(false));
  };

  const handleCloseMessage = () => {
    setMessage(null);
  };

  return (
    <>
      <div className="postion-btn-dark-login">
        <DarkModeButton />
      </div>
      <RegisterContainer>
        {isLoading && <Loading />} {/* Exibindo o Loading enquanto a requisição é feita */}
        {message && <MessageAlert message={message} type={messageType} onClose={handleCloseMessage} />}
        <RegisterForm>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <input type="text" placeholder="Nome Completo" {...register('name', { required: true })} />
            </FormGroup>
            {errors.name && <span className="error-message">{errors.name.message}</span>}
            <FormGroup>
              <input type="email" placeholder="Email" {...register('email')} />
            </FormGroup>
            {errors.email && <span className="error-message">{errors.email.message}</span>}
            <FormGroup>
              <input type="password" placeholder="Senha" {...register('password_hash')} />
            </FormGroup>
            {errors.password_hash && <span className="error-message">{errors.password_hash.message}</span>}
            <div className="form-footer">
              <Button type="submit" disabled={isLoading}>
                Cadastrar
              </Button>
              <Link to="/login">Já tenho uma conta</Link>
            </div>
          </form>
        </RegisterForm>
      </RegisterContainer>
    </>
  );
};

export default RegisterView;
