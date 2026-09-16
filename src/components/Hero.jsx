import heroInstruments from "../assets/heroInstruments.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          Guitar & Piano Classes · Virar West
        </p>

        <h1>
          Make music <em>your own.</em>
        </h1>

        <p className="intro">
          Personalized music lessons that build skill, confidence, creativity,
          and a lifelong love for music.
        </p>

        <div className="hero-buttons">
          <a className="button primary-button" href="#contact">
            Book a free trial
          </a>

          <a className="button secondary-button" href="tel:+919322210102">
            Call 93222 10102
          </a>
        </div>

        <p className="small-text">
          For all ages and levels · Instruments provided
        </p>
      </div>

      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={heroInstruments}
          alt="Acoustic guitar and piano at Melophile"
          loading="eager"
        />
      </div>
    </section>
  );
}

export default Hero;