import React from 'react';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { Icon } from '../../../components/Icon';
import styled from 'styled-components';

export const GitComponent = () => {
  return (
    <StyledGitComponent>
      <FlexWrapper
        flexDirection="column"
        width="270px"
        height="80px"
        alignItems="center"
        border="2px solid rgb(255, 255, 255)">
        <StyledText
          display="flex"
          justifyContent="center"
          marginBottom="20px"
          color="rgb(255, 255, 255)"
          fontSize=" 20px"
          fontWeight=" 500"
          lineHeight=" 29px"
          letterSpacing=" 0%"
          textAlign="center">
          More projects I've worked on
        </StyledText>
        <FlexWrapper width="240px" height="30px" flexDirection="row" justifyContent="flex-start">
          <Icon iconId="github-icon" />
          <StyledText
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            letterSpacing="0%"
            textAlign="left"
            whiteSpace="nowrap">
            @john-doe on github
          </StyledText>
        </FlexWrapper>
      </FlexWrapper>
    </StyledGitComponent>
  );
};

const StyledGitComponent = styled.div`
  width: 270px;
  height: 80px;
`;
