// components/Select.tsx
import React from 'react';
import { SelectProps, StyledSelect } from './SelectStyle';

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
