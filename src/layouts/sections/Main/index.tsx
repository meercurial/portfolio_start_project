import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/sample_user.jpeg';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledBtn } from '../../../components/styledComponents/StyledBtn';
import { StyledTextBtn } from '../../../components/styledComponents/StyledTextBtn';
import { Container } from '../../../components/styledComponents/Container';
import { StyledText } from '../../../components/styledComponents/StyledText';

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justifyContent="space-between" padding="64px 100px 37px">
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
              I'm Jihn Doe, a developer dedicated to making the world <br />a better place one line
              of code at a time.
            </StyledText>
            <StyledBtn
              display="flex"
              flex-direction="row"
              cursor="pointer"
              padding="8px 16px 8px 16px"
              justifyContent="center"
              alignItems="center"
              width="100px"
              height="45px"
              borderRadius="4px"
              boxShadow="0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 3px 1px 0px rgba(0, 0, 0, 0.12),0px 2px 2px 0px rgba(0, 0, 0, 0.14)"
              background="rgb(232, 73, 73)">
              <StyledTextBtn
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                padding="8px 16px 8px 16px"
                width="65px"
                height="25px"
                whiteSpace="nowrap"
                color=" rgb(255, 255, 255)"
                font-size=" 18px"
                font-weight=" 400"
                line-height=" 26px"
                letter-spacing=" 0%"
                text-align=" center">
                Hire me
              </StyledTextBtn>
            </StyledBtn>
          </AboutMe>
          <StyledPhotoImg src={photo} alt="user photo" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

interface IStyledMain {
  position?: string;
  width?: string;
  height?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
}

const StyledMain: any = styled.main<IStyledMain>`
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
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
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex: ${({ flex }) => flex};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  margin: ${({ margin }) => margin};
`;

const MainTitle: any = styled.h1`
  color: rgb(52, 61, 104);
  font-family: Be Vietnam;
  font-size: 48px;
  font-weight: 600;
  line-height: 117.6%;
  letter-spacing: 0.18px;
  text-align: left;
`;

const AboutMe: any = styled.div`
  width: 555px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
