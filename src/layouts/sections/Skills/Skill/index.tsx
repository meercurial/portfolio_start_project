import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper';

interface ISkillProps {
  skillData: Array<{
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    skillTitleText: string;
  }>;
}

export const Skill: React.FC<ISkillProps> = ({ skillData }) => {
  return (
    <SkillsContainer>
      <SkillTitle>I have a vast experience in the following web technologies:</SkillTitle>
      {skillData.map((obj, index) => {
        return (
          <FlexWrapper key={index}>
            <Icon iconId={obj.iconId} width={obj.width} height={obj.height} viewBox={obj.viewBox} />
            <SkillText>{obj.skillTitleText}</SkillText>
          </FlexWrapper>
        );
      })}
    </SkillsContainer>
  );
};

const SkillTitle: any = styled.span`
  width: 510px;
  height: 30px;
`;

interface ISkillText {
  position?: string;
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  margin?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
}

export const SkillText: any = styled.h3<ISkillText>``;

interface ISkillsContainer {
  position?: string;
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  margin?: string;
}

const SkillsContainer: any = styled.div<ISkillsContainer>``;

interface IStyledSkillWrapper {
  position?: string;
  width?: string;
  height?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  margin?: string;
}

const StyledSkillWrapper: any = styled.div<IStyledSkillWrapper>`
  position: ${({ position }) => position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  margin: ${({ margin }) => margin};
`;
