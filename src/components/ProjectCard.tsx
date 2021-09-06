import { FunctionComponent } from 'react';
import Image from 'next/image';
import { ProjectsProps } from '../util/type';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../util/animations';

export const ProjectCard: FunctionComponent<{
  project: ProjectsProps;
  showDetails: null | number;
  setShowDetails: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    deployer_url,
    description,
    github_url,
    image_path,
    key_techs,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
      />

      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 rounded-lg ">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="border-4 border-red-200">
              <Image
                src={image_path}
                alt={name}
                width="300"
                height="150"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
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
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 tracking-wider "
            >
              {key_techs.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 tracking-wider bg-gray-200 rounded-md dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};
