import SocialIconLink from '../SocialIconLink';
import './CompanyInfo.css';
import logo from '../../../assets/inovamar/logo.png';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { companyAbout, socialLinks } from '../../../assets/inovamar/info';
import Contact from '../Contact';

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div>
        <div className="company-info-header">
          <img src={logo} alt="Logo Inovamar" className="footer-logo" />
          <div className="social-media">
            <SocialIconLink href={socialLinks.facebook} icon={faFacebook} />
            <SocialIconLink href={socialLinks.instagram} icon={faInstagram} />
            <SocialIconLink href={socialLinks.linkedin} icon={faLinkedin} />
          </div>
        </div>
        <div className="company-details">
          <p className="footer-title">Inovamar - Escritório de Projetos</p>
          <p className="company-details-about">{companyAbout}</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default CompanyInfo;
