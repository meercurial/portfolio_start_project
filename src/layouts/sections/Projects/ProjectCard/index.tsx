import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../../components/Image';
import { StyledBtn } from '../../../../components/styledComponents/StyledBtn';
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper';

interface IProjectCardProps {
  projectData: Array<{ src: string; projectText: string; alt: string }>;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ projectData }) => {
  return (
    <FlexWrapper>
      {projectData.map((obj, i) => {
        return (
          <ProjectWrapper key={i}>
            <Image src={obj.src} alt={obj.alt} />
            <p>{obj.projectText}</p>
            <StyledBtn
              width="131px"
              height="42px"
              border="2px solid rgb(255, 255, 255)"
              borderRadius="4px"
              background="rgba(52, 61, 104, 0.08)">
              Learn more
            </StyledBtn>
          </ProjectWrapper>
        );
      })}
    </FlexWrapper>
  );
};

const ProjectWrapper: any = styled.div``;
