import { FunctionComponent } from 'react';
import { ProjectsProps } from '../util/type';

export const ProjectCard: FunctionComponent<{ project: ProjectsProps }> = ({
  project: {
    name,
    category,
    deployer_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
}) => {
  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer " />
      <p className="my-2 text-center">{name}</p>
    </div>
  );
};
