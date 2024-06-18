import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components/Icon/Icon';
import { FlexWrapper } from '../../../../components/styled-components/FlexWrapper';
import { StyledText } from '../../../../components/styled-components/StyledText';

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
    <FlexWrapper flexDirection="column">
      <StyledText
        width="510px"
        height="30px"
        color="rgb(129, 128, 128)"
        fontFamily="Be Vietnam"
        fontSize="18px"
        fontWeight="400"
        lineHeight="26px"
        letterSpacing="0%"
        textAlign="left">
        I have a vast experience in the following web technologies:
      </StyledText>
      <FlexWrapper>
        {skillData.map((obj, index) => {
          return (
            <SkillsContainer key={index}>
              <Icon
                iconId={obj.iconId}
                width={obj.width}
                height={obj.height}
                viewBox={obj.viewBox}
              />
              <SkillText>{obj.skillTitleText}</SkillText>
            </SkillsContainer>
          );
        })}
      </FlexWrapper>
    </FlexWrapper>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 12px 0px;
  width: 75px;
  height: 102px;
  border: 1px solid red;
  margin-right: 45px;
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
