import styled from 'styled-components';

interface IContainer {
  background?: string;
}

export const Container = styled.div<IContainer>`
  max-width: 1640px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  border: 1px solid red;
  background: ${({ background }) => background};
`;
