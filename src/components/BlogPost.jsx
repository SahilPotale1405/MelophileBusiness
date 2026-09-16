import "./BlogPost.css";

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client,urlFor } from "../sanity/client";
import { PortableText } from "@portabletext/react";

function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await client.fetch(
          `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            excerpt,
            publishedAt,
            body,
            "author": author->name,
            "category": categories[0]->title,
            mainImage
          }`,
          { slug }
        );

        setPost(data);
      } catch (error) {
        console.error("Failed to load article:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!post) {
    return (
      <section>
        <h1>Article not found</h1>
        <Link to="/">← Back to home</Link>
      </section>
    );
  }

  return (
    <article className="blog-post-page">
      <Link to="/" className="blog-post-back">
        ← Back to Melophile
      </Link>

      <p className="blog-post-category">
        {post.category || "MUSIC"}
      </p>

      <h1>{post.title}</h1>

      <p className="blog-post-excerpt">
        {post.excerpt}
      </p>

      <div className="blog-post-meta">
          <span>{post.author || "Melophile"}</span>

          <span>•</span>

          <span>
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>

          <span className="blog-post-reading-time">
            ● 5 MIN READ
          </span>
        </div>
        {post.mainImage && (
          <img
            className="blog-post-image"
            src={urlFor(post.mainImage).width(1400).quality(90).url()}
            alt={post.title}
          />
        )}
      <div className="blog-post-content">
        <PortableText value={post.body} />
      

      <section className="blog-cta">
        <p className="blog-cta-eyebrow">Ready to start?</p>

        <h2>Ready to make some music?</h2>

        <p>
          Your next song could start with your first class at Melophile.
        </p>

        <a href="/#contact" className="blog-cta-button">
          Book a Free Trial →
        </a>

        <Link to="/" className="blog-back-link">
          ← Back to Melophile
        </Link>
      </section>
    </div>  
    </article>
  );
}

export default BlogPost;