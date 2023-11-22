import '../App.css'
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between px-5" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>
          <img src="/images/Vector.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          Harcode Games
        </Link>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav ml-auto text-light">
            <li className="nav-item">
              <NavLink to={'/category/Perifericos'} className="nav-link" activeClassName="ActiveOption">
                Perifericos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Pantallas'} className="nav-link" activeClassName="ActiveOption">
                Pantallas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Gabinetes'} className="nav-link" activeClassName="ActiveOption">
                Gabinetes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Accesorios'} className="nav-link" activeClassName="ActiveOption">
                Accesorios
              </NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
