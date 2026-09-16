import "./Courses.css";

const levels = [
  {
    number: "01",
    name: "Foundation",
    duration: "6–8 months",
    details:
      "Master basic rhythm, chords, scales, and simple songs.",
  },
  {
    number: "02",
    name: "Beginner",
    duration: "6–8 months",
    details:
      "Build confidence with more songs, techniques, and basic improvisation.",
  },
  {
    number: "03",
    name: "Intermediate",
    duration: "8–10 months",
    details:
      "Explore advanced chords, scales, soloing, and music theory.",
  },
  {
    number: "04",
    name: "Advanced",
    duration: "10–12 months",
    details:
      "Focus on improvisation, composition, advanced techniques, and performance skills.",
  },
];

function Courses() {
  return (
    <section className="course-section" id="courses">
      <div className="course-heading">
       <p className="course-eyebrow">Learning Path</p>

        <h2>
          A structured journey
          <br />
          from beginner to
          <br />
          confident musician.
        </h2>
      </div>

      <div className="level-list">
        {levels.map((level) => (
          <article className="level-card" key={level.number}>
            <span className="level-number">{level.number}</span>

            <div className="level-content">
              <h3>{level.name}</h3>
              <p>{level.details}</p>
            </div>

            <strong>{level.duration}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Courses;