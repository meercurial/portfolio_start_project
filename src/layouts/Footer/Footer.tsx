import React from 'react';
import styled from 'styled-components';
import { Socials } from './Socials/Socials';
import { GitComponent } from './GitComponent/GitComponent';
import { Container } from '../../components/styled-components/Container';
import { FlexWrapper } from '../../components/styled-components/FlexWrapper';

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
