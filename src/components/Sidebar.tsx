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
        <br />
        Dev. Front-end
      </h3>
      <a
        href="/curriculo.pdf"
        className="flex items-center justify-center px-2 py-2 my-8 bg-gray-200 rounded-full dark:bg-dark-200"
        download="Currículo-José Wellington Ribeiro da Rocha"
      >
        <GiTie className="w-6 h-6" />
        Donwload CV
      </a>

      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto text-green md:w-full">
        <a
          href="https://github.com/wellingtonvx"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-10 h-10 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/wellingtonrdr/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-10 h-10 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/wellingtonvx/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="w-10 h-10 cursor-pointer" />
        </a>
      </div>

      {/* address */}
      <div
        className="py-4 my-10 bg-gray-200 dark:bg-dark-200"
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
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 mb-5 font-semibold text-white bg-black rounded-full mt-28 bg-gradient-to-r from-green to-blue-400"
      >
        {theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
      </button>
    </div>
  );
}
