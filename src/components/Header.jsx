import { Link } from 'react-router-dom';  // 🆕 Import de Link

function Header() {
  return (
    <header className="header">
      <div className="logo">AurelienJ</div>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
