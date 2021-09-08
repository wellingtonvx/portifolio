import { languages, tools } from '../util/data';
import { Bar } from '../components/Bar';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../util/animations';

export default function Resume() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-4 py-2 "
    >
      <Head>
        <title>Portifólio | Wellington</title>
      </Head>
      {/* //education */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Formação</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Redes de computadores</h5>
            <p className="font-semibold">Faculdade Ateneu(2012 - 2015)</p>
            <p className="my-3">
              O curso voltado para projetar, implementar, gerenciar e integrar
              redes de computadores. Também mostrou como criar soluções de
              segurança nestes sistemas que estão presentes em todo o mundo e em
              todas as áreas.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiência</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Desenvolvedor Front-end Jr.
            </h5>
            <p className="font-semibold">Desafio10Dias(2021)</p>
            <p className="my-3">
              Contrução do layout, optimização, reponsividade, mobile
            </p>
          </div>
        </motion.div>
      </div>
      {/* languages e tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagens e Framworks</h5>
          <div className="m-2">
            {languages.map(lang => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Conhecimento de Softwares</h5>
          <div className="m-2">
            {tools.map(tool => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
