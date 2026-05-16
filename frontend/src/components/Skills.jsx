import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

export default function Skills({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Technical Skills</h2>
          <p className="section-subtitle fade-in">Technologies I work with</p>
        </div>
        <div className="skills__grid">
          {data?.map((category, i) => (
            <div className="skills__card glass-card fade-in" key={i}>
              <div className="skills__card-icon">{category.icon}</div>
              <h3 className="skills__card-title">{category.category}</h3>
              <div className="skills__tags">
                {category.items.map((item, j) => (
                  <span className="tech-tag" key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
