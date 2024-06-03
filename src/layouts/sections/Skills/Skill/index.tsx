import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';

type SkillPropsType = {
  iconId: string;
  skillTitleText: string;
};

export const Skill: React.FC<SkillPropsType> = ({ iconId, skillTitleText }) => {
  return (
    <StyledSkillsWrapper
      position="static"
      width="430pox"
      height="108px"
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="0px"
      flex="none"
      order="1"
      flexGrow="0"
      margin="40px 0px">
      <Icon iconId={iconId} />
      <SkillTitle>{skillTitleText}</SkillTitle>
    </StyledSkillsWrapper>
  );
};

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

const SkillTitle: any = styled.h3``;
