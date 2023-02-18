const index = () => (
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 sticky-top">
    <a href="index.html" className="navbar-brand ms-lg-5">
      <h1 className="display-5 m-0 text-primary">
        Safe<span className="text-secondary">Cam</span>
      </h1>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <a href="index.html" className="nav-item nav-link">
          Home
        </a>
        <a href="about.html" className="nav-item nav-link">
          About
        </a>
        <a href="service.html" className="nav-item nav-link active">
          Service
        </a>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Pages
          </a>
          <div className="dropdown-menu m-0">
            <a href="price.html" className="dropdown-item">
              Pricing Plan
            </a>
            <a href="blog.html" className="dropdown-item">
              Blog Grid
            </a>
            <a href="detail.html" className="dropdown-item">
              Blog Detail
            </a>
            <a href="team.html" className="dropdown-item">
              The Team
            </a>
            <a href="testimonial.html" className="dropdown-item">
              Testimonial
            </a>
          </div>
        </div>
        <a href="contact.html" className="nav-item nav-link">
          Contact
        </a>
        <a
          href="tel:+123456789"
          className="nav-item nav-link nav-contact bg-secondary text-white px-5 ms-lg-5"
        >
          <i className="bi bi-telephone-outbound me-2"></i>+123 456 789
        </a>
      </div>
    </div>
  </nav>
);

export default index;
