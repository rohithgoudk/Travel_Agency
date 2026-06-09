import "./Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">

          <div className="hero-content">
            <span className="hero-tag">
              ✈️ Explore Beyond Boundaries
            </span>

            <h1>
              Discover The World's
              <span> Most Amazing Places</span>
            </h1>

            <p>
              From tropical beaches to mountain adventures,
              create unforgettable memories with our expertly
              curated travel experiences.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Explore Tours
              </button>

              <button className="secondary-btn">
                View Destinations
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <div className="search-box">

          <input
            type="text"
            placeholder="Where do you want to go?"
          />

          <input
            type="date"
          />

          <button>
            Search Trips
          </button>

        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="destinations">
        <div className="section-title">
          <h2>Popular Destinations</h2>
          <p>
            Handpicked destinations loved by travelers.
          </p>
        </div>

        <div className="destination-grid">

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd"
              alt="Bali"
            />
            <div className="destination-content">
              <h3>Bali</h3>
              <span>Indonesia</span>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
            />
            <div className="destination-content">
              <h3>Paris</h3>
              <span>France</span>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
              alt="Swiss"
            />
            <div className="destination-content">
              <h3>Swiss Alps</h3>
              <span>Switzerland</span>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">

        <div className="section-title">
          <h2>Dream Vacation Packages</h2>
        </div>

        <div className="package-grid">

          <div className="package-card">
            <h3>Beach Escape</h3>
            <p>
              Relax on pristine beaches with luxury resorts.
            </p>
          </div>

          <div className="package-card">
            <h3>Mountain Adventure</h3>
            <p>
              Experience thrilling adventures and hiking tours.
            </p>
          </div>

          <div className="package-card">
            <h3>City Explorer</h3>
            <p>
              Discover iconic cities and cultural experiences.
            </p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">

        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <span>🌎</span>
            <h3>Worldwide Destinations</h3>
          </div>

          <div className="why-card">
            <span>🏨</span>
            <h3>Luxury Hotels</h3>
          </div>

          <div className="why-card">
            <span>🧳</span>
            <h3>Complete Planning</h3>
          </div>

          <div className="why-card">
            <span>✈️</span>
            <h3>Best Flight Deals</h3>
          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section className="gallery">

        <div className="section-title">
          <h2>Travel Gallery</h2>
        </div>

        <div className="gallery-grid">

          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="" />
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" alt="" />
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828" alt="" />
          <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963" alt="" />

        </div>

      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">

        <div className="testimonial-card">
          <p>
            “Our honeymoon trip was absolutely perfect.
            Every detail was organized beautifully.”
          </p>

          <h4>Sarah & Michael</h4>
        </div>

      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">

        <h2>Get Travel Inspiration</h2>

        <p>
          Subscribe for exclusive travel deals and destination ideas.
        </p>

        <div className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>
    </>
  );
}

export default Home;