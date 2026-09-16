import "./Teachers.css";

const teachers = [
  {
    initial: "S",
    name: "Shubham Salvi",
    role: "Pianist & Instructor",
    text: "Dedicated to music since 2012, Shubham brings his experience and passion for music into every lesson.",
  },
  {
    initial: "P",
    name: "Pankaj Joshi",
    role: "Guitarist & Instructor",
    text: "Performing professionally since 2016, Pankaj focuses on helping students develop their skills, confidence and musical identity.",
  },
];

function Teachers() {
  return (
    <section className="teachers-section" id="teachers">
      <p className="teachers-eyebrow">Meet your teachers</p>
      <h2>Learn from musicians who love to teach.</h2>

      <div className="teachers-grid">
        {teachers.map((teacher) => (
          <article className="teacher-card" key={teacher.name}>
            <div className="teacher-initial">{teacher.initial}</div>

            <p className="teacher-role">{teacher.role}</p>
            <h3>{teacher.name}</h3>
            <p className="teacher-text">{teacher.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Teachers;