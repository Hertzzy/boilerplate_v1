import React from 'react';
import { Overlay, Spinner } from './LoadingStyle';

const Loading: React.FC = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default Loading;
