import { Link, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);
  const location = useLocation();

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

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <header className={`header ${isShrunk ? 'shrink' : ''}`}>
      <div className="logo">aurelienj.</div>
      <nav className="nav">
        <Link to="/" className={`link-style ${location.pathname === '/' ? 'link-style-active' : ''}`}>Home</Link>
        <Link to="/services" className={`link-style ${location.pathname === '/services' ? 'link-style-active' : ''}`}>Services</Link>
        <Link to="/contact" className={`link-style ${location.pathname === '/contact' ? 'link-style-active' : ''}`}>Contact</Link>
        
        <span>
          <button className={`lang-switch-btn ${currentLang === 'fr' ? 'active' : ''}`} onClick={() => changeLanguage('fr')}>FR</button>
          <button className={`lang-switch-btn ${currentLang === 'en' ? 'active' : ''}`} onClick={() => changeLanguage('en')}>EN</button>
        </span>
      </nav>
    </header>
  );
}

export default Header;
