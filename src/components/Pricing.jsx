import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-heading">
        <p className="pricing-eyebrow">Class Fees</p>

        <h2>Start your musical journey.</h2>

        <p>
          Learn guitar or piano with flexible timings and instruments
          provided at no extra charge.
        </p>
      </div>

      <article className="price-card">
        <p className="price-label">Monthly fee</p>

        <div className="price">
          <span className="old-price">₹3,000</span>

          <div>
            <span className="now-label">Now only</span>

            <div className="new-price">
              <span>₹</span>
              <strong>2,700</strong>
            </div>
          </div>
        </div>

        <p className="per-month">per month</p>

        <div className="price-line"></div>

        <div className="price-detail">
          <span>30 hours</span>
          <p>Flexible learning time / month</p>
        </div>

        <div className="price-detail">
          <span>10 am – 10 pm</span>
          <p>Flexible class timings</p>
        </div>

        <div className="included">
          <span>♪</span>
          Instruments provided at no extra charge.
        </div>
        <a className="pricing-cta" href="#contact">
          Book a Free Trial
        </a>
      
      </article>
    </section>
  );
}

export default Pricing;