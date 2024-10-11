import styled, { keyframes } from 'styled-components';

export interface MessageAlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

// Animação para a entrada suave do alerta
export const slideIn = keyframes`
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
export const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const AlertContainer = styled.div<{ type: 'success' | 'error'; isExiting: boolean }>`
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

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 1px;
  right: 1px;
`;
