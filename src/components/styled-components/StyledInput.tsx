import styled from 'styled-components';

interface IStyledInput {
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
  alignSelf?: string;
  flexGrow?: string;
  margin?: string;
  boxSizing?: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  background?: string;
}

export const StyledInput = styled.input<IStyledInput>`
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
  align-self: ${({ alignSelf }) => alignSelf};
  flex-grow: ${({ flexGrow }) => flexGrow};
  margin: ${({ margin }) => margin};
  box-sizing: ${({ boxSizing }) => boxSizing};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
`;
