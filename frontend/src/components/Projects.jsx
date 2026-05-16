import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

export default function Projects({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Projects</h2>
          <p className="section-subtitle fade-in">Things I've built</p>
        </div>
        <div className="projects__grid">
          {data?.map((project, i) => (
            <div className="projects__card glass-card fade-in" key={i}>
              <div className="projects__card-header">
                <span className="projects__icon">📂</span>
                <span className="projects__duration">{project.duration}</span>
              </div>
              <h3 className="projects__title">{project.title}</h3>
              <p className="projects__desc">{project.description}</p>
              <ul className="projects__highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="projects__techs">
                {project.technologies.map((t, j) => (
                  <span className="tech-tag" key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
