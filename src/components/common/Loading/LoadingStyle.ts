import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #536d82;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 3s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
