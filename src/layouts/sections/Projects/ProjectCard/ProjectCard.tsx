import React from 'react';
import styled from 'styled-components';
import { Image } from '../../../../components/Image/Image';
import { StyledBtn } from '../../../../components/styled-components/StyledBtn';
import { FlexWrapper } from '../../../../components/styled-components/FlexWrapper';
import { StyledTextBtn } from '../../../../components/styled-components/StyledTextBtn';
import { StyledText } from '../../../../components/styled-components/StyledText';

interface IProjectCardProps {
  projectData: Array<{ src: string; projectText: string; alt: string }>;
}

export const ProjectCard: React.FC<IProjectCardProps> = ({ projectData }) => {
  return (
    <FlexWrapper gap="58px" justifyContent="center">
      {projectData.map((obj, i) => {
        return (
          <ProjectCardContainer>
            <Image src={obj.src} alt={obj.alt} />
            <StyledText
              color="rgba(255, 255, 255, 0.87)"
              fontFamily="Be Vietnam"
              fontSize="16px"
              fontWeight="400"
              lineHeight="23px"
              letterSpacing="0%"
              textAlign="center">
              {obj.projectText}
            </StyledText>
            <StyledBtn
              display="flex"
              flex-direction="row"
              cursor="pointer"
              justifyContent="center"
              alignItems="center"
              width="135px"
              height="45px"
              border="2px solid rgb(255, 255, 255)"
              borderRadius="4px"
              background="rgba(52, 61, 104, 0.08)"
              whiteSpace="nowrap">
              <StyledTextBtn>Learn more</StyledTextBtn>
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
