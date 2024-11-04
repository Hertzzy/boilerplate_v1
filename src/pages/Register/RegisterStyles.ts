import styled from 'styled-components';

export const RegisterContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    margin: 10px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div a {
    color: #536d82;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RegisterForm = styled.fieldset`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  border: none;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;
