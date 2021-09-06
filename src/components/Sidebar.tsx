import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import Image from 'next/image';

import { useTheme } from 'next-themes';

export function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/60943819?v=4"
        alt="user avatar"
        className="mx-auto rounded-full"
        width="128px"
        height="128px"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span>Welington </span>
        Ribeiro
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Dev. Front-end
      </p>
      <a
        href="/curriculo.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        download="Currículo-José Wellington Ribeiro da Rocha"
      >
        <GiTie className="w-6 h-6" />
        Donwload CV
      </a>

      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span> Fortaleza, Ceará</span>
        </div>
        <p className="my-2">wellingtonvx@gmail.com</p>
        <p className="my-2">(85) 9 9793-3893</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 font-semibold text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:wellingtonvx@gmail.com')}
      >
        Email
      </button>

      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 font-semibold text-white bg-black rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Mudar UI
      </button>
    </div>
  );
}
