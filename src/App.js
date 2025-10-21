// src/App.js
import React, { useRef, useState } from 'react';
import { Phone, Mail, Search } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './App.css';

const GleamingSolutionsApp = () => {

  const services = [
    {
      name: "Office Cleaning",
      description: "Scheduled office care that keeps workstations, boardrooms, and shared areas spotless.",
      image: "officecleaning.png",
      categories: ["commercial"],
    },
    {
      name: "House Cleaning",
      description: "Flexible housekeeping plans tailored to the rhythm of your home and family.",
      image: "Housecleaning.png",
      categories: ["residential"],
    },
    {
      name: "Sofa & Upholstery Cleaning",
      description: "Gentle upholstery cleaning that restores your fabric and leather seating to showroom condition.",
      image: "sofacleaning.png",
      categories: ["residential"],
    },
    {
      name: "Carpet Cleaning",
      description: "Hot water extraction and spot treatments that revive rugs, carpets, and runners.",
      image: "carpetcleaning.png",
      categories: ["residential", "commercial"],
    },
    {
      name: "Curtain Cleaning",
      description: "Steam and dry-clean finishing that leaves drapes fresh, crisp, and allergen free.",
      image: "curtaincleaning.png",
      categories: ["residential"],
    },
    {
      name: "Duvet & Bedding Care",
      description: "Thorough duvet, mattress topper, and pillow cleaning for a healthier night's sleep.",
      image: "Duvetcleaning.png",
      categories: ["residential"],
    },
    {
      name: "Bathroom Deep Clean",
      description: "Detail-oriented bathroom sanitation focusing on tile, grout, fittings, and fixtures.",
      image: "bathroomcleaning.png",
      categories: ["residential", "commercial"],
    },
    {
      name: "Kitchen Deep Cleaning",
      description: "Degreasing and disinfection of appliances, cabinets, and hard-to-reach kitchen areas.",
      image: "kitchendeepcleaning.png",
      categories: ["residential", "commercial"],
    },
    {
      name: "Laundry Services",
      description: "Professional laundry pick-up, folding, and ironing to keep wardrobes organised.",
      image: "laundryservices.png",
      categories: ["residential"],
    },
    {
      name: "Housekeeping Support",
      description: "Dedicated housekeeping teams to manage daily chores and maintain order.",
      image: "Housekeeping.png",
      categories: ["residential"],
    },
    {
      name: "Floor Care & Polishing",
      description: "Machine scrubbing and polishing that preserves the shine of stone and hard floors.",
      image: "floorcleaner.png",
      categories: ["commercial"],
    },
    {
      name: "Glass & Window Cleaning",
      description: "Streak-free glass cleaning for windows, partitions, and display fixtures.",
      image: "glasscleaner.png",
      categories: ["commercial"],
    },
    {
      name: "Disinfection Services",
      description: "Hospital-grade surface disinfection that targets germs in high-traffic areas.",
      image: "Disinfectant.png",
      categories: ["commercial"],
    },
    {
      name: "Specialised Cleaning Projects",
      description: "Custom cleaning programmes designed for unique surfaces, spaces, and schedules.",
      image: "specializedcleaning.png",
      categories: ["commercial"],
    },
  ];

  const residentialServiceNames = services
    .filter(service => service.categories?.includes("residential"))
    .map(service => service.name);

  const commercialServiceNames = services
    .filter(service => service.categories?.includes("commercial"))
    .map(service => service.name);

  const Header = () => (
    <>
      <div className="topbar-contact">
        <div className="topbar-contact-info">
          <span><Mail size={16} style={{ verticalAlign: 'middle' }} /> info@gleamingsolutions.co.ke</span>
          <span><Phone size={16} style={{ verticalAlign: 'middle' }} /> 0768831141</span>
        </div>
        <Search size={20} />
      </div>
      <header className="topbar">
        <div className="topbar-title">Gleaming Solutions</div>
        <nav className="topbar-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#residential">Residential</a>
          <a href="#commercial">Commercial</a>
          <a href="#contact">Contact</a>
          <a href="#quote" className="quote-button">Free Quote</a>
        </nav>
      </header>
    </>
  );

  const Hero = () => (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/hero-bg.jpg)`,
      }}
    >
      <h1>Professional Cleaning Company in Kenya</h1>
      <p>Honest, reliable and affordable cleaning services for your office, home or apartment provided by a cleaning company that cares.</p>
      <a href="#quote" className="quote-button">Get a Free Quote</a>
    </section>
  );

  const About = () => (
    <section id="about" className="container about-section">
      <div>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Best Cleaning Company in Nairobi Kenya</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>
          Gleaming Solutions is a leading provider of professional cleaning services in Nairobi, Kenya. We have established a reputation for quality, reliability, and exceptional customer service. Our goal is to provide our clients with the highest standard of cleaning services, and to help them maintain a clean and healthy living and working environment.
        </p>
        <p style={{ lineHeight: '1.7' }}>
          At Gleaming Solutions, we understand that every client has unique cleaning needs. That's why we offer a range of services, from regular cleaning services to deep cleaning and specialized cleaning services.
        </p>
      </div>
      <div>
        <div style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid #e5e7eb' }}>
          <h4>GET A FREE QUOTE</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--brand)', margin: '0.5rem 0' }}><Phone size={24} /> 0768831141</p>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '1rem' }}><Mail size={16} /> info@gleamingsolutions.co.ke</p>
          <p>Coffee Plaza Nairobi CBD</p>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="residential" className="container">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Trusted Cleaning Services</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '700px', margin: '0 auto' }}>
          We take pride in our attention to detail and are committed to providing a personalized cleaning experience for every client. Whether you're looking for a one-time deep clean, or a regular cleaning service, we have the expertise to get the job done right.
        </p>
      </div>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.name} className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/${service.image}`}
              alt={service.name}
              className="service-image"
            />
            <h3>{service.name}</h3>
            <p style={{ color: "var(--muted)", marginBottom: "1rem" }}>{service.description}</p>
            <a href="#quote">Get a quote</a>
          </div>
        ))}
      </div>
    </section>
  );

  const QuoteForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [isServicePickerOpen, setIsServicePickerOpen] = useState(false);

    const handleServiceSelect = (serviceName) => {
      setSelectedServices((current) => {
        if (current.includes(serviceName)) {
          return current;
        }

        return [...current, serviceName];
      });
      setIsServicePickerOpen(false);
    };

    const handleServiceRemove = (serviceName) => {
      setSelectedServices((current) => current.filter((name) => name !== serviceName));
    };

    const toggleServicePicker = () => {
      setIsServicePickerOpen((previous) => !previous);
    };

    const availableServices = services.filter(
      (service) => !selectedServices.includes(service.name)
    );

    const sendEmail = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus('');

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            form.current.reset();
            setSelectedServices([]);
            setIsServicePickerOpen(false);
            alert('Thank you! Your quote request has been sent successfully. We will contact you soon.');
          },
          (error) => {
            setSubmitStatus('error');
            setIsSubmitting(false);
            alert('Oops! Something went wrong. Please try again or call us directly at 0768831141.');
            console.log('FAILED...', error.text);
          }
        );
    };

    return (
      <section id="quote" className="container quote-form-section">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Get a Free Quote</h2>
        </div>
        <div className="quote-layout">
          <div className="quote-services">
            <h3>Trusted Cleaning Services</h3>
            <ul className="quote-services-list">
              {services.map(service => (
                <li key={service.name}>{service.name}</li>
              ))}
            </ul>
          </div>
          <form ref={form} onSubmit={sendEmail} className="quote-form">
            <input type="text" name="user_name" placeholder="Name *" required />
            <input type="tel" name="user_phone" placeholder="Phone Number *" required />
            <input type="email" name="user_email" placeholder="Email *" required className="full-width" />
            <div className="quote-service-field full-width">
              <label className="quote-label" htmlFor="service-picker">
                Service(s) *
              </label>
              <div className={`service-selector ${isServicePickerOpen ? 'open' : ''}`}>
                <div className="selected-services-display" id="service-picker" aria-live="polite">
                  {selectedServices.length > 0 ? (
                    selectedServices.map(serviceName => (
                      <button
                        key={serviceName}
                        type="button"
                        className="selected-service-chip"
                        onClick={() => handleServiceRemove(serviceName)}
                        aria-label={`Remove ${serviceName}`}
                      >
                        {serviceName}
                        <span aria-hidden="true">&times;</span>
                      </button>
                    ))
                  ) : (
                    <span className="selected-placeholder">Tap + to choose service(s)</span>
                  )}
                </div>
                <button
                  type="button"
                  className="service-toggle-button"
                  onClick={toggleServicePicker}
                  aria-expanded={isServicePickerOpen}
                  aria-controls="service-dropdown"
                >
                  {isServicePickerOpen ? <span>&times;</span> : <span>+</span>}
                </button>
              </div>
              {isServicePickerOpen && (
                <div className="service-dropdown" id="service-dropdown">
                  {availableServices.length > 0 ? (
                    availableServices.map((service) => (
                      <button
                        key={service.name}
                        type="button"
                        className="service-dropdown-item"
                        onClick={() => handleServiceSelect(service.name)}
                      >
                        {service.name}
                      </button>
                    ))
                  ) : (
                    <div className="service-dropdown-empty">
                      All services are selected.
                    </div>
                  )}
                </div>
              )}
              <input type="hidden" name="service" value={selectedServices.join(', ')} />
              <p className="service-helper-text">Tap a chip to remove a service or use + to add more.</p>
            </div>
            <textarea name="location" placeholder="Location" rows="3" className="full-width"></textarea>
            <button type="submit" className="full-width" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Now'}
            </button>
          </form>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div>
          <h4>Contact Us</h4>
          <p>Gleaming Solutions is a registered cleaning company offering professional home and office cleaning services.</p>
          <p><b>Call:</b> 0768831141</p>
          <p><b>Email:</b> info@gleamingsolutions.co.ke</p>
          <p><b>Address:</b> Coffee Plaza Nairobi CBD</p>
        </div>
        <div>
          <h4>Residential</h4>
          {residentialServiceNames.map(serviceName => (
            <a key={serviceName} href="#quote">{serviceName}</a>
          ))}
        </div>
        <div>
          <h4>Commercial</h4>
          {commercialServiceNames.map(serviceName => (
            <a key={serviceName} href="#quote">{serviceName}</a>
          ))}
        </div>
      </div>
      <div className="copyright">
        Copyright © 2025 Gleaming Solutions.
      </div>
    </footer>
  );

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default GleamingSolutionsApp;
