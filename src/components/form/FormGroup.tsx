// src/components/Form/FormGroup.tsx
import React from 'react';
import styled from 'styled-components';

interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

const Group = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
`;

const FormGroup: React.FC<FormGroupProps> = ({ label, htmlFor, children }) => {
  return (
    <Group>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </Group>
  );
};

export default FormGroup;
