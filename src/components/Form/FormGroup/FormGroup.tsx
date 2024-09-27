// src/components/Form/FormGroup.tsx
import React from 'react';
import { Group, Label, FormGroupProps } from './FormGroupStyle';

const FormGroup: React.FC<FormGroupProps> = ({ label, htmlFor, children }) => {
  return (
    <Group>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </Group>
  );
};

export default FormGroup;
