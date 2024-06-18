import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/sample_user.jpeg';
import {FlexWrapper} from '../../../components/styled-components/FlexWrapper';
import {StyledBtn} from '../../../components/styled-components/StyledBtn';
import {StyledTextBtn} from '../../../components/styled-components/StyledTextBtn';
import {Container} from '../../../components/styled-components/Container';
import {StyledText} from '../../../components/styled-components/StyledText';

export const Main: React.FC = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent="space-between">
                    <AboutMe>
                        <StyledText
                            color="rgb(52, 61, 104)"
                            fontFamily="Be Vietnam"
                            fontSize="48px"
                            fontWeight="600"
                            lineHeight="117.6%"
                            letterSpacing="0.18px"
                            textAlign="left">
                            Hi, I'm a
                        </StyledText>
                        <MainTitle>Software Developer</MainTitle>
                        <StyledText>
                            I'm Jihn Doe, a developer dedicated to making the world <br/>a better place one line
                            of code at a time.
                        </StyledText>
                        <StyledBtn
                            display="flex"
                            flex-direction="row"
                            cursor="pointer"
                            padding="8px 16px 8px 16px"
                            justifyContent="flex-start"
                            margin="30px 0px"
                            alignItems="center"
                            width="100px"
                            height="45px"
                            borderRadius="4px"
                            boxShadow="0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 3px 1px 0px rgba(0, 0, 0, 0.12),0px 2px 2px 0px rgba(0, 0, 0, 0.14)"
                            background="rgb(232, 73, 73)"
                            color="rgb(255, 255, 255)"
                            textAlign="center"
                            whiteSpace="nowrap"
                            font-size=" 18px"
                            font-weight=" 400"
                            line-height=" 26px">
                            Hire me
                        </StyledBtn>
                    </AboutMe>
                    <StyledPhotoImg src={photo} alt="user photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain: any = styled.main`
    display: flex;
    padding: 100px 0px 25px;
`;

interface IPhoto {
    position?: string;
    width?: string;
    height?: string;
    flex?: string;
    order?: string;
    flexGrow?: string;
    margin?: string;
}

const StyledPhotoImg: any = styled.img<IPhoto>`
    position: ${({position}) => position};
    width: ${({width}) => width};
    height: ${({height}) => height};
    flex: ${({flex}) => flex};
    order: ${({order}) => order};
    flex-grow: ${({flexGrow}) => flexGrow};
    margin: ${({margin}) => margin};
`;

const MainTitle: any = styled.h1`
    color: rgb(52, 61, 104);
    font-family: Be Vietnam;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    margin: 0px 0px 30px;
`;

const AboutMe: any = styled.div`
    width: 555px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
