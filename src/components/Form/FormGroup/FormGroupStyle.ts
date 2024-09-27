import styled from 'styled-components';

export interface FormGroupProps {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}

export const Group = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #333;
`;
