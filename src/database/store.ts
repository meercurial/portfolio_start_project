type skillDataType = {
  iconId: string;
  skillTitleText: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const skillData: skillDataType[] = [
  {
    iconId: 'css-icon',
    skillTitleText: 'CSS3',
    width: '43.695679',
    height: '43.695679',
    viewBox: '0 0 43.6957 43.6957',
  },
  {
    iconId: 'css-icon',
    skillTitleText: 'HTML 5',
    width: '43.695679',
    height: '43.695679',
    viewBox: '0 0 43.6957 43.6957',
  },
  {
    iconId: 'css-icon',
    skillTitleText: 'Java Script',
    width: '43.695679',
    height: '43.695679',
    viewBox: '0 0 43.6957 43.6957',
  },
  {
    iconId: 'css-icon',
    skillTitleText: 'Bootstrap',
    width: '43.695679',
    height: '43.695679',
    viewBox: '0 0 43.6957 43.6957',
  },
];

type menuTitleType = {
  menuTitleText: string;
  iconId?: string;
  widthSvg?: string;
  heightSvg?: string;
  viewBox?: string;
};

export const menuTitle: menuTitleType[] = [
  {
    menuTitleText: 'Skills',
  },
  {
    menuTitleText: 'Projects',
    iconId: 'project-icon',
    widthSvg: '23.999969',
    heightSvg: '19.952271',
    viewBox: '0 0 24 19.9523',
  },
  {
    menuTitleText: 'Contact me',
  },
];
