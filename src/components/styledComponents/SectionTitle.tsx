import styled from 'styled-components';

interface ISectionTitle {
  color: string;
  textAlign: string;
  position: string;
  width: string;
  height: string;
  display: string;
  flexDirection: string;
  justifyContent: string;
  alignItems: string;
  padding: string;
  flex: string;
  order: string;
  flexGrow: string;
  margin: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  fontHeight: string;
  lineHeight: string;
  letterSpacing: string;
}

export const SectionTitle: any = styled.h2<ISectionTitle>`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
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
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
