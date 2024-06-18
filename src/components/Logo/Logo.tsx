import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';

export const Logo: React.FC = () => {
  return (
    <StyledLink to="/">
      <Icon iconId="svg-icon" width="24" height="24" viewBox="0 0 24 24" />
    </StyledLink>
  );
};

const StyledLink: any = styled(Link as any)<{ to: any }>``;
