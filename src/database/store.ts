import project_one from '../assets/images/projects_img/project_one.png';
import project_two from '../assets/images/projects_img/project_two.png';
import project_three from '../assets/images/projects_img/project_three.png';

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

export type projectDataType = {
  src: string;
  alt: string;
  projectText: string;
};

export const projectData: projectDataType[] = [
  {
    src: project_one,
    alt: 'project one image',
    projectText: 'Made a social media manager template using HTML 5, CSS and JS',
  },
  {
    src: project_two,
    alt: 'project two image',
    projectText: 'Made a simple card page using HTML 5 and CSS 3',
  },
  {
    src: project_three,
    alt: 'project three image',
    projectText: 'Made an I.P address tracking website.',
  },
];
