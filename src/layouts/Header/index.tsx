import React from 'react';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import styled from 'styled-components';
import { Container } from '../../components/styledComponents/Container';
import { FlexWrapper } from '../../components/styledComponents/FlexWrapper';

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent="space-between" textAlign="center" padding="24px 100px">
          <Logo />
          <Menu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

interface IStyledHeader {
  position?: string;
  width?: string;
  height?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  boxShadow?: string;
  background?: string;
}

const StyledHeader: any = styled.header<IStyledHeader>`
  display: flex;
  justify-content: space-between;
`;
