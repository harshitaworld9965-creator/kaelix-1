import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    number:"01",
    title:"Brand Website",
    description:"Web design & development",
    preview: (
      <div className="project-preview preview-one">
        <div className="mock-nav">
          <span>NOIR</span>
          <span>MENU</span>
        </div>
        <div className="mock-content">
          <p>CREATIVE STUDIO</p>
          <h3>
            Made to
            <br/>
            be noticed.

          </h3>
        </div>
      </div>
    ),
  },
  {
    number:"02",
    title:"Lunaria",
    description:"Brand website & digital experience",
    preview: (
      <div className="project-preview preview-two">
        <div className="lunaria-content">
          <p>BEAUTY STUDIO</p>
          <h3>Beauty, <br/> reimagined.</h3>
        </div>
      </div>
    ),
  },
  {
    number:"03",
    title:"Digital Experience",
    description:"Interactive web experience",
    preview: (
      <div className="project-preview preview-three">
        <div className="aether-content">
          <p>INTERACTIVE EXPERIENCE</p>
          <h3>
            Beyond 
            <br />
            the ordinary.
          </h3>
        </div>
      </div> 
    ),
  },
];

function App(){
  return (
    <main className="hero">
      <header className="brand">KAELIX</header>

      <section className="hero-content">
        <p className="eyebrow">DIGITAL WEB STUDIO</p>

        <h1>We build websites
          <br />
          for brands that refuse
          <br/>
          to blend in.
        </h1>

        <p className="description">
          Kaelix is a digital studio creating distinctive websites,
          interfaces and digital experiences for ambitious brands.
        </p>

        <button>Explore the work</button>
      </section>

      <section className="work">
        <p className="section-label">SELECTED WORK</p>

        <div className="work-grid">
        {projects.map((project) => (
          <ProjectCard 
          key={project.number}
          number={project.number}
          title={project.title}
          description={project.description}
          preview={project.preview}
          />
        ))}
</div>
      </section>

    </main>
  );
}
export default App;