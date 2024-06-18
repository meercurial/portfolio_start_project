import React from 'react';
import {Logo} from '../../components/Logo/Logo';
import {Menu} from '../../components/Menu/Menu';
import styled from 'styled-components';
import {Container} from '../../components/styled-components/Container';
import {FlexWrapper} from '../../components/styled-components/FlexWrapper';

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justifyContent="space-between" textAlign="center">
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    padding: 25px 0px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`;
