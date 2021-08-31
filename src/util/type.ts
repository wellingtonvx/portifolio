import { IconType } from 'react-icons';

export interface ServicesProps {
  title: string;
  about: string;
  Icon: IconType;
}

export interface SkillProps {
  name: string;
  level: string;
  Icon: IconType;
}

export interface ProjectsProps {
  name: string;
  description: string;
  image_path: string;
  deployer_url: string;
  github_url: string;
  category: CategoryTypes[];
  key_techs: string[];
}

export type CategoryTypes = 'React' | 'Nextjs' | 'React Native' | 'Javascript';
