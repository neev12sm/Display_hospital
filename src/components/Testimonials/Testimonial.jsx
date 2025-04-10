
import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div id="news" className="testimonial-container">
      {/* Testimonials Section */}
      <h2 className="testimonial-heading">What Our Customers Say</h2>
      <div className="testimonial-cards">
        {/* Card 1 */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.
          </p>
          <div className="testimonial-user-info">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jacqueline Asong" className="testimonial-avatar" />
            <div>
              <strong className="testimonial-name">Jacqueline Asong</strong>
              <div className="testimonial-role">Patient</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <p className="testimonial-quote">
            I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.
          </p>
          <div className="testimonial-user-info">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Patrícia Ribeiro" className="testimonial-avatar" />
            <div>
              <strong className="testimonial-name">Patrícia Ribeiro</strong>
              <div className="testimonial-role">Patient</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-container">
        <h2 className="newsletter-heading">Subscribe to Newsletter</h2>
        <p className="newsletter-subtext">
          We have a wide experience in experience design and strategy,
        </p>
        <div className="newsletter-input-group">
          <input type="email" placeholder="Enter your email address" className="newsletter-input" />
          <button className="newsletter-button">Send Now</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
