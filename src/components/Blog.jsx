import { useEffect, useState } from "react";
import { getPosts,urlFor } from "../sanity/client";
import "./Blog.css";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-heading">
        <p className="blog-eyebrow">From Melophile</p>

        <h2>
          Learn beyond
          <br />
          <em>the classroom.</em>
        </h2>

        <p className="blog-intro">
          Practical ideas, music tips, and insights to help you keep growing
          between your lessons.
        </p>
      </div>

      <div className="blog-grid">
        {loading ? (
          <p>Loading articles...</p>
        ) : posts.length === 0 ? (
          <p>No articles published yet.</p>
        ) : (
          posts.map((post, index) => (
            <article className="blog-card" key={post._id}>
              {post.mainImage && (
                <img
                  className="blog-card-image"
                  src={urlFor(post.mainImage).width(900).quality(85).url()}
                  alt={post.title}
                />
              )}

              <div className="blog-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{post.category || "MUSIC"}</span>
              </div>

              <div className="blog-card-content">
                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <a href={`/blog/${post.slug.current}`}>
                  Read article →
                </a>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

export default Blog;