import styled from 'styled-components';

interface IStyledBtn {
  position?: string;
  width?: number;
  height?: number;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
  flex?: string;
  order?: string;
  flexGrow?: string;
  margin?: string;
  borderRadius?: string;
  boxShadow?: string;
  background?: string;
  border?: string;
  cursor?: string;
}

export const StyledBtn: any = styled.button<IStyledBtn>`
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
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};
`;
