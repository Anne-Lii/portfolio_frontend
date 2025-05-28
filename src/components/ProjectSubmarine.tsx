import { useState } from "react";
import "../styles/ProjectsSubmarine.scss";

type Project = {
  name: string;
  description: string;
  demoLink: string;
};

const projects: Project[] = [
  {
    name: "Resturang Etoile",
    description: "Fullstack projekt för kursen Backend-baserad webbutveckling",
    demoLink: "https://anha2314-projekt-backend.netlify.app/",
  },
  {
    name: "Tropic Reef",
    description:
      "Fullstack projekt för kursen Fullstack utveckling med ramverk. Logga in med email: user@tropicreef.se och lösenord: passwordUser2025 om du vill testa",
    demoLink: "https://tropic-reef.netlify.app/login",
  },
  {
    name: "Bookify",
    description:
      "En React-baserad bokrecensionsapp med integration till Google Books API och eget backend-API.",
    demoLink: "https://bookify.netlify.app",
  },
];

const ProjectsSubmarine = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="projects-submarine" id="projects">
      <h2>Mina skolprojekt från universitetet</h2>
      <div className="submarine">
        {projects.map((project, index) => (
          <div
            key={index}
            className="window"
            onClick={() => setSelectedProject(project)}
          >
            <span>{project.name}</span>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            <div className="links">
              <a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noreferrer"
              >
                🌐 Live-demo
              </a>
            </div>
            <button onClick={() => setSelectedProject(null)}>Stäng</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSubmarine;