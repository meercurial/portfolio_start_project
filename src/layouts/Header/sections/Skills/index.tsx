import React from 'react'
import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper'
import { SectionTitle } from '../../../../components/styledComponents/SectionTitle'
import { Skill } from './Skill'
import { skillData } from '../../../../database/store'

export const Skills: React.FC = () => {
  return (
    <StyledSkills>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper>
            <Skill  />
        </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills: any = styled.section``