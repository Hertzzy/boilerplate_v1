import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #536d82; /* Blue */
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

const Loading: React.FC = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default Loading;