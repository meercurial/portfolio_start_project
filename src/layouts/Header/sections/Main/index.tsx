import React from 'react'
import styled from 'styled-components';
import photo from '../../../../assets/images/sample user 1.jpeg';
import { FlexWrapper } from '../../../../components/styledComponents/FlexWrapper';

export const Main: React.FC = () => {
  return (
      <StyledMain>
        <FlexWrapper align={"center"} justify={"space-around"}>
        <div>
          <p>Hi, I'm a</p>
          <MainTitle>Software Developer</MainTitle>
          <p>I'm Jihn Doe, a developer dedicated to making the world <br/> 
          a better place one line of code at a time.</p>
          <button>Hire me</button>
        </div>
        <Photo src={photo} alt="user photo" />
        </FlexWrapper>
      </StyledMain>
  )
}

const StyledMain: any = styled.div`
  min-height: 100vh;
  backgrond-color: #fff5e7;
`

const Photo: any = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle: any = styled.h1`
  
`

