import AdSlot from "../components/AdSlot";

export default function Home() {
  return (
    <>
      <header className="header">
        <h1>Tech News & Insights</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#tech">Technology</a>
          <a href="#reviews">Reviews</a>
          <a href="#guides">Guides</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <AdSlot slot="1111111111" style={{ minHeight: 120, margin: 10 }} />

      <div className="container">
        <div className="main">
          <article className="article">
            <h2>The Future of Web Development in 2024</h2>
            <p className="meta">Published on January 15, 2024 | By Tech Editor</p>
            <p>
              Web development continues to evolve at a rapid pace, with new frameworks and tools emerging 
              regularly. This year, we're seeing a significant shift towards server-side rendering, improved 
              performance optimization, and enhanced developer experience.
            </p>
            <p>
              Modern web applications are becoming more complex, requiring developers to stay updated with 
              the latest trends. From React Server Components to Next.js 14's new features, the landscape 
              is constantly changing. Understanding these technologies is crucial for building scalable and 
              maintainable applications.
            </p>
            <p>
              Performance remains a key focus, with Core Web Vitals becoming increasingly important for SEO 
              and user experience. Developers are adopting new techniques like code splitting, lazy loading, 
              and edge computing to deliver faster, more responsive applications.
            </p>
          </article>

                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4344533853971687"
              crossorigin="anonymous"></script>
          <ins class="adsbygoogle"
              style="display:block; text-align:center;"
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-4344533853971687"
              data-ad-slot="2830546927"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>

          <article className="article">
            <h2>Best Practices for Responsive Design</h2>
            <p className="meta">Published on January 12, 2024 | By Design Team</p>
            <p>
              Responsive design is no longer optional—it's essential. With mobile traffic accounting for 
              over 50% of web traffic globally, creating websites that work seamlessly across all devices 
              is critical for success.
            </p>
            <p>
              The key principles of responsive design include flexible grid layouts, media queries, and 
              scalable images. CSS Grid and Flexbox have revolutionized how we approach layout design, 
              making it easier to create complex, responsive interfaces.
            </p>
            <p>
              Mobile-first design has become the standard approach, starting with the smallest screen size 
              and progressively enhancing for larger devices. This methodology ensures optimal performance 
              and user experience across all platforms.
            </p>
          </article>

          <AdSlot slot="3333333333" style={{ minHeight: 250 }} />

          <section className="section">
            <h2>Latest Technology Trends</h2>
            <div className="trends-grid">
              <div className="trend-card">
                <h3>Artificial Intelligence</h3>
                <p>AI is transforming how we build and interact with applications, from chatbots to 
                automated testing tools.</p>
              </div>
              <div className="trend-card">
                <h3>Cloud Computing</h3>
                <p>Cloud services continue to expand, offering scalable solutions for businesses of all sizes.</p>
              </div>
              <div className="trend-card">
                <h3>Cybersecurity</h3>
                <p>With increasing threats, security has become a top priority for developers and organizations.</p>
              </div>
            </div>
          </section>

          <AdSlot slot="4444444444" style={{ minHeight: 300 }} />

          <article className="article">
            <h2>Getting Started with Modern JavaScript</h2>
            <p className="meta">Published on January 10, 2024 | By Code Academy</p>
            <p>
              JavaScript has come a long way since its inception. Modern JavaScript features like ES6+ 
              syntax, async/await, and modules have made the language more powerful and developer-friendly.
            </p>
            <p>
              Understanding concepts like closures, promises, and the event loop is essential for any 
              JavaScript developer. These fundamentals form the foundation for working with frameworks 
              like React, Vue, and Angular.
            </p>
            <p>
              TypeScript has also gained significant traction, adding type safety to JavaScript and 
              improving code quality and developer experience. Many teams are adopting TypeScript for 
              large-scale applications.
            </p>
          </article>
        </div>

        <div className="sidebar">
          <AdSlot slot="5555555555" style={{ minHeight: 300 }} />

          <aside className="sidebar-content">
            <h3>Popular Articles</h3>
            <ul className="article-list">
              <li><a href="#">10 Tips for Better Code Quality</a></li>
              <li><a href="#">Understanding React Hooks</a></li>
              <li><a href="#">CSS Grid vs Flexbox</a></li>
              <li><a href="#">API Design Best Practices</a></li>
              <li><a href="#">Database Optimization Tips</a></li>
            </ul>

            <h3>Newsletter</h3>
            <p>Subscribe to get the latest tech news and tutorials delivered to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </aside>

          <AdSlot slot="6666666666" style={{ minHeight: 300 }} />

          <aside className="sidebar-content">
            <h3>Categories</h3>
            <ul className="category-list">
              <li><a href="#">Frontend Development</a></li>
              <li><a href="#">Backend Development</a></li>
              <li><a href="#">Mobile Development</a></li>
              <li><a href="#">DevOps</a></li>
              <li><a href="#">UI/UX Design</a></li>
            </ul>
          </aside>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Tech News & Insights. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>

      <AdSlot slot="7777777777" style={{ minHeight: 120, margin: 10 }} />
    </>
  );
}
