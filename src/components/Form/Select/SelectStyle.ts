import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  borderColor?: string;
  disabled?: boolean;
}

export const StyledSelect = styled.select<{ borderColor?: string }>`
  border: 1px solid ${({ borderColor }) => borderColor || '#ccc'};
  border-radius: 5px;
  padding: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: white;

  &:focus {
    border-color: #536d82;
    outline: none;
  }
`;
