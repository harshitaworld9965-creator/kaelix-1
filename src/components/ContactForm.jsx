function ContactForm() {
  return (
    <div className="contact-form">
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
        />
      </div>

      <div className="form-field">
        <label htmlFor="company">Company / Brand</label>
        <input
          id="company"
          type="text"
          placeholder="Your brand"
        />
      </div>

      <div className="form-field">
        <label htmlFor="project">Tell us about the project</label>
        <textarea
          id="project"
          rows="5"
          placeholder="What are you looking to build?"
        />
      </div>

      <button type="button" className="form-submit">
        Send inquiry →
      </button>
    </div>
  );
}

export default ContactForm;