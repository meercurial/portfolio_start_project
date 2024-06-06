import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/sample_user.jpeg';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledBtn } from '../../../components/styledComponents/StyledBtn';
import { StyledTextBtn } from '../../../components/styledComponents/StyledTextBtn';

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <span>Hi, I'm a</span>
        <MainTitle>Software Developer</MainTitle>
        <p>
          I'm Jihn Doe, a developer dedicated to making the world <br />a better place one line of
          code at a time.
        </p>
        <StyledBtn>
          <StyledTextBtn>Hire me</StyledTextBtn>
        </StyledBtn>
      </FlexWrapper>
      <StyledPhotoImg src={photo} alt="user photo" />
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
  display?: string;
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
  display: ${({ display }) => display};
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
