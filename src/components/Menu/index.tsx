import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <StyledLink to="">Skills</StyledLink>
        </li>
        <li>
          <StyledLink to="">Projects</StyledLink>
        </li>
        <li>
          <StyledLink to="">Contact me</StyledLink>
        </li>
      </ul>
    </StyledMenu>
  );
};

const StyledMenu: any = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const StyledLink: any = styled(Link as any)<{to: any}> ``