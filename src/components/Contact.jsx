import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instrument: "Guitar",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `Hello Melophile, I would like to book a free trial class.

Name: ${formData.name}
Phone: ${formData.phone}
Interested in: ${formData.instrument}`;

    const whatsappUrl = `https://wa.me/919322210102?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-info">
        <p className="contact-eyebrow">Find Melophile</p>

        <h2>Let’s start your musical journey.</h2>

        <p className="address">
          E/403, Gulmohar Complex, Phase-3,
          <br />
          Viva College Road, near Divekar Hospital,
          <br />
          Virar (W)
        </p>

        <div className="contact-actions">
          <a className="primary-call" href="tel:+919322210102">
            <span>Call us today</span>
            <strong>93222 10102</strong>
          </a>

          <a
            className="map-link"
            href="https://maps.app.goo.gl/eRRRSutN84ErWXEZ6"
            target="_blank"
            rel="noreferrer"
          >
            📍 Get directions on Google Maps ↗
          </a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <p className="form-eyebrow">Free trial class</p>

        <h3>Send an inquiry</h3>

        <p>Fill this form and WhatsApp will open with your details.</p>

        <label>
          Your name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </label>

        <label>
          What would you like to learn?
          <select
            name="instrument"
            value={formData.instrument}
            onChange={handleChange}
          >
            <option>Guitar</option>
            <option>Piano</option>
            <option>Both / Not sure yet</option>
          </select>
        </label>

        <button type="submit">Send WhatsApp inquiry</button>
      </form>
    </section>
  );
}

export default Contact;