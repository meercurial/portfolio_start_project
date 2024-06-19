import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/styled-components/SectionTitle';
import {FlexWrapper} from '../../../components/styled-components/FlexWrapper';
import {Container} from '../../../components/styled-components/Container';
import {skillData} from '../../../database/store';
import {Skill} from './skill/Skill';
import {StyledText} from "../../../components/styled-components/StyledText";
import skillImage from "../../../assets/undrow_project_completed.svg"

export const Skills: React.FC = () => {
    const mapElement = skillData.map((obj, index) => {
        return (
            <Skill iconId={obj.iconId} width={obj.width} height={obj.height} viewBox={obj.viewBox}
                   skillTitleText={obj.skillTitleText} key={index}/>
        );
    })
    return (
        <StyledSkillsSection>
            <Container>
                <SectionTitle
                    color="rgb(232, 73, 73)"
                    fontFamily="Be Vietnam"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="29px"
                    letterSpacing="0%"
                    textAlign="center">
                    Skills
                </SectionTitle>
                <FlexWrapper justifyContent={'space-between'} alignItems='center'>
                    <FlexWrapper flexDirection='column'>
                        <StyledText
                            color="rgb(129, 128, 128)"
                            fontFamily="Be Vietnam"
                            fontSize="18px"
                            fontWeight="400"
                            lineHeight="26px"
                            textAlign="center"
                            whiteSpace="nowrap"
                        >
                            I have a vast experience in the following web technologies:
                        </StyledText>
                        <StyledSkillWrapper >
                            {mapElement}
                        </StyledSkillWrapper>
                    </FlexWrapper>
                    <img src={skillImage} alt='image'/>
                </FlexWrapper>
            </Container>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
    background: rgb(245, 245, 245);
`;
const StyledSkillWrapper: any = styled.div`
    display: flex;
`;