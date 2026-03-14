import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact <span className="highlight">Me</span></h2>
          <p>Get in touch for opportunities or just to say hi!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info-card">
            <div className="info-item">
              <span className="icon">📞</span>
              <div className="info-details">
                <h3>Phone</h3>
                <p><a href="tel:+918091468213">+91 8091468213</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon">✉️</span>
              <div className="info-details">
                <h3>Email</h3>
                <p><a href="mailto:thakurmanu065@gmail.com">thakurmanu065@gmail.com</a></p>
              </div>
            </div>
          </div>
          
          {/* Optional: A simple visual footer element could go here or in its own component */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
