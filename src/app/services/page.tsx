"use client";
import { useRouter } from "next/navigation";
import { Globe, Shield, Truck, CheckCircle2, Leaf, Apple, Carrot } from 'lucide-react';
import './Services.css';

const Services: React.FC = () => {
  const router = useRouter();

  return (
    <main className="service-wrapper">
      {/* HERO */}
      <header className="service-hero-section">
        <h1 className="service-hero-title">
          Your End-to-End{' '}
          <span
            style={{
              background: 'linear-gradient(to right, rgb(245, 158, 11), rgb(249, 115, 22), rgb(239, 68, 68)) text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Exotic Produce
          </span>{' '}
          Solution
        </h1>
        <p className="service-hero-sub">
          We provide a{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            full-service
          </span>{' '}
          ,{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            B2B procurement
          </span>{' '}
          partnership tailored specifically for the high-demand needs of{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            hotel kitchens
          </span>
          .
        </p>
      </header>

      {/* SERVICES */}
      <section>
        <div className="service-container">
          <div className="service-card-grid">
            {/* CARD 1 */}
            <article className="service-card">
              <div className="service-card-icon-box" aria-label="Exotic Produce Icon">
                <Globe />
              </div>
              <h2 className="service-card-title">1. B2B Sourcing of Exotic & Imported Produce</h2>
              <p className="service-card-text">
                We specialize in curated premium produce for fine dining.
              </p>

              <div className="service-card-feature">
                <Carrot />
                <div>
                  <p className="service-card-feature-title">Exotic Vegetables</p>
                  <p className="service-card-feature-text">
                    Microgreens, asparagus, avocados, rare fungi.
                  </p>
                </div>
              </div>

              <div className="service-card-feature">
                <Apple />
                <div>
                  <p className="service-card-feature-title">Imported Fruits</p>
                  <p className="service-card-feature-text">
                    Premium berries, tropical citrus, stone fruits.
                  </p>
                </div>
              </div>

              <div className="service-card-feature">
                <Leaf />
                <div>
                  <p className="service-card-feature-title">Specialty & Seasonal Items</p>
                  <p className="service-card-feature-text">Rare items sourced proactively.</p>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="service-card">
              <div className="service-card-icon-box" aria-label="Supply Chain Icon">
                <Shield />
              </div>
              <h2 className="service-card-title">2. Assured Supply Chain Management</h2>
              <p className="service-card-text">We manage your supply end-to-end.</p>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Custom Procurement Plans</p>
                  <p className="service-card-feature-text">
                    Forecasting based on your kitchen volume.
                  </p>
                </div>
              </div>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Reliable Supply Support</p>
                  <p className="service-card-feature-text">
                    We secure stock even during shortages.
                  </p>
                </div>
              </div>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Quality Control</p>
                  <p className="service-card-feature-text">
                    All items meet A-grade culinary standards.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="service-card">
              <div className="service-card-icon-box" aria-label="Delivery Icon">
                <Truck />
              </div>
              <h2 className="service-card-title">3. Farm-to-Kitchen Logistics & Delivery</h2>
              <p className="service-card-text">The final critical stage of delivery.</p>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Direct Sourcing</p>
                  <p className="service-card-feature-text">Fresh from the farm gate.</p>
                </div>
              </div>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Temperature-Controlled Fleet</p>
                  <p className="service-card-feature-text">Cold-chain maintained.</p>
                </div>
              </div>

              <div className="service-card-feature">
                <CheckCircle2 />
                <div>
                  <p className="service-card-feature-title">Scheduled Deliveries</p>
                  <p className="service-card-feature-text">Daily, weekly or custom schedules.</p>
                </div>
              </div>
            </article>
          </div>

          {/* HOW IT WORKS */}
          <div className="service-how-section">
            <h2 className="service-how-title">How It Works</h2>

            <div className="service-how-grid">
              <div className="service-how-item">
                <div className="service-how-number">1</div>
                <h3 className="service-how-step-title">Consult & Plan</h3>
                <p className="service-how-step-text">We review your menu needs.</p>
              </div>

              <div className="service-how-item">
                <div className="service-how-number">2</div>
                <h3 className="service-how-step-title">Source & Secure</h3>
                <p className="service-how-step-text">We secure items from premium farms.</p>
              </div>

              <div className="service-how-item">
                <div className="service-how-number">3</div>
                <h3 className="service-how-step-title">Deliver & Delight</h3>
                <p className="service-how-step-text">Fresh and on-time deliveries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Ready to Secure Your Supply Chain?</h2>
        <p className="home-cta-desc">
          Focus on crafting exceptional culinary experiences — we’ll handle your sourcing.
        </p>
        <button
          className="home-cta-btn"
          onClick={() => router.push('/contact')}
          aria-label="Partner With Us Now"
        >
          Partner With Us Now
        </button>
      </section>
    </main>
  );
};

export default Services;
