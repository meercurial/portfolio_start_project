import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/styled-components/Container';
import { FlexWrapper } from '../../components/styled-components/FlexWrapper';
import { Socials } from './socials/Socials';
import { GitComponent } from './git-component/GitComponent';

export const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <Container>
        <FlexWrapper justifyContent="space-between" flexDirection="row">
          <Socials />
          <GitComponent />
        </FlexWrapper>
      </Container>
    </StyledFooterContainer>
  );
};

const StyledFooterContainer: any = styled.footer`
  height: 450px;
`;
