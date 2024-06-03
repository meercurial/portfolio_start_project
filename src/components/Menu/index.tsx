import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menuTitle } from '../../database/store';
import { Icon } from '../Icon';
import { StyleLinkContainer } from '../styledComponents/StyledLinkContainer';

export const Menu: React.FC = () => {
  return (
    <StyledMenu display="flex" gap="30px" alignitems="center" justifyContent="space-between">
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
    </StyledMenu>
  );
};

interface IMenuStyle {
  display: string;
  gap: string;
  width?: string;
  height?: string;
  alignitems?: string;
  justifyContent?: string;
}

const StyledMenu: any = styled.nav<IMenuStyle>`
  ul {
    display: ${({ display }) => display};
    gap: ${({ gap }) => gap};
    align-items: ${({ alignitems }) => alignitems};
    justify-content: ${({ justifyContent }) => justifyContent};
  }
`;

const StyledLink: any = styled(Link as any)<{ to: any }>``;
