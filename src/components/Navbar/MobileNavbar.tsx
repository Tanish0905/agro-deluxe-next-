'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  const isActive = (path: string) =>
    pathname === path ? 'active' : '';

  return (
    <div className="mobile-navbar">
      {/* HEADER ALWAYS VISIBLE */}
      <div className="mobile-header">
        <div
          className="mobile-logo-box"
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          <Image
            src="/AgdLogo.svg"
            width={50}
            height={50}
            alt="Agro Deluxe Growers Logo"
            priority
          />

          <h2 className="mobile-logo-text">
            AGRO DELUXE GROWERS
          </h2>
        </div>

        {/* HAMBURGER */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            width: '35px',
            height: '32px',
            padding: '6px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: '2px solid transparent',
            background:
              'linear-gradient(#fff,#fff) padding-box, linear-gradient(to right,#0B74B0,#75479C,#BD3861) border-box',
          }}
        >
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              style={{
                height: '3px',
                borderRadius: '4px',
                display: 'block',
                background:
                  'linear-gradient(to right,#0B74B0,#75479C,#BD3861)',
                transition: '0.3s',
                ...(open && i === 1
                  ? { transform: 'rotate(45deg) translate(5px, 5px)' }
                  : {}),
                ...(open && i === 2 ? { opacity: 0 } : {}),
                ...(open && i === 3
                  ? { transform: 'rotate(-45deg) translate(6px, -6px)' }
                  : {}),
              }}
            />
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {open && <div className="overlay" onClick={closeMenu} />}

      {/* DRAWER */}
      <div className={open ? 'drawer open' : 'drawer'}>
        <div className="drawer-menu">
          <Link href="/" className={isActive('/')} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={isActive('/about')} onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" className={isActive('/services')} onClick={closeMenu}>
            Services
          </Link>
          <Link href="/products" className={isActive('/products')} onClick={closeMenu}>
            Products
          </Link>
          <Link href="/contact" className={isActive('/contact')} onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
