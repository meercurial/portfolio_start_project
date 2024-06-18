import styled from 'styled-components';

interface IFlexWrapper {
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
  gap?: string;
  border?: string;
  flexWrap?: string;
  background?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

export const FlexWrapper: any = styled.div<IFlexWrapper>`
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  padding: ${({ padding }) => padding};
  flex: ${({ flex }) => flex};
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => border};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  background: ${({ background }) => background};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  height: 100%;
`;
