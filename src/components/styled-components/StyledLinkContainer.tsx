import styled from 'styled-components';

type StyleLinkContainerPropsType = {
  position?: string;
  width?: string;
  height?: string;

  display?: string;
  flexdirection?: string;
  justifycontent?: string;
  alignitems?: string;
  padding?: string;

  flex?: string;
  order?: string;
  flexgrow?: string;
  margin?: string;
};

export const StyleLinkContainer: any = styled.div<StyleLinkContainerPropsType>`
  /* link */
  position: ${(props) => props.position || 'static'};
  width: ${(props) => props.width || '102px'};
  height: ${(props) => props.height || '26px'};
  /* Автолейаут */
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => props.flexdirection || 'row'};
  justify-content: ${(props) => props.justifycontent || 'center'};
  align-items: ${(props) => props.alignitems || 'center'};
  padding: ${(props) => props.padding || '0px'};

  /* Inside Auto Layout */
  flex: ${(props) => props.flex || 'none'};
  order: ${(props) => props.order || '1'};
  flex-grow: ${(props) => props.flexgrow || '0'};
  margin: ${(props) => props.margin || '0px 10px'};
`;
