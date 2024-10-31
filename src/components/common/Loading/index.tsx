import React from 'react';
import { Overlay, Spinner } from './LoadingStyle';

const Loading: React.FC = () => {
  return (
    <Overlay>
      <Spinner className="spinner-dark" />
    </Overlay>
  );
};

export default Loading;
