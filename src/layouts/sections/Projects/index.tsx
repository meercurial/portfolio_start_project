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
        <FlexWrapper flexDirection="row" justifyContent="center" alignItems="center">
          <Icon
            iconId="gears-project-icon"
            width="30.000000"
            height="30.000000"
            viewBox="0 0 30 30"
          />
          <SectionTitle>Projects</SectionTitle>
        </FlexWrapper>
        <StyledText display="flex" justifyContent="center">
          A select number of projects.
        </StyledText>
        <ProjectCard projectData={projectData as projectDataType[]} />
      </Container>
    </StyledProjects>
  );
};

const StyledProjects: any = styled.section``;
