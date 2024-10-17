import styled from 'styled-components';

export interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

export const StyledButton = styled.button`
  background-color: #536d82;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: auto;

  &:hover {
    background-color: #465c6e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
