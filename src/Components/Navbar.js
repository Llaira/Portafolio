import './Navbar.css';
import logo from '../Images/Logo.png'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="navbar">
          <nav>
             <img src={logo} className="navbar-logo" alt="Llairis" />
                <ul className="navbar-content">
                   <li><a href="#aboutme" className="navbar-sections">Sobre mí</a></li>
                   <li><a href="#projects" className="navbar-sections">Proyectos</a></li>
                   <li><a href="#skills" className="navbar-sections">Habilidades</a></li>
                   <li><a href="#contact" className="navbar-sections">Contacto</a></li>
                </ul>
          </nav>
      </header>
    </div>
  );
}
export default Navbar;