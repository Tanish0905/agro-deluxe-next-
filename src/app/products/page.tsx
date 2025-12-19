/* eslint-disable react/no-unescaped-entities */
"use client"
import { Apple, Carrot, Leaf, Grape } from 'lucide-react';
import './Products.css';
import { useRouter } from "next/navigation";

const Products: React.FC = () => {
  const router = useRouter();
  const categories = [
    {
      icon: Apple,
      title: 'Imported Fruits',
      items: ['Premium Berries', 'Tropical Specialties', 'Exotic Citrus', 'Stone Fruits'],
      image:
        'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Carrot,
      title: 'Exotic Vegetables',
      items: ['Microgreens', 'Heirloom Tomatoes', 'Asparagus', 'Avocados'],
      image:
        'https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Leaf,
      title: 'Specialty Greens',
      items: ['Baby Spinach', 'Arugula', 'Kale Varieties', 'Exotic Herbs'],
      image:
        'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Grape,
      title: 'Seasonal Specialties',
      items: ['Rare Fungi', 'Seasonal Produce', 'Limited Editions', 'Chef Specials'],
      image:
        'https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <main className="products-wrapper">
      {/* HERO */}
      <header className="products-hero">
        <div className="products-hero-content">
          <h1 className="products-title">
            <span
              style={{
                background:
                  'linear-gradient(to right, rgb(245, 158, 11), rgb(249, 115, 22), rgb(239, 68, 68)) text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Premium Exotic
            </span>{' '}
            Produce
          </h1>
          <p className="products-subtitle">
            Discover our curated selection of the
            <span
              style={{
                background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              {' '} finest {' '}
            </span>
            <span
              style={{
                background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              imported {' '}
            </span>
            and{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            > exotic </span> fruits and vegetables, sourced directly from <span
            style={{
              background: 'linear-gradient(to right, #0B74B0, #75479C, #BD3861)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          > premium </span> farms worldwide.
          </p>
        </div>
      </header>

      {/* PRODUCTS GRID */}
      <section className="products-section" aria-label="Our Products">
        <div className="products-container">
          <div className="products-grid">
            {categories.map((category, index) => (
              <article key={index} className="products-card">
                <div className="products-card-image">
                  <img src={category.image} alt={category.title} />
                  <div className="products-card-overlay"></div>

                  <div className="products-card-titlebox">
                    <div className="products-card-icon" aria-label={`${category.title} icon`}>
                      <category.icon />
                    </div>
                    <h3>{category.title}</h3>
                  </div>
                </div>

                <div className="products-card-content">
                  <ul>
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <div className="products-bullet"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="products-cta">
            <h2>Looking for Something Specific?</h2>
            <p>
              Our product range extends far beyond what's listed here. If you need a specific
              exotic ingredient, we'll source it for you.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="products-cta-btn"
              aria-label="Request Custom Quote"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
