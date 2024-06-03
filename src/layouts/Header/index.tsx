import React from 'react';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import styled from 'styled-components';

export const Header: React.FC = () => {
  return (
    <StyledHeader
      position="absolute"
      width="1920px"
      height="83px"
      left="0"
      right="0"
      top="0"
      bottom="2822px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding="24px 100px 24px 100px"
      boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 2px 1px 0px rgba(0, 0, 0, 0.12),0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
      background="rgb(252, 252, 252)">
      <Logo />
      <Menu />
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
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
`;
