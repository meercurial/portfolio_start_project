import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuTitle } from '../../database/store';
import { Icon } from '../Icon';
import { StyleLinkContainer } from '../styledComponents/StyledLinkContainer';
import { StyledText } from '../styledComponents/StyledText';

export const Menu: React.FC = () => {
  return (
    <StyledNavMenu>
      <ul>
        {menuTitle.map((obj, i) => (
          <li key={i}>
            <StyleLinkContainer>
              <StyledLink to="">
                {obj.iconId && (
                  <Icon
                    iconId={obj.iconId}
                    width={obj.widthSvg}
                    height={obj.heightSvg}
                    viewBox={obj.viewBox}
                  />
                )}
                {obj.menuTitleText ? (
                  <StyledText
                    color="rgb(0, 0, 0)"
                    fontFamily="Be Vietnam"
                    fontSize="18px"
                    fontWeight="400"
                    lineHeight="26px"
                    letterSpacing="0%"
                    textAlign="left">
                    {obj.menuTitleText}
                  </StyledText>
                ) : (
                  ''
                )}
              </StyledLink>
            </StyleLinkContainer>
          </li>
        ))}
      </ul>
    </StyledNavMenu>
  );
};

interface INavMenuStyle {
  display?: string;
  gap?: string;
  width?: string;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  position?: string;
  flexDirection?: string;
  padding?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  margin?: string;
}

const StyledNavMenu: any = styled.nav<INavMenuStyle>`
  ul {
    display: flex;
    gap: 20px;
  }
`;

const StyledLink: any = styled(Link as any)<{ to: any }>``;
