import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/sample_user.jpeg';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledBtn } from '../../../components/styledComponents/StyledBtn';
import { StyledTextBtn } from '../../../components/styledComponents/StyledTextBtn';
import { Container } from '../../../components/styledComponents/Container';

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justifyContent="space-between" padding="64px 100px 37px">
          <AboutMe>
            <span>Hi, I'm a</span>
            <MainTitle>Software Developer</MainTitle>
            <p>
              I'm Jihn Doe, a developer dedicated to making the world <br />a better place one line
              of code at a time.
            </p>
            <StyledBtn
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding=" 8px 16px 8px 16px"
              width="100px"
              height="45px">
              <StyledTextBtn>Hire me</StyledTextBtn>
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

const MainTitle: any = styled.h1``;

const AboutMe: any = styled.div``;
