import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon';

type SkillPropsType = {
  iconId: string;
  skillTitleText: string;
};

export const Skill: React.FC<SkillPropsType> = ({ iconId, skillTitleText }) => {
  return (
    <StyledSkill>
      <Icon iconId={iconId} />
      <SkillTitle>{skillTitleText}</SkillTitle>
    </StyledSkill>
  );
};

const StyledSkill: any = styled.div`
  width: 33%;
  background-color: #fefefc;
`;

const SkillTitle: any = styled.h3``;
