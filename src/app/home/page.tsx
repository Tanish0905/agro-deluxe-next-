'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './home.css';
// import Footer from '@/components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Sprout, Truck, IndianRupee } from 'lucide-react';

const Home: React.FC = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const imageList = [
    '/LaunchPageImages/Avocado.jpeg',
    '/LaunchPageImages/Berries.jpeg',
    '/LaunchPageImages/Chilly.jpeg',
    '/LaunchPageImages/Dragon.jpeg',
    '/LaunchPageImages/Mushroom.jpeg',
    '/LaunchPageImages/Orange.jpeg',
    '/LaunchPageImages/Something.jpeg',
    '/LaunchPageImages/Something2.jpeg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((p) => (p + 1) % imageList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, imageList.length]);

  const direction = index > prevIndex ? 'forward' : 'backward';

  return (
    <>
      <div className="home-container">
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="home-text-box"
        >
          <h1 className="home-heading">
            BUILT FOR{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f59e0b, #f97316, #ef4444)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              HORECA
            </span>
          </h1>

          <p className="home-desc">
            At Agro Deluxe Growers, we redefine how the HORECA industry sources exotic and imported
            produce. By procuring directly from farms and global importers, we eliminate middlemen
            and serve superior freshness, consistency, and value. Our specialised B2B model is
            designed to support restaurants, hotels, and culinary facilities with reliable
            availability, competitive pricing, and on time / precision doorstep delivery.
          </p>
        </motion.div>

        {/* IMAGE SECTION */}
        <div>
          <div className="home-tilted-card" />

          <AnimatePresence>
            <motion.div
              key={index}
              className="home-image-card"
              initial={
                direction === 'forward'
                  ? { rotateY: 90, rotateX: 15, opacity: 0 }
                  : { rotateY: -90, rotateX: -15, opacity: 0 }
              }
              animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
              exit={
                direction === 'forward'
                  ? { rotateY: -90, rotateX: -15, opacity: 0 }
                  : { rotateY: 90, rotateX: 15, opacity: 0 }
              }
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src={imageList[index]}
                alt="toss-card"
                className="home-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '24px',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* GUARANTEE SECTION */}
      <section className="home-guarantee-section">
        <div className="home-guarantee-container">
          <div className="home-guarantee-header">
            <h2 className="home-guarantee-title">
              The Agro Deluxe Guarantee: Never Compromise Your Menu
            </h2>
            <p className="home-guarantee-sub">
              As a premium culinary facility, your reputation rests on every plate.
            </p>
          </div>

          <div className="home-guarantee-grid">
            <div className="home-guarantee-card">
              <div className="home-guarantee-icon-wrap">
                <ShieldCheck />
              </div>
              <h3>Assured Supply, Always</h3>
              <p>If it’s available, it will be in your kitchen.</p>
            </div>

            <div className="home-guarantee-card">
              <div className="home-guarantee-icon-wrap">
                <Sprout />
              </div>
              <h3>Farm-to-Kitchen Freshness</h3>
              <p>Direct-from-farm sourcing ensures freshness.</p>
            </div>

            <div className="home-guarantee-card">
              <div className="home-guarantee-icon-wrap">
                <Truck />
              </div>
              <h3>Reliable Doorstep Delivery</h3>
              <p>Temperature-controlled, on-time logistics.</p>
            </div>

            <div className="home-guarantee-card">
              <div className="home-guarantee-icon-wrap">
                <IndianRupee />
              </div>
              <h3>Competitive B2B Rates</h3>
              <p>Premium quality at stable pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta-section">
        <h2 className="home-cta-title">Ready to Secure Your Supply Chain?</h2>
        <p className="home-cta-desc">
          Focus on crafting exceptional culinary experiences — we’ll handle your sourcing.
        </p>
        <button className="home-cta-btn" onClick={() => router.push('/contact')}>
          Partner With Us Now
        </button>
      </section>

    </>
  );
};

export default Home;
