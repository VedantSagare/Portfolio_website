import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { submitContactForm } from '../api/portfolioApi';
import './Contact.css';

export default function Contact({ socialLinks }) {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await submitContactForm(form);
      setStatus({ type: 'success', message: res.message || 'Message sent successfully!' });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const socialIcons = {
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    ),
    leetcode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
    ),
    gfg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.677h3.195a.5.5 0 0 0 .5-.5v-.5a.5.5 0 0 0-.5-.5h-3.287c.044-.348.135-.688.27-1.012.272-.652.72-1.227 1.314-1.627a3.48 3.48 0 0 1 1.932-.56 3.6 3.6 0 0 1 1.202.196c.384.132.735.335 1.035.6.281.243.508.54.665.876l1.27-.96a4.2 4.2 0 0 0-1.048-1.16 5.1 5.1 0 0 0-1.48-.783A5.86 5.86 0 0 0 16.64 7a5.49 5.49 0 0 0-2.832.76 5.348 5.348 0 0 0-1.972 2.12 5.54 5.54 0 0 0-.376 1.104H9.932a.5.5 0 0 0-.5.5v.5a.5.5 0 0 0 .5.5h1.336c.032.248.09.494.17.732a5.298 5.298 0 0 0 2.08 2.645 5.524 5.524 0 0 0 2.952.844 5.86 5.86 0 0 0 1.903-.296 5.097 5.097 0 0 0 1.532-.848 4.206 4.206 0 0 0 1.07-1.283l-1.525-.753zM2.552 14.315c.143.28.334.532.564.745.262.237.573.43.91.567a3.6 3.6 0 0 0 1.202.196 4.51 4.51 0 0 0 1.914-.412 3.79 3.79 0 0 0 2.135-2.078c.064-.22.113-.443.16-.677H6.242a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.287a4.776 4.776 0 0 0-.27-1.012 4.246 4.246 0 0 0-1.314-1.627A3.48 3.48 0 0 0 6.013 7a3.6 3.6 0 0 0-1.202.196 3.82 3.82 0 0 0-1.035.6 3.33 3.33 0 0 0-.665.876l-1.27-.96A4.2 4.2 0 0 1 2.89 6.553a5.1 5.1 0 0 1 1.48-.783A5.86 5.86 0 0 1 6.012 5.5a5.49 5.49 0 0 1 2.832.76 5.348 5.348 0 0 1 1.972 2.12c.17.352.294.72.376 1.104h1.528a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-1.336a3.571 3.571 0 0 1-.17.732 5.298 5.298 0 0 1-2.08 2.645 5.524 5.524 0 0 1-2.952.844 5.86 5.86 0 0 1-1.903-.296 5.097 5.097 0 0 1-1.532-.848 4.206 4.206 0 0 1-1.07-1.283l1.525-.753z"/></svg>
    ),
  };

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="section-subtitle fade-in">Let's work together</p>
        </div>
        <div className="contact__grid">
          <form className="contact__form glass-card fade-in-left" onSubmit={handleSubmit} id="contact-form">
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input type="text" id="contact-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input type="email" id="contact-email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject">Subject</label>
              <input type="text" id="contact-subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" value={form.message} onChange={handleChange} required placeholder="Your message..."></textarea>
            </div>
            {status.message && (
              <div className={`contact__status contact__status--${status.type}`}>
                {status.message}
              </div>
            )}
            <button type="submit" className="btn-gradient contact__submit" disabled={loading}>
              {loading ? '⏳ Sending...' : '🚀 Send Message'}
            </button>
          </form>

          <div className="contact__info fade-in-right">
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology!
            </p>
            <div className="contact__socials">
              {socialLinks?.map((link, i) => (
                <a href={link.url} key={i} className="contact__social-link" target="_blank" rel="noopener noreferrer" title={link.name}>
                  <span className="contact__social-icon">{socialIcons[link.icon] || '🔗'}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
