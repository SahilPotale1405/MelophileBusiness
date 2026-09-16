function StudentReviews() {
  const reviews = [
    {
      text: "Great guitar class! Sir teaches very clearly and always keeps motivating us to improve. Really enjoying the learning experience.",
    },
    {
      text: "I love the atmosphere and the flexibility of the class! At Sunday 9 pm instead of dreading Monday, I was singing along with other students and learning about chords!",
    },
    {
      text: "This is a total hidden gem. The instructor is highly qualified, the timings are flexible, and it's actually very affordable. One of the best parts is that you can stay and practice for as long as you want.",
    },
    {
      text: "I've been attending this guitar class for the past 2 months and it has been a wonderful learning experience. In this short time, I've covered 14 chords and learned 2 songs.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-header">
        <div>
          <p className="reviews-eyebrow">Student Experiences</p>

          <h2>
            Music is better
            <br />
            <em>when you enjoy the journey.</em>
          </h2>
        </div>

        <div className="reviews-rating">
          <strong>5.0</strong>
          <span>★★★★★</span>
          <p>158 Google reviews</p>
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={index}>
            <div className="review-stars">★★★★★</div>

            <p>"{review.text}"</p>

            <span className="review-source">
              Google Review
            </span>
          </article>
        ))}
      </div>

      <div className="reviews-footer">
        <p>See what our students are saying on Google.</p>

        <a
          href="https://www.google.com/search?q=Melophile+Virar"
          target="_blank"
          rel="noreferrer"
        >
          Read all reviews on Google →
        </a>
      </div>
    </section>
  );
}

export default StudentReviews;