import { IconType } from 'react-icons';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';

interface ServicesProps {
  title: string;
  about: string;
  icon: IconType;
}

export const services: ServicesProps[] = [
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    icon: RiComputerLine,
  },
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    icon: FaServer,
  },
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    icon: AiOutlineAntDesign,
  },
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    icon: AiOutlineApi,
  },
  {
    title: 'Desenvolvedor Front-end',
    about:
      'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b> ',
    icon: MdDeveloperMode,
  },
];
