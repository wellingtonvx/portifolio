import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
  name: string;
  route: string;
}

export function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('');

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);

  function NavItem({ activeItem, name, route, setActiveItem }: NavItemProps) {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span
            className="hover:text-green"
            onClick={() => setActiveItem(name)}
          >
            {name === 'About'
              ? 'Sobre'
              : name === 'Projects'
              ? 'Projetos'
              : 'Resumo'}
          </span>
        </a>
      </Link>
    ) : null;
  }

  return (
    <div className="flex justify-between px-5 py-3 my-3 ">
      <span className="text-xl font-bold border-b-4 border-black-200 md:text-2xl">
        {activeItem === 'About'
          ? 'Sobre'
          : activeItem === 'Projects'
          ? 'Projetos'
          : 'Resumo'}
      </span>
      <div className="flex space-x-5 text-lg ">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />

        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}
