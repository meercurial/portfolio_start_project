import React from 'react';
import styled from 'styled-components';
import { StyledText } from '../../../components/styled-components/StyledText';
import { socialsData, socialsDataType } from '../../../database/store';
import { SocialMediaCard } from './socialMediaCard/SocialMediaCard';

export const Socials: React.FC = () => {
  return (
    <SocialsContainer>
      <StyledText
        marginBottom="35px"
        color=" rgb(255, 255, 255)"
        fontSize="20px"
        fontWeight="500"
        lineHeight="29px"
        letterSpacing="0%"
        textAlign="center">
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
