import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Achievements.css';

export default function Achievements({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="achievements section" id="achievements" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Achievements</h2>
          <p className="section-subtitle fade-in">Milestones & recognitions</p>
        </div>
        <div className="achievements__grid">
          {data?.map((item, i) => (
            <div className="achievements__card glass-card fade-in" key={i}>
              <div className="achievements__icon">{item.icon}</div>
              <h3 className="achievements__title">{item.title}</h3>
              <p className="achievements__desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
