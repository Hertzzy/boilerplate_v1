// src/components/alerts/MessageAlert.tsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface MessageAlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

// Animação para a entrada suave do alerta
const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Animação para a saída suave do alerta
const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const AlertContainer = styled.div<{ type: 'success' | 'error'; isExiting: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${props => (props.type === 'success' ? '#4caf50' : '#f44336')};
  color: white;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${props => (props.isExiting ? slideOut : slideIn)} 0.5s forwards;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 6px;
`;

const MessageAlert: React.FC<MessageAlertProps> = ({ message, type, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Temporizador para fechar o alerta após 3 segundos
    const timeoutId = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 500); // Aguarda a animação de saída antes de fechar
    }, 3000);

    return () => clearTimeout(timeoutId); // Limpa o temporizador se o componente for desmontado
  }, [onClose]);

  return (
    <AlertContainer type={type} isExiting={isExiting}>
      {message}
      <CloseButton onClick={() => setIsExiting(true)}>✖</CloseButton>
    </AlertContainer>
  );
};

export default MessageAlert;
