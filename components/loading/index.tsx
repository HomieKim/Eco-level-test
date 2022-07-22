import Image from 'next/image';
import React from 'react';
import { LoadingWrapper } from './loading.style';

const Loading = () => {
  return (
    <LoadingWrapper>
      <Image src="/icons/earth.svg" width={75} height={75} alt="earthIcon" />
      <span>Loading...</span>
    </LoadingWrapper>
  );
};

export default Loading;
