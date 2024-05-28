import React from 'react';
import sprite from '../../assets/images/sprite.svg';

 interface InterfaceIcon {
  iconId: string
  width?: string
  height?: string
  viewBox?: string 
}

export const Icon: React.FC<InterfaceIcon> = (props) => {
  const {height, width, viewBox, iconId}  = props
  return <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
   <use xlinkHref={`${sprite}#${iconId}`} /> 
</svg>
};

 