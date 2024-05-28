import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../../../components/Icon'

export const Skill:React.FC = (props) => {
    const {iconId, skillTitle} = props
  return (
    <StyledSkill>
         <Icon iconId={'code'} />
         <SkillTitle></SkillTitle>
    </StyledSkill>
  )
}

const StyledSkill: any = styled.div`

`

const SkillTitle: any = styled.h3`

`

