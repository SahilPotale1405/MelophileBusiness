import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="#top">
          Melophile<span>♪</span>
        </a>

        <p>Guitar & Piano Classes · Virar West</p>
      </div>

      <div className="footer-links">
        <a href="#instruments">Instruments</a>
        <a href="#courses">Learning Path</a>
        <a href="#reviews">Reviews</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <a className="footer-phone" href="tel:+919322210102">
        93222 10102
      </a>
    </footer>
  );
}

export default Footer;