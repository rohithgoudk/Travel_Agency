import "./Home.css";
import Bali    from "../../assets/Bali.webp";
import Paris   from "../../assets/Paris.webp";
import Swiss   from "../../assets/Swiss.webp";
import T1      from "../../assets/T1.webp";
import T2      from "../../assets/T2.webp";
import T3      from "../../assets/T3.webp";
import T4      from "../../assets/T4.webp";
import heroImg from "../../assets/heroImg1.webp";
import Swiss2  from "../../assets/Swiss2.webp";
import T12     from "../../assets/T12.webp";
import T11     from "../../assets/T11.webp";
import T10     from "../../assets/T10.webp";
import T9      from "../../assets/T9.webp";
import T8      from "../../assets/T8.webp";
import T7      from "../../assets/T7.webp";
import T5      from "../../assets/T5.webp";
import T6      from "../../assets/T6.webp";

function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Curated Travel Experiences
            </span>
            <h1>
              The World Is
              <em> Waiting<br />For You</em>
            </h1>
            <p>
              Bespoke journeys crafted around the moments
              that matter — from private villas in Bali to
              alpine retreats in the Swiss Alps.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Explore Tours</button>
              <button className="btn-ghost">View Destinations</button>
            </div>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <strong>4,200+</strong>
              <span>Trips completed</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>98%</strong>
              <span>Satisfaction rate</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>60+</strong>
              <span>Countries covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH ───────────────────────────────────────── */}
      <section className="search-section">
        <div className="search-box">
          <div className="search-field">
            <label>Destination</label>
            <input type="text" placeholder="Where to?" />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label>Departure</label>
            <input type="date" />
          </div>
          <div className="search-divider" />
          <div className="search-field">
            <label>Travellers</label>
            <input type="number" min="1" placeholder="2 adults" />
          </div>
          <button className="search-btn">Search</button>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────── */}
      <div className="trust-bar">
        <div className="trust-track">
          {[
            "National Geographic Partner","Condé Nast Traveller","Lonely Planet Top 10",
            "IATA Accredited","Forbes Travel Guide","TripAdvisor Hall of Fame",
            "National Geographic Partner","Condé Nast Traveller","Lonely Planet Top 10",
            "IATA Accredited","Forbes Travel Guide","TripAdvisor Hall of Fame",
          ].map((t, i) => (
            <span key={i} className="trust-item">
              <span className="trust-dot">◆</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── DESTINATIONS ─────────────────────────────────── */}
      <section className="destinations">
        <div className="section-header">
          <div>
            <p className="section-eyebrow">Where to next</p>
            <h2>Popular Destinations</h2>
          </div>
          <a href="#" className="section-link">All destinations →</a>
        </div>

        {/* Row 1 */}
        <div className="destination-grid">
          <div className="dest-card dest-card--large">
            <img src={Bali} alt="Bali" />
            <div className="dest-card-body">
              <div>
                <p className="dest-region">Indonesia</p>
                <h3>Bali</h3>
              </div>
              <div className="dest-meta">
                <span className="dest-tag">Beaches</span>
                <span className="dest-tag">Culture</span>
              </div>
            </div>
          </div>

          <div className="dest-col">
            <div className="dest-card">
              <img src={Paris} alt="Paris" />
              <div className="dest-card-body">
                <div>
                  <p className="dest-region">France</p>
                  <h3>Paris</h3>
                </div>
                <div className="dest-meta">
                  <span className="dest-tag">Art</span>
                  <span className="dest-tag">Cuisine</span>
                </div>
              </div>
            </div>
            <div className="dest-card">
              <img src={Swiss} alt="Swiss Alps" />
              <div className="dest-card-body">
                <div>
                  <p className="dest-region">Switzerland</p>
                  <h3>Swiss Alps</h3>
                </div>
                <div className="dest-meta">
                  <span className="dest-tag">Skiing</span>
                  <span className="dest-tag">Hiking</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="destination-grid-4">
          <div className="dest-card dest-card--sm">
            <img src={T1} alt="Tokyo" />
            <div className="dest-card-body">
              <div>
                <p className="dest-region">Japan</p>
                <h3>Tokyo</h3>
              </div>
              <div className="dest-meta">
                <span className="dest-tag">Food</span>
                <span className="dest-tag">Tech</span>
              </div>
            </div>
          </div>
          <div className="dest-card dest-card--sm">
            <img src={T2} alt="Santorini" />
            <div className="dest-card-body">
              <div>
                <p className="dest-region">Greece</p>
                <h3>Santorini</h3>
              </div>
              <div className="dest-meta">
                <span className="dest-tag">Islands</span>
                <span className="dest-tag">Sunsets</span>
              </div>
            </div>
          </div>
          <div className="dest-card dest-card--sm">
            <img src={T3} alt="Machu Picchu" />
            <div className="dest-card-body">
              <div>
                <p className="dest-region">Peru</p>
                <h3>Machu Picchu</h3>
              </div>
              <div className="dest-meta">
                <span className="dest-tag">Heritage</span>
                <span className="dest-tag">Trekking</span>
              </div>
            </div>
          </div>
          <div className="dest-card dest-card--sm">
            <img src={T4} alt="Maldives" />
            <div className="dest-card-body">
              <div>
                <p className="dest-region">Maldives</p>
                <h3>North Malé</h3>
              </div>
              <div className="dest-meta">
                <span className="dest-tag">Diving</span>
                <span className="dest-tag">Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="how-it-works">
        <div className="hiw-inner">
          <div className="section-header section-header--center">
            <p className="section-eyebrow">The process</p>
            <h2>Travel Made Effortless</h2>
          </div>
          <div className="hiw-steps">
            <div className="hiw-step">
              <div className="hiw-icon">🗺️</div>
              <h3>Tell us your dream</h3>
              <p>Share your interests, dates, and budget. We listen carefully before suggesting anything.</p>
            </div>
            <div className="hiw-arrow">→</div>
            <div className="hiw-step">
              <div className="hiw-icon">✏️</div>
              <h3>We craft your itinerary</h3>
              <p>A dedicated travel designer builds your trip end-to-end — flights, hotels, and hidden gems.</p>
            </div>
            <div className="hiw-arrow">→</div>
            <div className="hiw-step">
              <div className="hiw-icon">🧳</div>
              <h3>Pack and depart</h3>
              <p>Your trip folder arrives digitally. We're on call the moment you step out the door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────── */}
      <section className="packages">
        <div className="pkg-inner">
          <div className="section-header section-header--center">
            <p className="section-eyebrow">Curated collections</p>
            <h2>Dream Vacation Packages</h2>
          </div>
          <div className="pkg-grid">
            <div
              className="pkg-card pkg-card--img"
              style={{ backgroundImage: `url(${T5})` }}
            >
              <div className="pkg-img-overlay" />
              <div className="pkg-content">
                <span className="pkg-duration">7 – 14 nights</span>
                <h3>Beach Escape</h3>
                <p>Pristine shores, overwater villas, and sunsets that last all evening.</p>
                <a href="#" className="pkg-link">Browse packages →</a>
              </div>
            </div>

            <div
              className="pkg-card pkg-card--img pkg-card--featured"
              style={{ backgroundImage: `url(${T6})` }}
            >
              <div className="pkg-img-overlay" />
              <div className="pkg-badge">Most popular</div>
              <div className="pkg-content">
                <span className="pkg-duration">10 – 21 nights</span>
                <h3>Mountain Adventure</h3>
                <p>Guided treks, alpine huts, and landscapes that make you feel very small.</p>
                <a href="#" className="pkg-link">Browse packages →</a>
              </div>
            </div>

            <div
              className="pkg-card pkg-card--img"
              style={{ backgroundImage: `url(${T7})` }}
            >
              <div className="pkg-img-overlay" />
              <div className="pkg-content">
                <span className="pkg-duration">5 – 10 nights</span>
                <h3>City Explorer</h3>
                <p>Neighbourhood walks, local restaurants, and museum access without the queue.</p>
                <a href="#" className="pkg-link">Browse packages →</a>
              </div>
            </div>

            <div
              className="pkg-card pkg-card--img"
              style={{ backgroundImage: `url(${T8})` }}
            >
              <div className="pkg-img-overlay" />
              <div className="pkg-content">
                <span className="pkg-duration">14 – 30 nights</span>
                <h3>Scenic Rail Journey</h3>
                <p>Slow travel across continents — the journey is the destination.</p>
                <a href="#" className="pkg-link">Browse packages →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED TRIP BANNER ─────────────────────────── */}
      <section
        className="featured-trip"
        style={{ backgroundImage: `url(${T9})` }}
      >
        <div className="featured-overlay">
          <div className="featured-inner">
            <div className="featured-label">
              <span className="feat-dot" /> Editor's Pick
            </div>
            <h2>The Amalfi Coast<br /><em>Private Drive</em></h2>
            <p>
              Seven days along Italy's most dramatic coastline —
              a classic convertible, cliff-top dinners, and no itinerary
              you couldn't tear up.
            </p>
            <div className="featured-meta">
              <span>🗓 8 days · 7 nights</span>
              <span>👥 2 – 6 travellers</span>
              <span>✈️ Departing Naples</span>
            </div>
            <button className="btn-primary">View this trip</button>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────── */}
      <section className="why-us">
        <div className="why-inner">
          <div className="why-text">
            <p className="section-eyebrow">Our promise</p>
            <h2>Why Travellers Choose Us</h2>
            <p className="why-intro">
              We've been designing private journeys since 2009.
              Every trip is assigned a dedicated designer —
              not a booking engine.
            </p>
            <button className="btn-primary">Meet our team</button>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">🌎</span>
              <h3>60+ Countries</h3>
              <p>Ground-level knowledge from local guides and on-the-road researchers.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🏨</span>
              <h3>Vetted Properties</h3>
              <p>Every hotel is personally reviewed — we stay where we recommend.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">🧳</span>
              <h3>End-to-End Planning</h3>
              <p>Flights, transfers, dining reservations — every detail covered.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">📞</span>
              <h3>24/7 Support</h3>
              <p>A real human answers within minutes, wherever in the world you are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────── */}
      <section className="gallery">
        <div className="gallery-inner">
          <div className="section-header section-header--center">
            <p className="section-eyebrow">From the road</p>
            <h2>Travel Gallery</h2>
          </div>
          <div className="gallery-grid">
            <img src={T10}  alt="Travel moment 1" className="g-wide" />
            <img src={T11}  alt="Travel moment 2" />
            <img src={T12}  alt="Travel moment 3" />
            <img src={Bali} alt="Bali shores" />
            <img src={Paris} alt="Paris streets" />
          </div>
        </div>
      </section>

      {/* ── DESTINATION SPOTLIGHT ────────────────────────── */}
      <section className="spotlight">
        <div className="spotlight-inner">
          <div className="section-header section-header--center">
            <p className="section-eyebrow">Seasonal highlight</p>
            <h2>This Season in Switzerland</h2>
          </div>
          <div className="spotlight-grid">
            <div className="spotlight-main">
              <img src={Swiss2} alt="Swiss Alps panorama" />
              <div className="spotlight-caption">
                <h3>Winter in the Alps</h3>
                <p>First snowfall through to late March — book before October for the best chalets.</p>
              </div>
            </div>
            <div className="spotlight-side">
              <div className="spotlight-thumb">
                <img src={T3} alt="Alpine village" />
                <div className="spotlight-thumb-label">Zermatt village</div>
              </div>
              <div className="spotlight-thumb">
                <img src={T4} alt="Ski slopes" />
                <div className="spotlight-thumb-label">Verbier slopes</div>
              </div>
              <div className="spotlight-thumb">
                <img src={T2} alt="Alpine dinner" />
                <div className="spotlight-thumb-label">Fondue by firelight</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="testimonials">
        <div className="testi-inner">
          <div className="section-header section-header--center">
            <p className="section-eyebrow">Real travellers</p>
            <h2>Stories From the Road</h2>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>"Our honeymoon was everything we hoped and nothing we expected. Every surprise was a good one."</p>
              <div className="testi-author">
                <div className="testi-avatar">S</div>
                <div>
                  <strong>Sarah & Michael</strong>
                  <span>Bali Honeymoon, 2024</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>"I've used four travel agencies. None of them came close to the level of detail and care here."</p>
              <div className="testi-author">
                <div className="testi-avatar">J</div>
                <div>
                  <strong>James Okafor</strong>
                  <span>Swiss Alps Trek, 2024</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p>"We wanted something off the beaten path. They delivered an itinerary we'd never have found ourselves."</p>
              <div className="testi-author">
                <div className="testi-avatar">A</div>
                <div>
                  <strong>Anika & Rohan</strong>
                  <span>Japan Rail Journey, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <div className="nl-text">
            <p className="section-eyebrow section-eyebrow--light">Stay inspired</p>
            <h2>Destination Ideas,<br /><em>Straight to You</em></h2>
            <p>Early access to new itineraries, seasonal guides, and flight deals — no spam, ever.</p>
          </div>
          <div className="nl-form">
            <div className="nl-input-group">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <p className="nl-note">Join 18,000+ subscribers. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;