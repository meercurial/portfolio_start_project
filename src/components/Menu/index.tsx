import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuTitle } from '../../database/store';
import { Icon } from '../Icon';
import { StyleLinkContainer } from '../styledComponents/StyledLinkContainer';

export const Menu: React.FC = () => {
  return (
    <StyledNavMenu
      position="static"
      width="350px"
      height="26px"
      display="flex"
      flex-direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding="0px"
      flex="none"
      order="1"
      flexGrow="0"
      margin="0px 10px">
      <ul>
        {menuTitle.map((obj, i) => (
          <li key={i}>
            <StyleLinkContainer
              position={obj.position}
              width={obj.width}
              height={obj.height}
              display={obj.display}
              flexdirection={obj.flexdirection}
              justifycontent={obj.justifycontent}
              alignitems={obj.alignitems}
              padding={obj.padding}
              flex={obj.flex}
              order={obj.order}
              flexgrow={obj.flexgrow}
              margin={obj.margin}>
              <StyledLink to="">
                {obj.iconId && (
                  <Icon
                    iconId={obj.iconId}
                    width={obj.widthSvg}
                    height={obj.heightSvg}
                    viewBox={obj.viewBox}
                  />
                )}
                {obj.menuTitleText}
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
    display: ${({ display }) => display};
    gap: ${({ gap }) => gap};
    align-items: ${({ alignItems }) => alignItems};
    justify-content: ${({ justifyContent }) => justifyContent};
    position: ${({ position }) => position};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    flex-direction: ${({ flexDirection }) => flexDirection};
    padding: ${({ padding }) => padding};
    flex: ${({ flex }) => flex};
    order: ${({ order }) => order};
    flex-grow: ${({ flexGrow }) => flexGrow};
    margin: ${({ margin }) => margin};
  }
`;

const StyledLink: any = styled(Link as any)<{ to: any }>``;
