// import { GetServerSidePropsContext } from 'next';
import { services } from '../util/data';
import { ServiceCard } from '../components/ServiceCard';

import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation, stagger } from '../util/animations';

export default function Home() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      className="flex flex-col flex-grow px-6 pt-1"
    >
      <h5 className="my-3 font-medium">
        Sou desenvolvedor JavaScript, amante de desenvolvimento. Tendo
        experiências em alguns projetos utilizando React/Next. No momento estou
        me aprimorando no desenvolvimento front-end, onde já tenho alguns cursos
        e projetos pessoais. Tenho graduação tecnóloga em Redes de Computadores
        e alguns projetos salvos no meu GitHub utilizando: HTML, CSS,
        JavaScript, MySQL, MongoDB, React, NextJs, NodeJs.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">Conhecimentos</h6>
        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map(service => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const response = await fetch('http://localhost:3000/api/services');
//   const data = await response.json();
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
