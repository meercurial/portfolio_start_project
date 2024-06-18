import React from 'react';
import { FlexWrapper } from '../../../components/styled-components/FlexWrapper';
import { StyledText } from '../../../components/styled-components/StyledText';
import { Icon } from '../../../components/Icon/Icon';
import styled from 'styled-components';

export const GitComponent = () => {
  return (
    <StyledGitComponent>
      <FlexWrapper
        flexDirection="column"
        width="270px"
        height="80px"
        border="2px solid rgb(255, 255, 255)">
        <StyledText
          marginBottom="20px"
          color="rgb(255, 255, 255)"
          fontSize=" 20px"
          fontWeight=" 500"
          lineHeight=" 29px"
          letterSpacing=" 0%"
          textAlign="center">
          More projects I've worked on
        </StyledText>
        <FlexWrapper flexDirection="row" justifyContent="flex-start">
          <Icon iconId="github-icon" />
          <StyledText
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            letterSpacing="0%"
            textAlign="center"
            whiteSpace="nowrap">
            @john-doe on github
          </StyledText>
        </FlexWrapper>
      </FlexWrapper>
    </StyledGitComponent>
  );
};

const StyledGitComponent = styled.div`
  align-items: center;
  width: 270px;
  height: 80px;
`;
