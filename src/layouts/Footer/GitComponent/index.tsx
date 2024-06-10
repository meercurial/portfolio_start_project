import React from 'react';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { Icon } from '../../../components/Icon';
import styled from 'styled-components';

export const GitComponent = () => {
  return (
    <StyledGitComponent>
      <FlexWrapper flexDirection="column">
        <StyledText display="flex" justifyContent="flex-start" marginBottom="20px">
          More projects I've worked on
        </StyledText>
        <FlexWrapper width="240px" height="30px">
          <Icon iconId="sff" />
          <StyledText>@john-doe on github</StyledText>
        </FlexWrapper>
      </FlexWrapper>
    </StyledGitComponent>
  );
};

const StyledGitComponent = styled.div`
  width: 270px;
  height: 80px;
`;
