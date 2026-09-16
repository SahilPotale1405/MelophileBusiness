import "./Instruments.css";

const instruments = [
  {
    number: "01",
    type: "STRING INSTRUMENT",
    name: "Guitar",
    description:
      "Learn from foundation to advanced levels with structured, personalized guidance.",
    image: "src/assets/guitar_img.png",
    icon: "♪",
  },
  {
    number: "02",
    type: "KEYBOARD INSTRUMENT",
    name: "Piano",
    description:
      "Build your musical skills with structured learning, creativity and confidence.",
    image: "src/assets/keyboard.png",
    icon: "♫",
  },
];

function Instruments() {
  return (
    <section className="instruments-section" id="instruments">
      <div className="instruments-heading">
        <p className="instruments-eyebrow">Our instruments</p>

        <h2>
          Find the instrument
          <br />
          <em>that speaks to you.</em>
        </h2>
      </div>

      <div className="instruments-grid">
        {instruments.map((instrument) => (
          <article className="instrument-card" key={instrument.name}>
            <div className="instrument-card-top">
              <span>{instrument.number}</span>
              <span className="instrument-icon">{instrument.icon}</span>
            </div>

            <div className="instrument-card-body">
              <div className="instrument-text">
                <p className="instrument-type">{instrument.type}</p>

                <h3>{instrument.name}</h3>

                <p className="instrument-description">
                  {instrument.description}
                </p>

                <a href="#courses">
                  Explore learning path →
                </a>
              </div>

              <div className="instrument-image-wrap">
                <div className="instrument-image-circle"></div>

                <img
                  src={instrument.image}
                  alt={`${instrument.name} at Melophile`}
                  className="instrument-image"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Instruments;