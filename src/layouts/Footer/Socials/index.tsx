import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { SocialMediaCard } from './SocialMediaCard';
import { socialsData, socialsDataType } from '../../../database/store';

export const Socials: React.FC = () => {
  return (
    <SocialsContainer>
      <StyledText display="flex" justifyContent="start" marginBottom="35px">
        My social media links:
      </StyledText>
      <SocialMediaCard socialsData={socialsData as socialsDataType[]} />
    </SocialsContainer>
  );
};

const SocialsContainer: any = styled.div`
  width: 315px;
  height: 95px;
`;
