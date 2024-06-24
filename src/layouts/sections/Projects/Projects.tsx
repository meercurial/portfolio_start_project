import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/styled-components/SectionTitle';
import { FlexWrapper } from '../../../components/styled-components/FlexWrapper';
import { Container } from '../../../components/styled-components/Container';
import { StyledText } from '../../../components/styled-components/StyledText';
import { projectData } from '../../../database/store';
import { Icon } from '../../../components/icon/Icon';
import { ProjectCard } from './project-card/ProjectCard';

export const Projects: React.FC = () => {
  const mapProjectData = projectData.map((obj, i) => {
    return <ProjectCard src={obj.src} alt={obj.alt} projectText={obj.projectText} />;
  });
  return (
    <StyledProjects>
      <Container>
        <FlexWrapper flexDirection="column">
          <FlexWrapper flexDirection="row" justifyContent="center">
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
            color="rgba(255, 255, 255, 0.87)"
            fontSize="18px"
            fontWeight="400"
            lineHeight="26px"
            letterSpacing="0%"
            textAlign="center">
            A select number of projects
          </StyledText>
          <>{mapProjectData}</>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects: any = styled.section`
  display: flex;
  background: rgb(52, 61, 104);
`;
