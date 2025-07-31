import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="burger-a">
        <FontAwesomeIcon icon={faBars} className="burger-icon" />
      </a>
      <h1 className="title">Inovamar</h1>
    </header>
  );
};

export default Header;
