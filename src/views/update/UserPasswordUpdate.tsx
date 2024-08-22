// src/views/UserPasswordUpdate.tsx
import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';
import Input from '../../components/form/Input';
import Button from '../../components/buttons/Button';
import FormGroup from '../../components/form/FormGroup';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

const UserPasswordUpdateContainer = styled.div`
  height: 100%;

  form {
    margin-top: 25px;
  }
`;

const UserPasswordButtons = styled.div`
  display: flex;
  gap: 10px; /* Espaço entre os botões */
`;

const UserPasswordUpdate = () => {
  const [password_hash, setPassword_hash] = useState('');
  const [current_password_hash, setCurrent_Password_hash] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
  };

  return (
    <UserPasswordUpdateContainer>
      <HeaderView pageTitle="Alterar Senha" />

      <form onSubmit={handleSubmit}>
        <div>
          <FormGroup label="Senha atual:" htmlFor="current-password">
            <Input
              type="password"
              placeholder="Digite sua senha atual"
              value={password_hash}
              onChange={e => setPassword_hash(e.target.value)}
            />
          </FormGroup>
          <FormGroup label="Nova senha:" htmlFor="new-password">
            <Input
              type="password"
              placeholder="Digite uma nova senha"
              value={current_password_hash}
              onChange={e => setCurrent_Password_hash(e.target.value)}
            />
          </FormGroup>
        </div>

        <UserPasswordButtons>
          <Button type="submit">
            <FaSave /> Salvar
          </Button>
          <Button type="button">
            <FaArrowLeft /> Voltar
          </Button>
        </UserPasswordButtons>
      </form>
    </UserPasswordUpdateContainer>
  );
};

export default UserPasswordUpdate;
