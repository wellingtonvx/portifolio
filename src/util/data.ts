import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

import { ServicesProps, SkillProps } from './type';

export const services: ServicesProps[] = [
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: RiComputerLine,
  },
  {
    title: 'Desenvoledor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: FaServer,
  },
  {
    title: 'Desenvlvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: AiOutlineAntDesign,
  },
  {
    title: 'Desenvolvedr Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: AiOutlineApi,
  },
  {
    title: 'Desenvolvedor Frnt-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: MdDeveloperMode,
  },
  {
    title: 'Deenvolvedor Frnt-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    Icon: MdDeveloperMode,
  },
];

export const languages: SkillProps[] = [
  {
    name: 'JavaScript',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'HTML',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'CSS',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '85%',
    Icon: BsCircleFill,
  },
  {
    name: 'React Native',
    level: '50%',
    Icon: BsCircleFill,
  },
];

export const tools: SkillProps[] = [
  {
    name: 'Photoshop',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'Figma',
    level: '65%',
    Icon: BsCircleFill,
  },
  {
    name: 'Sony vegas',
    level: '85%',
    Icon: BsCircleFill,
  },
];
