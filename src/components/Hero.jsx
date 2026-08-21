import "./Hero.css";
import resumeFile from "../assets/Manoj_Kumar_Resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          Hello, I am <span className="highlight">Manoj Kumar</span>
        </h1>
        <h2>A Frontend Developer & BCA Graduate</h2>
        <p>
          Welcome to my portfolio! I am passionate about building beautiful and
          functional user interfaces.
        </p>

        <div className="hero-buttons">
          <a href={resumeFile} download className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
