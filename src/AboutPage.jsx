import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="tagline">Building amazing web experiences</p>
      </div>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to creating innovative and user-friendly applications that solve
            real-world problems. Our team is passionate about delivering quality software
            and exceptional user experiences.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, we started with a simple idea: to make web development accessible
            and enjoyable for everyone. Since then, we've grown into a team of talented developers,
            designers, and entrepreneurs committed to excellence.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul className="values-list">
            <li><strong>Innovation:</strong> We constantly explore new technologies and ideas</li>
            <li><strong>Quality:</strong> We prioritize clean, maintainable, and tested code</li>
            <li><strong>Collaboration:</strong> We believe in the power of teamwork and open communication</li>
            <li><strong>User-Centric:</strong> Every decision we make is focused on our users</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Doe</h3>
              <p className="member-role">Founder & Lead Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Jane Smith</h3>
              <p className="member-role">UI/UX Designer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Mike Johnson</h3>
              <p className="member-role">Full Stack Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Sarah Williams</h3>
              <p className="member-role">Project Manager</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Get In Touch</h2>
          <p>
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <div className="contact-info">
            <p>📧 Email: <a href="mailto:hello@example.com">hello@example.com</a></p>
            <p>🌐 Website: <a href="https://example.com" target="_blank" rel="noopener noreferrer">www.example.com</a></p>
            <p>📱 Phone: +1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  );
}
