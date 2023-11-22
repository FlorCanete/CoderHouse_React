import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark d-flex justify-content-between px-5" data-bs-theme="dark">
        <Link to='/'>
          <img src="/images/Vector.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
          Harcode Games
        </Link>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item Categories">
              <Navlink to={'/category/Perifericos'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}/>
            </li>

            <li className="nav-item">
              <Navlink to={'/category/Pantallas'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}/>
            </li>

            <li className="nav-item">
              <Navlink to={'/category/Gabinetes'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}/>
            </li>

            <li className="nav-item">
              <Navlink to={'/category/Accesorios'} className={({isActive}) => isActive ? 'ActiveOption' :'Option'}/>
            </li>
          </ul>
          <CartWidget />
        </div>
    </nav>
  );
};


export default NavBar;
