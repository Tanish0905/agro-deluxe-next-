'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) =>
    pathname === path ? 'active' : '';

  return (
    <div className="site-navbar">
      <div className="navbar-inner">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Image
            src="/AgdLogo.svg"
            width={70}
            height={70}
            alt="Agro Deluxe Growers Logo"
            priority
          />

          <div className="header-name">
            <span className="word">
              <span className="big-letter">A</span>gro
            </span>
            <span className="word">
              <span className="big-letter">D</span>eluxe
            </span>
            <span className="word">
              <span className="big-letter">G</span>rowers
            </span>
          </div>
        </div>

        <nav className="nav-menu">
          <Link href="/" className={isActive('/')}>Home</Link>
          <Link href="/about" className={isActive('/about')}>About</Link>
          <Link href="/services" className={isActive('/services')}>Services</Link>
          <Link href="/products" className={isActive('/products')}>Products</Link>
          <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
