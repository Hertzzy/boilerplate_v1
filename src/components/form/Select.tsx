// components/Select.tsx
import React from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  borderColor?: string;
  disabled?: boolean; // Adiciona a propriedade disabled
}

const StyledSelect = styled.select<{ borderColor?: string }>`
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

const Select: React.FC<SelectProps> = ({ options, value, onChange, borderColor, disabled }) => {
  return (
    <StyledSelect value={value} onChange={onChange} borderColor={borderColor} disabled={disabled}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
