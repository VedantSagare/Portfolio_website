import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

export default function About({ data }) {
  const ref = useScrollAnimation();

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">About Me</h2>
          <p className="section-subtitle fade-in">Get to know me better</p>
        </div>

        <div className="about__grid">
          <div className="about__text fade-in-left">
            <p className="about__summary">
              {data?.summary || 'Backend-focused Software Developer with experience in building scalable and high-performance systems.'}
            </p>
            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-icon">📧</span>
                <div>
                  <span className="about__detail-label">Email</span>
                  <span className="about__detail-value">{data?.email || 'vedantsagare2002@gmail.com'}</span>
                </div>
              </div>
              <div className="about__detail">
                <span className="about__detail-icon">📱</span>
                <div>
                  <span className="about__detail-label">Phone</span>
                  <span className="about__detail-value">{data?.phone || '+91-9356626084'}</span>
                </div>
              </div>
              <div className="about__detail">
                <span className="about__detail-icon">📍</span>
                <div>
                  <span className="about__detail-label">Location</span>
                  <span className="about__detail-value">{data?.location || 'Hyderabad, India'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__stats-grid fade-in-right">
            {data?.stats?.map((stat, i) => (
              <div className="about__stat-card glass-card" key={i}>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
