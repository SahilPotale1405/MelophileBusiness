import { useEffect, useMemo, useState } from "react";
import { getPosts, urlFor } from "../sanity/client";
import "./Blog.css";

const INITIAL_POSTS = 6;
const LOAD_MORE_COUNT = 6;

// const categories = [
//   "All",
//   "Guitar",
//   "Piano",
//   "Practice",
//   "Music Theory",
//   "Inspiration",
// ];

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_POSTS);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await getPosts();
        setPosts(data || []);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter(
      (post) =>
        post.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [posts, activeCategory]);

  const featuredPost = filteredPosts[0];

  const secondaryPosts = filteredPosts.slice(1, 3);

  const remainingPosts = filteredPosts.slice(
    3,
    visibleCount
  );

  // function handleCategoryChange(category) {
  //   setActiveCategory(category);
  //   setVisibleCount(INITIAL_POSTS);
  // }

  function loadMore() {
    setVisibleCount((current) => current + LOAD_MORE_COUNT);
  }

  function formatDate(date) {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function getReadTime(post) {
    if (post.body) {
      const words = JSON.stringify(post.body).split(/\s+/).length;
      return `${Math.max(2, Math.ceil(words / 200))} min read`;
    }

    return "5 min read";
  }

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">

        {/* HEADER */}
        <div className="blog-heading">
          <div>
            <p className="blog-eyebrow">BLOG</p>

            <h2>
              More than lessons.
              <br />
              <em>A community of learners.</em>
            </h2>

            <p className="blog-intro">
              Explore articles, tips, and stories from the world
              of music.
            </p>
          </div>

          {posts.length > INITIAL_POSTS && (
            <a href="#blog-grid" className="blog-view-all">
              View all articles <span>→</span>
            </a>
          )}
        </div>

        {/* LOADING */}
        {loading && (
          <div className="blog-status">
            Loading articles...
          </div>
        )}

        {/* EMPTY */}
        {!loading && posts.length === 0 && (
          <div className="blog-status">
            No articles published yet.
          </div>
        )}

        {/* BLOG CONTENT */}
        {!loading && posts.length > 0 && (
          <>
            {/* CATEGORY FILTERS */}
            {/* <div className="blog-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    activeCategory === category
                      ? "blog-filter active"
                      : "blog-filter"
                  }
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div> */}

            {/* FEATURED AREA */}
            {featuredPost && (
              <div className="blog-featured-layout">

                {/* FEATURED POST */}
                <article className="blog-featured-card">
                  {featuredPost.mainImage && (
                    <img
                      src={urlFor(featuredPost.mainImage)
                        .width(1200)
                        .quality(90)
                        .url()}
                      alt={featuredPost.title}
                    />
                  )}

                  <div className="featured-overlay" />

                  <div className="featured-content">

                    <div className="featured-top">
                      <span className="featured-badge">
                        FEATURED
                      </span>

                      <span className="featured-category">
                        {featuredPost.category || "MUSIC"}
                      </span>
                    </div>

                    <h3>{featuredPost.title}</h3>

                    {featuredPost.excerpt && (
                      <p>{featuredPost.excerpt}</p>
                    )}

                    <div className="featured-bottom">
                      <span>
                        {formatDate(featuredPost.publishedAt)}
                        {" · "}
                        {getReadTime(featuredPost)}
                      </span>

                      <a
                        href={`/blog/${featuredPost.slug.current}`}
                        aria-label={`Read ${featuredPost.title}`}
                      >
                        →
                      </a>
                    </div>
                  </div>
                </article>

                {/* SECONDARY POSTS */}
                <div className="blog-secondary-posts">
                  {secondaryPosts.map((post) => (
                    <article
                      className="blog-secondary-card"
                      key={post._id}
                    >
                      {post.mainImage && (
                        <img
                          src={urlFor(post.mainImage)
                            .width(700)
                            .quality(85)
                            .url()}
                          alt={post.title}
                        />
                      )}

                      <div className="secondary-content">

                        <span className="post-category">
                          {post.category || "MUSIC"}
                        </span>

                        <h3>{post.title}</h3>

                        <div className="secondary-bottom">
                          <span>
                            {formatDate(post.publishedAt)}
                            {" · "}
                            {getReadTime(post)}
                          </span>

                          <a
                            href={`/blog/${post.slug.current}`}
                            aria-label={`Read ${post.title}`}
                          >
                            →
                          </a>
                        </div>

                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* LATEST ARTICLES */}
            {remainingPosts.length > 0 && (
              <div
                className="blog-latest"
                id="blog-grid"
              >
                <div className="latest-heading">
                  <div>
                    <p className="latest-eyebrow">
                      FROM MELOPHILE
                    </p>

                    <h3>Latest Articles</h3>

                    <p>
                      Practical ideas and inspiration to
                      help you keep growing.
                    </p>
                  </div>
                </div>

                <div className="blog-grid">
                  {remainingPosts.map((post) => (
                    <article
                      className="blog-card"
                      key={post._id}
                    >
                      {post.mainImage && (
                        <div className="blog-card-image-wrap">
                          <img
                            src={urlFor(post.mainImage)
                              .width(700)
                              .quality(85)
                              .url()}
                            alt={post.title}
                            className="blog-card-image"
                          />
                        </div>
                      )}

                      <div className="blog-card-content">

                        <div className="blog-card-meta">
                          <span className="post-category">
                            {post.category || "MUSIC"}
                          </span>

                          <span>
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>

                        <h3>{post.title}</h3>

                        {post.excerpt && (
                          <p>{post.excerpt}</p>
                        )}

                        <div className="blog-card-bottom">
                          <span>
                            {getReadTime(post)}
                          </span>

                          <a
                            href={`/blog/${post.slug.current}`}
                            aria-label={`Read ${post.title}`}
                          >
                            →
                          </a>
                        </div>

                      </div>
                    </article>
                  ))}
                </div>

                {/* LOAD MORE */}
                {visibleCount < filteredPosts.length && (
                  <div className="blog-load-more">
                    <button
                      type="button"
                      onClick={loadMore}
                    >
                      View More Articles
                      <span>↓</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Blog;