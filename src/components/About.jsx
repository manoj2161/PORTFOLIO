import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About <span className="highlight">Me</span></h2>
          <p>Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text-box">
            <p>
              Hi, I am <strong>Manoj Kumar</strong>, a final year BCA student. 
              I am a passionate, self-taught developer who loves exploring the world of web technologies. 
              My journey into programming started with a curiosity to build things for the web, and that curiosity has evolved into a strong set of technical skills.
            </p>
            <p>
              I consider myself a quick learner who grasps new concepts easily. I am highly motivated, willing to learn new technologies, and always ready to take on new challenges. 
              Above all, I am passionate about my work and eager to contribute my skills and enthusiasm to forward-thinking companies.
            </p>
            <p>
              Additionally, I actively leverage modern AI tools to accelerate my learning, troubleshoot complex problems faster, and write cleaner, more efficient code.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="icon">🎓</span>
                <span>BCA Final Year</span>
              </div>
              <div className="highlight-item">
                <span className="icon">🚀</span>
                <span>Quick Learner</span>
              </div>
              <div className="highlight-item">
                <span className="icon">💻</span>
                <span>Self-Taught</span>
              </div>
              <div className="highlight-item">
                <span className="icon">🤖</span>
                <span>AI-Assisted</span>
              </div>
              <div className="highlight-item">
                <span className="icon">💼</span>
                <span>Ready to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
