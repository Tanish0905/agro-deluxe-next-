/* eslint-disable react/no-unescaped-entities */
"use client";

import { Target, Award, TrendingUp, Users } from 'lucide-react';
import './About.css';
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Head>
        <title>About Agro Deluxe Growers | HORECA Produce Supplier in Mumbai & Navi Mumbai</title>
        <meta
          name="description"
          content="Learn about Agro Deluxe Growers, a Mumbai and Navi Mumbai based B2B supplier of exotic and imported produce trusted by hotels, restaurants, and catering businesses."
        />
        <link rel="canonical" href="https://www.agrodeluxegrowers.com/about" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="About Agro Deluxe Growers | Trusted HORECA Produce Partner" />
        <meta
          property="og:description"
          content="Agro Deluxe Growers is a reliable B2B supplier of premium produce for hotels and restaurants across Mumbai and Navi Mumbai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agrodeluxegrowers.com/about" />
        <meta
          property="og:image"
          content="https://www.agrodeluxegrowers.com/LaunchPageImages/Avocado.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Agro Deluxe Growers | HORECA Produce Supplier" />
        <meta
          name="twitter:description"
          content="Mumbai & Navi Mumbai based supplier of exotic and imported produce for hotels and restaurants."
        />
        <meta
          name="twitter:image"
          content="https://www.agrodeluxegrowers.com/LaunchPageImages/Avocado.webp"
        />
      </Head>

      {/* ================= STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Agro Deluxe Growers",
            "url": "https://www.agrodeluxegrowers.com/about",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Agro Deluxe Growers",
              "description":
                "Mumbai and Navi Mumbai based B2B supplier of exotic and imported fruits and vegetables for hotels, restaurants, and catering businesses.",
              "areaServed": [
                { "@type": "City", "name": "Mumbai" },
                { "@type": "City", "name": "Navi Mumbai" }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/agrodeluxegrowers"
              ]
            }
          }),
        }}
      />

      <div className="about-wrapper">
        {/* HERO SECTION */}
        <section className="about-hero-section">
          <div className="about-container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                We Are Your Kitchen's Most
                <span
                  style={{
                    background:
                      'linear-gradient(to right, rgb(245, 158, 11), rgb(249, 115, 22), rgb(239, 68, 68)) text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                  }}
                >
                  {' '}
                  Reliable{' '}
                </span>{' '}
                Partner
              </h1>
              <p className="about-hero-subtitle">
                Since 2025, Agro Deluxe Growers has been dedicated to solving the most significant
                challenge for the hospitality industry:
                <span
                  style={{
                    background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                  }}
                >
                  {' '}
                  reliable{' '}
                </span>
                and
                <span
                  style={{
                    background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700,
                    marginLeft: 4,
                    marginRight: 4,
                  }}
                >
                  {' '}
                  consitstent{' '}
                </span>
                access to premium produce.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN SECTION */}
        <section className="about-main-section">
          <div className="about-container">
            <div className="about-grid">
              <div className="about-text-block">
                <h2 className="about-heading">From Farm Gate to Hotel Plate</h2>

                <div className="about-text-group">
                  <p>
                    Agro Deluxe Growers was founded with a clear mission: to build an unbreakable
                    supply chain for hotels that demand the best. We saw a gap between the farm and
                    the kitchen—a gap filled with delays, excuses, and compromised quality.
                  </p>

                  <p className="about-highlight-text">We decided to be the bridge.</p>

                  <p>
                    We are a team of procurement specialists, logistics experts, and
                    produce-passionate individuals. We don’t just sell fruits and vegetables; we
                    sell reliability. For a chef, an unavailable ingredient means a compromised
                    dish. Our business is built to prevent that.
                  </p>
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div className="about-image-wrapper">
                <div className="about-image-bg"></div>
                <img
                  src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800"
                  className="about-image"
                  alt="Farm to kitchen produce supply chain for hotels and restaurants in Mumbai"
                />
              </div>
            </div>

            {/* FEATURE BOX */}
            <div className="about-feature-box">
              <h2 className="about-feature-title">The Agro Deluxe Difference</h2>
              <p className="about-feature-subtitle">Why Chefs and Procurement Managers Trust Us</p>

              <div className="about-feature-grid">
                <div className="about-card">
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <Target className="about-icon" />
                    </div>
                    <div>
                      <h3 className="about-card-title">We Are Short-Supply Experts</h3>
                      <p className="about-card-text">
                        The market is volatile, but your menu can't be. We source hard-to-find
                        items. When others say "impossible," we say "on it."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <Award className="about-icon" />
                    </div>
                    <div>
                      <h3 className="about-card-title">The 'Never Unserviceable' Promise</h3>
                      <p className="about-card-text">
                        If it’s available in the market, we will deliver it. Your menu will never go
                        unserviceable due to sourcing issues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <TrendingUp className="about-icon" />
                    </div>
                    <div>
                      <h3 className="about-card-title">Transparent & Competitive Rates</h3>
                      <p className="about-card-text">
                        No hidden fees. Fair pricing. Reliability you can count on.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="about-card">
                  <div className="about-card-header">
                    <div className="about-card-icon">
                      <Users className="about-icon" />
                    </div>
                    <div>
                      <h3 className="about-card-title">Direct Doorstep Delivery</h3>
                      <p className="about-card-text">
                        You order, we deliver — on time, every time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
