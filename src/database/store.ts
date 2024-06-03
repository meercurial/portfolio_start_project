type skillDataType = {
  iconId: string;
  skillTitleText: string;
};

export const skillData: skillDataType[] = [
  { iconId: 'abfa-fawf', skillTitleText: 'HTML 5' },
  { iconId: 'awya-faws', skillTitleText: 'CSS 3' },
  { iconId: 'ajfa-fawz', skillTitleText: 'Java Script' },
  { iconId: 'afa-fawh', skillTitleText: 'Bootstrap' },
];

type menuTitleType = {
  menuTitleText?: string;
  iconId?: string;
  widthSvg?: string;
  heightSvg?: string;
  viewBox?: string;

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

export const menuTitle: menuTitleType[] = [
  {
    menuTitleText: 'Skills',

    /* Skills */
    position: 'static',
    width: '45px',
    height: '26px',
    /* Автолейаут */
    display: 'flex',
    flexdirection: 'row',
    justifycontent: 'flex-start',
    alignitems: 'center',
    padding: '0px',

    /* Inside Auto Layout */
    flex: 'none',
    order: '0',
    flexgrow: '0',
    margin: '0px 10px',
  },
  {
    menuTitleText: 'Projects',
    iconId: 'project-icon',
    widthSvg: '23.999969',
    heightSvg: '19.952271',
    viewBox: '0 0 24 19.9523',
    //-----------------------//

    position: 'static',
    width: '102px',
    height: '26px',
    display: 'flex',
    flexdirection: 'row',
    justifycontent: 'center',
    alignitems: 'center',
    padding: '0px',
    flex: 'none',
    order: '1',
    flexgrow: '0',
    margin: '0px 10px',
  },
  {
    menuTitleText: 'Contact me',
    position: 'static',
    width: '102px',
    height: '26px',
    display: 'flex',
    flexdirection: 'row',
    justifycontent: 'flex-start',
    alignitems: 'center',
    padding: '0px',
    flex: 'none',
    order: '2',
    flexgrow: '0',
    margin: '0px 10px',
  },
];
