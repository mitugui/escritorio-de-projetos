import Companies from './Companies';
import CompanyInfo from './CompanyInfo';
import './Footer.css';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="footer">
      <Companies />
      <CompanyInfo />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
