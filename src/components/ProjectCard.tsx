import { FunctionComponent, useState } from 'react';
import { ProjectsProps } from '../util/type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

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
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(true)}
      />

      <p className="my-2 text-center">{name}</p>

      {showDetails && (
        <div className="absolute top-0 left-0 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <img src={image_path} alt={name} />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                target="_blank"
                className="flex items-center p-2 px-4 space-x-3 text-lg bg-gray-200 rounded-md dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployer_url}
                target="_blank"
                className="flex items-center p-2 px-4 space-x-3 text-lg bg-gray-200 rounded-md dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Projeto</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 tracking-wider ">
              {key_techs.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 tracking-wider bg-gray-200 rounded-md dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => setShowDetails(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};
