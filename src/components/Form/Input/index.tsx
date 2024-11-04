import { forwardRef } from 'react';
import { InputProps, InputComponent } from './InputStyle';

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', placeholder, onChange, borderColor }, ref) => {
  return (
    <InputComponent ref={ref} type={type} placeholder={placeholder} onChange={onChange} borderColor={borderColor} />
  );
});

// Adicionando um displayName para facilitar a depuração
Input.displayName = 'Input';

export default Input;
