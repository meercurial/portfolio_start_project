import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {menuTitle} from '../../database/store';
import {Icon} from '../icon/Icon';
import {StyleLinkContainer} from '../styled-components/StyledLinkContainer';
import {StyledTextBtn} from '../styled-components/StyledTextBtn';

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
                                    <StyledTextBtn
                                        color="rgb(0, 0, 0)"
                                        fontFamily="Be Vietnam"
                                        fontSize="18px"
                                        fontWeight="400"
                                        lineHeight="26px"
                                        letterSpacing="0%"
                                        textAlign="left">
                                        {obj.menuTitleText}
                                    </StyledTextBtn>
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

const StyledNavMenu: any = styled.nav`
    ul {
        display: flex;
        gap: 20px;
    }
`;

const ListItem = styled.li`

`

const StyledLink: any = styled(Link as any)<{ to: any }>`
    color: rgb(0, 0, 0);
    font-family: 'Be Vietnam', 'sans-serif';
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;
