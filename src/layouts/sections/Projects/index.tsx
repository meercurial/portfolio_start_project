import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/styledComponents/SectionTitle';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { Container } from '../../../components/styledComponents/Container';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { projectData, projectDataType } from '../../../database/store';
import { ProjectCard } from './ProjectCard';
import { Icon } from '../../../components/Icon';

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Container background="rgb(52, 61, 104)">
        <FlexWrapper flexDirection="column" paddingTop="30px">
          <FlexWrapper flexDirection="row" justifyContent="center" alignItems="center">
            <Icon
              iconId="gears-project-icon"
              width="30.000000"
              height="30.000000"
              viewBox="0 0 30 30"
            />
            <SectionTitle
              color="rgba(255, 255, 255, 0.87)"
              fontFamily="Be Vietnam"
              fontSize="20px"
              fontWeight="500"
              lineHeight="29px"
              letterSpacing="0%"
              textAlign="left">
              Projects
            </SectionTitle>
          </FlexWrapper>
          <StyledText
            display="flex"
            justifyContent="center"
            color="rgba(255, 255, 255, 0.87)"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            letterSpacing="0%"
            textAlign="left">
            A select number of projects.
          </StyledText>
        </FlexWrapper>
        <ProjectCard projectData={projectData as projectDataType[]} />
      </Container>
    </StyledProjects>
  );
};

const StyledProjects: any = styled.section``;
