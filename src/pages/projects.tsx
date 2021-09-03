import { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectsNavbar } from '../components/ProjectsNavbar';

import { motion } from 'framer-motion';

import { projects as projectsData } from '../util/data';
import { CategoryTypes } from '../util/type';
import { fadeInUp, routeAnimation, stagger } from '../util/animations';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

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
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <div>
        <ProjectsNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
        />
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {projects.map(project => (
            <motion.div
              key={project.name}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={fadeInUp}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
