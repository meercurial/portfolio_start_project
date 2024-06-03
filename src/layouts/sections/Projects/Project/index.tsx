import React from 'react'
import styled from 'styled-components'
import { Image } from '../../../../components/Image'

export const Project: React.FC = () => {
  return (
    <StyledProject>
        <Image />
        <p></p>
        <button>Learn more</button>
    </StyledProject>
  )
}

const StyledProject: any = styled.div`

`