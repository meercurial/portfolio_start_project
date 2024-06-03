import React from 'react';
import styled from 'styled-components';
import bg_wave_top from '../../../assets/images/bg_wave_top.svg';
import bg_wave_bottom from '../../../assets/images/bg_wave_bottom.svg';

export const Footer: React.FC = () => {
  return <StyledFooterContainer>Footer</StyledFooterContainer>;
};

const StyledFooterContainer: any = styled.footer`
  background-image: url(${bg_wave_top});
  /* bg wave svg */
  position: absolute;
  width: 1440px;
  height: 250.5px;
  left: 0;
  right: 0;
  top: 2474px;
  bottom: -2280.5px;
`;
