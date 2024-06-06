import React from 'react';
import styled from 'styled-components';
import bg_wave_top from '../../../assets/images/bg_wave_top.svg';
import bg_wave_bottom from '../../../assets/images/bg_wave_bottom.svg';

export const Footer: React.FC = () => {
  return <StyledFooterContainer>Footer</StyledFooterContainer>;
};

const StyledFooterContainer: any = styled.footer`
  background-image: url(${bg_wave_top});
`;
