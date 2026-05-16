import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Education.css';

export default function Education({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="education section" id="education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Education</h2>
          <p className="section-subtitle fade-in">Academic background</p>
        </div>
        <div className="education__card glass-card fade-in">
          <div className="education__icon">🎓</div>
          <div className="education__info">
            <h3 className="education__institution">{data?.institution}</h3>
            <p className="education__degree gradient-text">{data?.degree}</p>
            <div className="education__meta">
              <span className="education__duration">📅 {data?.duration}</span>
              <span className="education__cpi">📊 CPI: {data?.cpi}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
