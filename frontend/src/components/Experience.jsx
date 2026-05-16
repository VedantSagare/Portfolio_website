import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

export default function Experience({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Experience</h2>
          <p className="section-subtitle fade-in">My professional journey</p>
        </div>
        <div className="experience__timeline">
          {data?.map((exp, i) => (
            <div className={`experience__item fade-in${i % 2 === 0 ? '-left' : '-right'}`} key={i}>
              <div className="experience__dot"></div>
              <div className="experience__card glass-card">
                <div className="experience__header">
                  <div>
                    <h3 className="experience__company">{exp.company}</h3>
                    <p className="experience__role gradient-text">{exp.role}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__duration">{exp.duration}</span>
                    <span className="experience__location">{exp.location}</span>
                    <span className="experience__type">{exp.type}</span>
                  </div>
                </div>
                <ul className="experience__highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
