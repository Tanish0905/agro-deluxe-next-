/* eslint-disable react/no-unescaped-entities */
"use client"
import { Target, Award, TrendingUp, Users } from 'lucide-react';
import './About.css';
// import Footer from '../../components/Footer/Footer';

export default function About() {
  return (
    <>
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
            {/* LEFT TEXT + RIGHT IMAGE */}
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
                  alt="Farm to kitchen"
                />
              </div>
            </div>

            {/* GREEN FEATURE BOX */}
            <div className="about-feature-box">
              <h2 className="about-feature-title">The Agro Deluxe Difference</h2>
              <p className="about-feature-subtitle">Why Chefs and Procurement Managers Trust Us</p>

              <div className="about-feature-grid">
                {/* CARD 1 */}
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

                {/* CARD 2 */}
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

                {/* CARD 3 */}
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

                {/* CARD 4 */}
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
}
