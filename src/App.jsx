import { useEffect, useRef } from "react";
import gsap from "gsap";

import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

const projects = [
  {
    number: "01",
    title: "Brand Website",
    description: "Web design & development",
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
            <br />
            be noticed.
          </h3>
        </div>
      </div>
    ),
  },

  {
    number: "02",
    title: "Lunaria",
    description: "Brand website & digital experience",
    preview: (
      <div className="project-preview preview-two">
        <div className="lunaria-content">
          <p>BEAUTY STUDIO</p>
          <h3>
            Beauty,
            <br />
            reimagined.
          </h3>
        </div>
      </div>
    ),
  },

  {
    number: "03",
    title: "Digital Experience",
    description: "Interactive web experience",
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

function App() {
  const app = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <main className="hero" ref={app}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="nav-brand">
          KAELIX
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
          <a href="#lab">Lab</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-content">
        <p className="eyebrow hero-animate">
          DIGITAL WEB STUDIO
        </p>

        <h1 className="hero-animate">
          We build websites
          <br />
          for brands that refuse
          <br />
          to blend in.
        </h1>

        <p className="description hero-animate">
          Kaelix is a digital studio creating distinctive websites,
          interfaces and digital experiences for ambitious brands.
        </p>

        <button
          className="hero-animate"
          onClick={() => {
            document.getElementById("work").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Explore the work
        </button>
      </section>

      {/* SELECTED WORK */}
      <section className="work" id="work">
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

      {/* SERVICES */}
      <section className="services" id="services">
        <p className="section-label">WHAT WE DO</p>

        <div className="services-list">
          <article className="service">
            <span>01</span>

            <div>
              <h2>Web Design</h2>

              <p>
                Distinctive visual identities and interfaces
                designed for the web.
              </p>
            </div>
          </article>

          <article className="service">
            <span>02</span>

            <div>
              <h2>Web Development</h2>

              <p>
                Fast, responsive websites built with
                thoughtful interactions and clean technology.
              </p>
            </div>
          </article>

          <article className="service">
            <span>03</span>

            <div>
              <h2>Interactive Experiences</h2>

              <p>
                Memorable digital experiences that bring
                brands to life beyond the traditional website.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* STUDIO */}
      <section className="studio" id="studio">
        <p className="section-label">THE STUDIO</p>

        <div className="studio-content">
          <h2>
            We make the web
            <br />
            a little less ordinary.
          </h2>

          <p>
            Kaelix is an independent digital studio focused on
            building distinctive websites and digital experiences
            for brands with something worth saying.
          </p>
        </div>
      </section>

      {/* KAELIX LAB */}
      <section className="lab" id="lab">
        <p className="section-label">KAELIX LAB</p>

        <div className="lab-content">
          <div>
            <p className="lab-kicker">
              EXPERIMENTS / AI / CREATIVE TECH
            </p>

            <h2>
              Where we
              <br />
              experiment.
            </h2>
          </div>

          <div className="lab-description">
            <p>
              Kaelix Lab is where we explore AI, creative technology,
              interactive interfaces and ideas that don't fit inside
              a traditional website.
            </p>

            <button className="lab-link">
              Explore the Lab →
            </button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <p className="section-label">HOW WE WORK</p>

        <div className="process-list">
          <article className="process-step">
            <span>01</span>

            <div>
              <h2>Discover</h2>

              <p>
                We understand the brand, audience and goals
                before we start building.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>02</span>

            <div>
              <h2>Design</h2>

              <p>
                We shape the visual direction and create
                an experience with purpose.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>03</span>

            <div>
              <h2>Build</h2>

              <p>
                We turn the design into a responsive,
                polished digital experience.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>04</span>

            <div>
              <h2>Launch</h2>

              <p>
                We test, refine and ship the finished
                experience into the world.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FINAL CTA + CONTACT FORM */}
      <section className="final-cta" id="contact">
        <p className="section-label">HAVE A PROJECT?</p>

        <div className="cta-content">
          <h2>
            Let's build
            <br />
            something.
          </h2>

          <a href="#project-form" className="cta-button">
            Start a project →
          </a>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <h2>KAELIX</h2>
          <p>Digital Web Studio</p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Kaelix</span>

          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default App;