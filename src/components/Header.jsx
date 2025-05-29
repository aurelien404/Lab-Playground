import { Link } from 'react-router-dom';  // 🆕 Import de Link
import  { useState, useEffect } from 'react';



function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isShrunk ? 'shrink' : ''}`}>
      <div className="logo">aurelienj.</div>
      <nav className="nav">
        <Link to="/">Work</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
