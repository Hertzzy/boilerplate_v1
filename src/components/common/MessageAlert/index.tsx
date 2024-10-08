// src/components/alerts/MessageAlert.tsx
import React, { useEffect, useState } from 'react';
import { AlertContainer, CloseButton, MessageAlertProps } from './MessageAlertStyle';

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
