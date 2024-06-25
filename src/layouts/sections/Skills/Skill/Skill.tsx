import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import hexagone from '../../../../assets/hexagone.svg';

interface ISkillProps {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
  skillTitleText: string;
}

export const Skill: React.FC<ISkillProps> = (props) => {
  return (
    <StyledSkillWrapper>
      <IconWrapper>
        <Icon
          iconId={props.iconId}
          width={props.width}
          height={props.height}
          viewBox={props.viewBox}
        />
      </IconWrapper>
      <SkillText>{props.skillTitleText}</SkillText>
    </StyledSkillWrapper>
  );
};

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

export const SkillText: any = styled.h3<ISkillText>`
  white-space: nowrap;
`;

const StyledSkillWrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 105px;
  border: 1px solid red;
  margin-right: 45px;
`;

const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: url(${hexagone});
    display: inline-block;

    position: absolute;
    left: -33%;
    top: -40%;
  }
`;
