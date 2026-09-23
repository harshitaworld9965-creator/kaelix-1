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
          <article className="work-card">
            <div className="project-preview preview-one">
              <div className="mock-nav">
                <span>NOIR</span>
                <span>MENU</span>
              </div>
              <div className="mock-content">
                <p>CREATIVE STUDIO</p>
                <h3>Made to <br/> be noticed.</h3>
              </div>
            </div>
            <div className="project-info">
            <span>01</span>
            <h2>Brand Website</h2>
            <p>Web design & development</p>
            </div>
          </article>

          <article className="work-card">
            <div className="project-preview preview-two"></div>
            <div className="project-info">
            <span>02</span>
            <h2>Premium Landing Page</h2>
            <p>Strategy, design & development</p>
            </div>
          </article>

          <article className="work-card">
            <div className="project-preview preview-three"></div>
            <div className="project-info">
            <span>03</span>
            <h2>Digital Experience</h2>
            <p>Interactive web experience</p>
            </div>
          </article>
        </div>
      </section>

    </main>
  );
}
export default App;