import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../../components/Image';
import { StyledBtn } from '../../../../components/styledComponents/StyledBtn';

export const Project: React.FC = (props) => {
  return (
    <ProjectCard>
      <Image />
      <p></p>
      <StyledBtn
        width="131px"
        height="42px"
        border="2px solid rgb(255, 255, 255)"
        borderRadius="4px"
        background="rgba(52, 61, 104, 0.08)">
        Learn more
      </StyledBtn>
    </ProjectCard>
  );
};

const ProjectCard: any = styled.div``;
