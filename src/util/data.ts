import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

import { ProjectsProps, ServicesProps, SkillProps } from './type';

export const services: ServicesProps[] = [
  {
    title: 'Desenvolvedor Front-end',
    about:
      'Posso construir um SPA bonito e escalável usando <b>HTML</b>, <b>CSS</b> e <b>React.js</b> ',
    Icon: RiComputerLine,
  },
  {
    title: 'Desenvoledor Backend',
    about:
      'Posso construir APIs utilizando express, banco de dados não relacional',
    Icon: FaServer,
  },
  {
    title: 'Desenvolvedor Mobile',
    about: 'Criação de aplicativos utilizando React Native',
    Icon: MdDeveloperMode,
  },
  {
    title: 'Criação de Layout',
    about: 'Criação de layouts usando figma ou photoshop',
    Icon: AiOutlineAntDesign,
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

export const projects: ProjectsProps[] = [
  {
    id: 1,
    name: 'Template Agency',
    description:
      'Um template moderno feito para com um design leve e com contrastes para o melhor uso do usuário, utilizando o nextjs como framework',
    image_path: '/images/template-agency.png',
    deployer_url: 'https://template-agencia.vercel.app/',
    github_url: 'https://github.com/wellingtonvx/agency-template',
    category: ['React', 'Nextjs'],
    key_techs: ['React', 'Nexts', 'Styled Component', 'Type Script'],
  },
  {
    id: 2,
    name: 'Amazing Graph',
    description: 'um landinpage simples feita no desafio do DevChallenge',
    image_path: '/images/amazing-graph.png',
    deployer_url: 'https://wellingtonvx.github.io/AmazingGraph/',
    github_url: 'https://github.com/wellingtonvx/AmazingGraph',
    category: ['HTML & CSS'],
    key_techs: ['HTML', 'CSS'],
  },
  {
    id: 3,
    name: 'API - Cadastro',
    description:
      'Backend desenvolvido para um sistema de cadastro de alunos, onde é possível cadastras os dados, fotos e senhas criptografadas',
    image_path: '/images/api-node.png',
    deployer_url: 'https://github.com/wellingtonvx/apicadaluno',
    github_url: 'https://github.com/wellingtonvx/apicadaluno',
    category: ['NodeJs'],
    key_techs: ['Nodejs', 'Express', 'JWT', 'Sequelize', 'MariaDb'],
  },
  {
    id: 4,
    name: 'Front - Cadastro',
    description:
      'Frontend desenvolvido junto com a Api de cadastro, onde o usuário entra com os dados que vão ser cadastrados, e também tem a opção de editar e deletar',
    image_path: '/images/cad-aluno.png',
    deployer_url: 'https://mywallet-d74e3.web.app/',
    github_url: 'https://github.com/wellingtonvx/mywallet',
    category: ['React'],
    key_techs: ['Javascript', 'React Modal', 'Redux', 'Styled Components'],
  },
  {
    id: 5,
    name: 'Crud',
    description:
      'Um crud(Create, Read, Update and Delete) utilizando express e o mysqlite',
    image_path: '/images/crud-node.jpg',
    deployer_url: 'https://github.com/wellingtonvx/Crud_NodeJs',
    github_url: 'https://github.com/wellingtonvx/Crud_NodeJs',
    category: ['NodeJs'],
    key_techs: ['Node', 'Express', 'MysqLite'],
  },
  {
    id: 6,
    name: 'Exercised',
    description:
      'Um webapp para ajudar a gerenciar seu tempo com a famosa técnica de pomodoro, o intuito e que quando um ciclo de tempo for finalizado, você receberá uma tarefá para ser executada, se a tafera for bem sucedida, ganhará mais experiência e aumentará seu level.',
    image_path: '/images/exerciteid.png',
    deployer_url: 'https://exercised-wellingtonvx.vercel.app/',
    github_url: 'https://github.com/wellingtonvx/exercised.it',
    category: ['Nextjs'],
    key_techs: ['React', 'TypeScript', 'JSCookie'],
  },
  {
    id: 7,
    name: 'Food Delivery',
    description:
      'Um app de delivery onde é possivel cadastrar um restaurante e seus pedidos, podendo também mostar o tempo e a distância de entrega com base no endereço.',
    image_path: '/images/food-delivery.png',
    deployer_url: 'https://github.com/wellingtonvx/FoodDelivery',
    github_url: 'https://github.com/wellingtonvx/FoodDelivery',
    category: ['Javascript', 'React-Native'],
    key_techs: ['React Native', 'Expo', 'Maps', 'Animation'],
  },
  {
    id: 8,
    name: 'Galeria de Fotos',
    description: 'Um site fieto para mostar fotos separados por categorias',
    image_path: '/images/galery.png',
    deployer_url: 'https://wellingtonvx.github.io/galeria-de-fotos/',
    github_url: 'https://github.com/wellingtonvx/galeria-de-fotos',
    category: ['HTML & CSS', 'Javascript'],
    key_techs: ['HTML', 'CSS', 'Sass', 'JavaScript'],
  },
  {
    id: 9,
    name: 'Landing Page',
    description:
      'um modelo simples de landing page, aplicando design responsivo',
    image_path: '/images/danki.png',
    deployer_url: 'https://wellingtonvx.github.io/landing-page',
    github_url: 'https://github.com/wellingtonvx/landing-page',
    category: ['HTML & CSS'],
    key_techs: ['HTML', 'CSS', 'Responsive'],
  },
  {
    id: 10,
    name: 'My Wallet',
    description: 'Um webapp para controlar suas finanças',
    image_path: '/images/wallet.PNG',
    deployer_url: 'https://mywallet-d74e3.web.app/',
    github_url: 'https://github.com/wellingtonvx/mywallet',
    category: ['React'],
    key_techs: [
      'React',
      'JavaScript',
      'typescript',
      'styled component',
      'firebase',
    ],
  },
  {
    id: 11,
    name: 'Gerador de Protocolo',
    description:
      'Um web app que utilizado no Antares para gerar os protocolos de movimentação de equipamento',
    image_path: '/images/Protocolo.png',
    deployer_url: 'https://protocolmaker.vercel.app/',
    github_url: 'https://github.com/wellingtonvx/protocolmaker',
    category: ['React', 'Nextjs'],
    key_techs: ['React', 'JavaScript', 'Nextjs', 'Sass', 'React Toasty'],
  },
];
