import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectsNavbar } from '../components/ProjectsNavbar';
import { motion } from 'framer-motion';

import { projects as projectsData } from '../util/data';
import { CategoryTypes } from '../util/type';
import { fadeInUp, routeAnimation, stagger } from '../util/animations';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [reverseProjects, setReverseProjects] = useState([]);

  useEffect(() => {
    const reverse = projects.reverse();
    setReverseProjects(reverse);
  }, [projects]);

  function handleFilterCategory(category: CategoryTypes | 'all') {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newProjectsData = projectsData.filter(project =>
      project.category.includes(category),
    );

    setProjects(newProjectsData);
    setActive(category);
  }

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <Head>
        <title>Portifólio | Wellington</title>
      </Head>
      <div>
        <ProjectsNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="relative grid grid-cols-12 gap-4 my-3"
        >
          {reverseProjects.map(project => (
            <motion.div
              variants={fadeInUp}
              className="col-span-12 p-2 duration-200 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200 dark:hover:bg-blue-500 hover:bg-blue-500 hover:text-white"
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
