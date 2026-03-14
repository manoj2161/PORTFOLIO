import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Flipkart UI Clone",
      description: "A complete frontend clone of the Flipkart e-commerce homepage, built with HTML and CSS.",
      tech: ["HTML", "CSS"],
      link: "#" // Add actual link later
    },
    {
      id: 2,
      title: "Card Page",
      description: "A responsive webpage displaying interactive cards with modern styling and layouts.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#" // Add actual link later
    },
    {
      id: 3,
      title: "My Portfolio",
      description: "A personal portfolio built using React and modern CSS features to showcase my work, skills, and resume.",
      tech: ["React", "CSS"],
      link: "#" // Add actual link later
    }
  ];

  return (
    <section id="project" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>My <span className="highlight">Projects</span></h2>
          <p>Here are some of the projects I've worked on recently</p>
        </div>
        
        <div className="projects-grid">
          {projectList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((techItem, index) => (
                    <span key={index} className="tech-tag">{techItem}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View Project &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
