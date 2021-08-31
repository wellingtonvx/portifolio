import { projects } from '../util/data';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="p-4">
      <div>
        <nav>Navbar</nav>
        <div className="grid grid-cols-12 gap-4 my-3">
          {projects.map(project => (
            <div className="col-span-12 p-2 sm:col-span-6 lg:col-span-4">
              <ProjectCard project={project} key={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
