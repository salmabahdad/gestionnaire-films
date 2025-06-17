import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon"></div>
          <span className="logo-text">CinéLux</span>
        </Link>
        
        {/* Navigation */}
        <ul className="nav-links">
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              to="/recherche" 
              className={location.pathname === '/recherche' ? 'nav-link active' : 'nav-link'}
            >
              Recherche
            </Link>
          </li>
          <li>
            <Link 
              to="/ajouter" 
              className={location.pathname === '/ajouter' ? 'nav-link active' : 'nav-link'}
            >
              Ajouter
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}