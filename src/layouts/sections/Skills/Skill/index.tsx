import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';
import { skillData } from '../../../../database/store';

export const Skill: React.FC = () => {
  return (
    <SkillsContainer>
      <h3>I have a vast experience in the following web technologies:</h3>
      {skillData.map((obj, index) => (
        <SkillsContainer>
          <Icon
            key={index}
            iconId={obj.iconId}
            width={obj.width}
            height={obj.height}
            viewBox={obj.viewBox}
          />
          <SkillTitleText>{obj.skillTitleText}</SkillTitleText>
        </SkillsContainer>
      ))}
    </SkillsContainer>
  );
};

interface ISkillTitleText {
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

export const SkillTitleText: any = styled.h3<ISkillTitleText>``;

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

const SkillsContainer: any = styled.div<ISkillsContainer>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 42px;
`;

interface IStyledCardIconContainer {
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

const StyledCardIconContainer = styled.div<IStyledCardIconContainer>`
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
