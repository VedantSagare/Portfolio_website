import { useState, useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero({ data }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef(null);

  // Trigger fade-in animations on mount since hero is visible on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
        elements.forEach((el, index) => {
          setTimeout(() => el.classList.add('visible'), index * 150);
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    'Software Developer',
    'Backend Engineer',
    'Spring Boot Expert',
    'API Architect',
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentRole.length) {
          isDeleting = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
        timeoutId = setTimeout(type, 80);
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = setTimeout(type, 400);
          return;
        }
        timeoutId = setTimeout(type, 40);
      }
    };

    timeoutId = setTimeout(type, 500);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero" ref={heroRef}>
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__greeting fade-in">
            <span className="hero__wave">👋</span> Hello, I'm
          </div>
          <h1 className="hero__name fade-in">
            {data?.name || 'Vedant Sagare'}
          </h1>
          <div className="hero__role fade-in">
            <span className="hero__role-text">{displayText}</span>
            <span className={`hero__cursor ${showCursor ? '' : 'hero__cursor--hidden'}`}>|</span>
          </div>
          <p className="hero__tagline fade-in">
            Building scalable backend systems &amp; production-grade APIs
          </p>
          <div className="hero__actions fade-in">
            <button className="btn-gradient" onClick={() => scrollTo('contact')}>
              <span>✉</span> Get In Touch
            </button>
            <button className="btn-outline" onClick={() => scrollTo('projects')}>
              <span>💼</span> View Projects
            </button>
          </div>
          <div className="hero__stats fade-in">
            {data?.stats?.map((stat, i) => (
              <div className="hero__stat" key={i}>
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual fade-in-right">
          <div className="hero__code-window">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red"></span>
              <span className="hero__code-dot hero__code-dot--yellow"></span>
              <span className="hero__code-dot hero__code-dot--green"></span>
              <span className="hero__code-filename">Developer.java</span>
            </div>
            <pre className="hero__code-body">
<span className="code-keyword">public class</span> <span className="code-class">Developer</span> {'{'}{'\n'}
{'  '}<span className="code-keyword">String</span> name = <span className="code-string">"Vedant Sagare"</span>;{'\n'}
{'  '}<span className="code-keyword">String</span> role = <span className="code-string">"Software Developer"</span>;{'\n'}
{'  '}<span className="code-keyword">String</span> company = <span className="code-string">"NPCI"</span>;{'\n'}
{'\n'}
{'  '}<span className="code-keyword">String[]</span> skills = {'{'}{'\n'}
{'    '}<span className="code-string">"Java"</span>, <span className="code-string">"Spring Boot"</span>,{'\n'}
{'    '}<span className="code-string">"Microservices"</span>, <span className="code-string">"PostgreSQL"</span>{'\n'}
{'  '}{'}'};{'\n'}
{'}'}
            </pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
