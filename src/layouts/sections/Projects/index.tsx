import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/styledComponents/SectionTitle';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { Container } from '../../../components/styledComponents/Container';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { projectData, projectDataType } from '../../../database/store';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle display="flex" justifyContent="center">
          Projects
        </SectionTitle>
        <StyledText display="flex" justifyContent="center">
          A select number of projects.
        </StyledText>
        <ProjectCard projectData={projectData as projectDataType[]} />
      </Container>
    </StyledProjects>
  );
};

const StyledProjects: any = styled.section``;
