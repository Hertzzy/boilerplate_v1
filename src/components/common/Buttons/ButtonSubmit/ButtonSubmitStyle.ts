import styled from 'styled-components';

export interface ButtonSubmitProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 18px;
  font-size: 14px;
  color: white;
  background-color: #536d82;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #536d82;
  }

  &:active {
    background-color: #536d82;
  }

  svg {
    margin-right: 8px;
  }
`;
