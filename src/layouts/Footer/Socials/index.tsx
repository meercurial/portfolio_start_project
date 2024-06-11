import React from 'react';
import styled from 'styled-components';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { SocialMediaCard } from './SocialMediaCard';
import { socialsData, socialsDataType } from '../../../database/store';

export const Socials: React.FC = () => {
  return (
    <SocialsContainer>
      <StyledText
        display="flex"
        justifyContent="start"
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
