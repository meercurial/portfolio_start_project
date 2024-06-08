import project_one from '../assets/projects_img/project_one.png';
import project_two from '../assets/projects_img/project_two.png';
import project_three from '../assets/projects_img/project_two.png';

export type skillDataType = {
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
    width: '52.173889',
    height: '52.173889',
    viewBox: '0 0 52.1739 52.1739',
  },
  {
    iconId: 'HTML5-icon',
    skillTitleText: 'HTML 5',
    width: '43.695679',
    height: '43.695679',
    viewBox: '0 0 43.6957 43.6957',
  },
  {
    iconId: 'JS',
    skillTitleText: 'Java Script',
    width: '44.491516',
    height: '49.562073',
    viewBox: '0 0 44.4915 49.5621',
  },
  {
    iconId: 'bootstrap-icon',
    skillTitleText: 'Bootstrap',
    width: '39.130432',
    height: '39.130432',
    viewBox: '0 0 39.1304 39.1304',
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
