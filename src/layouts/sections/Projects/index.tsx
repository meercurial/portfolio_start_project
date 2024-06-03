import React from 'react'
import styled from 'styled-components'
import { Project } from './Project'
import { SectionTitle } from '../../../components/styledComponents/SectionTitle'
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper'


export const Projects: React.FC = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <span>A select number of projects.</span>
      <FlexWrapper>  <Project /></FlexWrapper>
    </StyledProjects>
  )
}

const StyledProjects: any = styled.section`
  min-height: 100vh;
  background-color: #deefff;
`