import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';

  export const Header: React.FC = () => {
  return ( 
    <StyledHeader>
      <Logo />
       <Menu />
    </StyledHeader>
  );
};

const StyledHeader: any = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px 24px 100px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 2px 1px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  background: rgb(252, 252, 252);
`;
