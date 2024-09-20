import styled from 'styled-components';

export interface ButtonBackProps {
  to: string;
  children: React.ReactNode;
}

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 6px;
  font-size: 20px;
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
  }
`;
