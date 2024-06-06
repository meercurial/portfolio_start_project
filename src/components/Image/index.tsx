import React from 'react';

interface IImage {
  src: string;
  alt?: string;
}

export const Image: React.FC<IImage> = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};
