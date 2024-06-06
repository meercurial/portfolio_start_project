import React from 'react';
import styled from 'styled-components';
import { Project } from './Project';
import { SectionTitle } from '../../../components/styledComponents/SectionTitle';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { Container } from '../../../components/styledComponents/Container';
import { StyledText } from '../../../components/styledComponents/StyledText';
import { projectData } from '../../../database/store';

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
        <Project projectData={projectData} />
      </Container>
    </StyledProjects>
  );
};

const StyledProjects: any = styled.section``;
