
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMugHot, faSearch } from '@fortawesome/free-solid-svg-icons';
import {  NavLink } from 'react-router-dom';

function Header() {
  function handleClick (){
    const $bar = document.querySelector(".navbar")
    $bar.classList.toggle("open")
    $bar.classList.toggle("closed", $bar.classList.contains("open"))
    
  }
  return (
    <header className="header">
         <div>
            <button onClick={handleClick} id="menu-btn">
                <FontAwesomeIcon icon={faBars} />
            </button>

            <a href="#" className="logo">
                <FontAwesomeIcon icon={faMugHot} /> TuCafé
            </a>
        </div>
      <nav className="navbar">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/lugares">Lugares</NavLink>
        <NavLink to="/acerca">Nosotros</NavLink>
        <NavLink to="/opiniones">Reseñas</NavLink>
        <NavLink to="/reserva">Reservas</NavLink> 
      </nav>

      <div className="search-bar">
        <input type="text" id="search-input" placeholder="Buscar Lugar..." />
        <button id="search-btn">
          <FontAwesomeIcon icon={faSearch} /> 
        </button>
      </div>
      

      <li>
  <NavLink to="/login" className="btn-header">
    Acceder
  </NavLink>
  <NavLink to="/signup" className="btn-header">
    Registrar
  </NavLink>
</li>

    </header>
  );
}

export default Header;
