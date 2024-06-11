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
    <FlexWrapper gap="58px" padding="117px 100px 40px" justifyContent="center">
      {projectData.map((obj, i) => {
        return (
          <ProjectCardContainer>
            <Image src={obj.src} alt={obj.alt} />
            <p>{obj.projectText}</p>
            <StyledBtn
              display="flex"
              flex-direction="row"
              cursor="pointer"
              padding="0px 125px"
              justifyContent="center"
              alignItems="center"
              pading="0px 125px 12px"
              width="131px"
              height="42px"
              border="2px solid rgb(255, 255, 255)"
              borderRadius="4px"
              background="rgba(52, 61, 104, 0.08)">
              Learn more
            </StyledBtn>
          </ProjectCardContainer>
        );
      })}
    </FlexWrapper>
  );
};

const ProjectCardContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 12px 0px;
  width: 381px;
  height: 434px;
  border: 1px solid red;
`;
