import { FunctionComponent } from 'react';
import { CategoryTypes } from '../util/type';

export const NavItem: FunctionComponent<{
  value: CategoryTypes | 'all';
  handleFilterCategory;
  active;
}> = ({ value, handleFilterCategory, active }) => {
  let className = 'capitalize cursor-pointer hover:text-green';
  if (active === value) {
    className += ' text-green';
  }

  return (
    <li onClick={() => handleFilterCategory(value)} className={className}>
      {value}
    </li>
  );
};

export const ProjectsNavbar = props => {
  return (
    <div className="flex flex-wrap justify-center px-3 py-3 space-x-3 overflow-x-auto leading-8 text-center list-none ">
      <NavItem {...props} value="all" />
      <NavItem {...props} value="React" />
      <NavItem {...props} value="Nextjs" />
      <NavItem {...props} value="React-Native" />
      <NavItem {...props} value="Javascript" />
      <NavItem {...props} value="NodeJs" />
      <NavItem {...props} value="HTML & CSS" />
    </div>
  );
};
