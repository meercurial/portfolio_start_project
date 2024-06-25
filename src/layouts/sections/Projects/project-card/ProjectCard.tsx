import styled from 'styled-components';
import { Image } from '../../../../components/image/Image';
import { StyledBtn } from '../../../../components/styled-components/StyledBtn';
import { StyledTextBtn } from '../../../../components/styled-components/StyledTextBtn';
import { StyledText } from '../../../../components/styled-components/StyledText';

type ProjectCardProps = {
  src: string;
  alt: string;
  projectText: string;
};

export const ProjectCard = ({ src, alt, projectText }: ProjectCardProps) => {
  return (
    <ProjectCardItem>
      <Image src={src} alt={alt} />
      <StyledText
        color="rgba(255, 255, 255, 0.87)"
        fontFamily="Be Vietnam"
        fontSize="16px"
        fontWeight="400"
        lineHeight="23px"
        letterSpacing="0%"
        textAlign="center">
        {projectText}
      </StyledText>
      <StyledBtn
        cursor="pointer"
        width="135px"
        height="45px"
        border="2px solid rgb(255, 255, 255)"
        borderRadius="4px"
        background="rgba(52, 61, 104, 0.08)"
        whiteSpace="nowrap">
        <StyledTextBtn>Learn more</StyledTextBtn>
      </StyledBtn>
    </ProjectCardItem>
  );
};

const ProjectCardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 385px;
  height: 435px;
  border: 1px solid red;
`;
