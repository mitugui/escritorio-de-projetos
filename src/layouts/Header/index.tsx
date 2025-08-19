import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { ice } from '../../assets/inovamar/info';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="burger-a">
        <FontAwesomeIcon icon={faBars} className="burger-icon" />
      </a>
      <h1 className="title">
        <img src={ice.logo} alt={ice.alt} />
        Inovamar
      </h1>
      <div className="placeholder"></div>
    </header>
  );
};

export default Header;
