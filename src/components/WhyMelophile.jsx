// const benefits = [
//   {
//     number: "01",
//     title: "Personalized attention",
//     text: "Individual guidance to help every student learn comfortably at their own pace.",
//   },
//   {
//     number: "02",
//     title: "Strong musical foundation",
//     text: "Build essential musical skills step by step with a structured approach to learning.",
//   },
//   {
//     number: "03",
//     title: "Creativity & composition",
//     text: "Develop your musical ear, creativity and confidence to express your own ideas.",
//   },
//   {
//     number: "04",
//     title: "Learn, perform & grow",
//     text: "Prepare for music exams, improve your performance skills and take part in competitions.",
//   },
// ];

const benefits = [
  {
    number: "01",
    title: "30 Hours Every Month",
    text: "Use your monthly learning hours according to your own schedule and practice at your own pace.",
  },
  {
    number: "02",
    title: "Truly Flexible Learning",
    text: "Learn without being restricted to only one or two fixed days each week.",
  },
  {
    number: "03",
    title: "Instruments Provided",
    text: "Practice and learn at Melophile without worrying about bringing your own instrument.",
  },
  {
    number: "04",
    title: "Learn, Practice & Grow",
    text: "Spend more time building your skills, improving your technique and becoming a confident musician.",
  },
  {
    number: "05",
    title: "Personal Guidance",
    text: "Get guidance based on your current level, learning pace and musical goals.",
  },
];

function WhyMelophile() {
  return (
    <section className="benefits" id="classes">
      <p className="eyebrow">Why Melophile</p>

      <h2>Learn with purpose, play with confidence.</h2>

      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.number}>
            <span>{benefit.number}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyMelophile;