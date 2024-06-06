import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';
import { SkillTitle } from '..';

type SkillPropsType = {
  iconId: string;
  skillTitleText: string;
  viewBox?: string;
  width?: string;
  height?: string;
};

export const Skill: React.FC<SkillPropsType> = ({
  iconId,
  skillTitleText,
  width,
  height,
  viewBox,
}) => {
  return (
    <StyledSkillsWrapper>
      <StyledCardIconContainer>
        <Icon iconId={iconId} width={width} height={height} viewBox={viewBox} />
        <SkillTitle>{skillTitleText}</SkillTitle>
      </StyledCardIconContainer>
    </StyledSkillsWrapper>
  );
};

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

interface IStyledSkillsWrapper {
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

const StyledSkillsWrapper: any = styled.div<IStyledSkillsWrapper>`
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
