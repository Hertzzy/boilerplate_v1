import styled from 'styled-components';

export interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  borderColor?: string;
}

export const InputComponent = styled.input<{ borderColor?: string }>`
  border: 1px solid ${({ borderColor }) => borderColor || '#ccc'};
  border-radius: 5px;
  padding: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #536d82;
    outline: none;
  }
`;
