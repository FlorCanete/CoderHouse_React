import '../App.css'
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

let navoption = ({ isActive }) => isActive ? 'ActiveOption' : 'Option';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between px-5" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to='/' className='navbar-brand'>
          <img src="../src/images/logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
          Harcode Games
        </Link>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav ml-auto text-light">
            <li className="nav-item">
              <NavLink to={'/category/Perifericos'} className="${navoption} nav-link">
                Perifericos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Pantallas'} className="${navoption} nav-link">
                Pantallas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Gabinetes'} className="${navoption} nav-link">
                Gabinetes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to={'/category/Accesorios'} className="${navoption} nav-link">
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
