
import React, { useState } from 'react';
import { FaTooth, FaLungs, FaBrain, FaClipboardList, FaArrowRight } from 'react-icons/fa';
import doctorImg from '../../assets/doctor.png';
import officeImg from '../../assets/office.png';
import './Services.css';

const initialServices = [
  {
    icon: <FaTooth size={60} color="#007bff" />,
    title: 'Dental Care',
    cta: null,
  },
  {
    icon: <FaLungs size={60} color="#007bff" />,
    title: 'Pulmonary',
    cta: 'LEARN MORE',
  },
  {
    icon: <FaBrain size={60} color="#007bff" />,
    title: 'Neurological',
    cta: null,
  },
  {
    icon: <FaClipboardList size={60} color="#007bff" />,
    title: 'Pediatrics',
    cta: null,
  },
];

const specialists = [
  { name: 'Dr. Awaatif Al', specialty: 'Dental Care' },
  { name: 'Dr. Filipa Gaspar', specialty: 'Cardiology' },
  { name: 'Dr. Sukhmeet Gorae', specialty: 'Neurological' },
  { name: 'Dr. Siri Jakobsson', specialty: 'Pediatrics' },
];

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <>
      {/* Our Services Section */}
      <div id="services" className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <p className="services-description">
          We provide the most full medical services, so every person could <br />
          have the opportunity to receive qualitative medical help.
        </p>

        <div className="services-card-wrapper">
          <div className="services-card-container">
            {initialServices.map((service, index) => {
              const isHovered = hoverIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`service-card ${isHovered ? 'hovered' : ''}`}
                >
                  <div className="icon">
                    {React.cloneElement(service.icon, {
                      color: isHovered ? '#ffffff' : '#007bff',
                    })}
                  </div>
                  <h3 className="service-title" style={{ color: isHovered ? '#ffffff' : '#062b63' }}>
                    {service.title}
                  </h3>
                  {service.cta && (
                    <div className="cta" style={{ color: isHovered ? '#ffffff' : '#007bff' }}>
                      <span>{service.cta}</span>
                      <FaArrowRight style={{ marginLeft: 8 }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Clinic With Innovation */}
      <div className="innovation-wrapper">
        <div className="innovation-left">
          <h2 className="innovation-heading">Clinic With Innovation</h2>
          <p className="innovation-paragraph">
            We provide the most full medical services, so every person could <br />
            have the opportunity to receive qualitative medical help.
          </p>
          <button className="innovation-button">Learn More</button>
        </div>

        <div className="innovation-right">
          <div className="innovation-card">
            <img src={doctorImg} alt="Qualified Doctors" className="innovation-image" />
            <h3 className="innovation-card-title">Qualified Doctors</h3>
          </div>
          <div className="innovation-card">
            <img src={officeImg} alt="Emergency Care" className="innovation-image" />
            <h3 className="innovation-card-title">Emergency Care</h3>
          </div>
          <div className="innovation-card">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.xPt6dvOfiMGJFhapQNla2QHaHa&pid=Api"
              alt="24 Hours Service"
              className="innovation-image"
            />
            <h3 className="innovation-card-title">24 Hours Service</h3>
          </div>
        </div>
      </div>

      {/* Best Specialists Section */}
      <div className="specialist-section">
        <h2 className="specialist-heading">We Have The Best Specialist</h2>
        <p className="specialist-description">
          We have a wide experience in experience design and strategy, <br />
          with locally-rooted knowledge.
        </p>

        <div className="specialist-card-container">
          {specialists.map((doc, index) => (
            <div key={index} className="specialist-card">
              <div className="specialist-image-placeholder"></div>
              <div className="specialist-card-content">
                <h3 className="specialist-name">{doc.name}</h3>
                <p className="specialist-specialty">{doc.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
