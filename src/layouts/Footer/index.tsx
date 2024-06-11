import React from 'react';
import styled from 'styled-components';
import bg_wave_top from '../../assets/bg_wave_top.svg';
import bg_wave_bottom from '../../assets/bg_wave_bottom.svg';
import { Socials } from './Socials';
import { GitComponent } from './GitComponent';
import { Container } from '../../components/styledComponents/Container';
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper';

export const Footer: React.FC = () => {
  return (
    <Container>
      <StyledFooterContainer>
        <FlexWrapper
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          margin="auto 100px">
          <Socials />
          <GitComponent />
        </FlexWrapper>
      </StyledFooterContainer>
    </Container>
  );
};

const StyledFooterContainer: any = styled.footer``;
