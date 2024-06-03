import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/sample_user.jpeg';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledBtn } from '../../../components/styledComponents/StyledBtn';
import { StyledTextBtn } from '../../../components/styledComponents/StyledTextBtn';

export const Main: React.FC = () => {
  return (
    <StyledMain
      position="absolute"
      width="1245px"
      height="495px"
      left="100px"
      right="95px"
      top="147px"
      bottom="2263px"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      padding="0px">
      <FlexWrapper
        position="static"
        width="553px"
        height="250px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        padding="0px"
        flex="none"
        order="0"
        flexGrow="0"
        margin="0px 281px">
        <span>Hi, I'm a</span>
        <MainTitle>Software Developer</MainTitle>
        <p>
          I'm Jihn Doe, a developer dedicated to making the world <br />a better place one line of
          code at a time.
        </p>
        <StyledBtn
          position="static"
          width="98px"
          height="42px"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="8px 16px 8px 16px"
          flex="none"
          order="2"
          flexGrow="0"
          margin="30px 0px"
          borderRadius="4px"
          boxShadow="0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 3px 1px 0px rgba(0, 0, 0, 0.12),0px 2px 2px 0px rgba(0, 0, 0, 0.14)"
          background="rgb(232, 73, 73)">
          <StyledTextBtn
            position="static"
            width="66px"
            height="26px"
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            padding="8px 16px 8px 16px"
            flex="none"
            order="0"
            flexGrow="0"
            margin="0px 0px"
            color="rgb(255, 255, 255)"
            fontFamily="Be Vietnam"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            letterSpacing="0%"
            textAlign="center">
            Hire me
          </StyledTextBtn>
        </StyledBtn>
      </FlexWrapper>
      <StyledPhotoImg
        src={photo}
        alt="user photo"
        position="static"
        width="411px"
        height="495px"
        flex="none"
        order="1"
        flexGrow="0"
        margin="0px 281px"
      />
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
