import SocialIconLink from '../SocialIconLink';
import './CompanyInfo.css';
import logo from '../../../assets/inovamar/logo.png';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { companyAbout, socialLinks } from '../../../assets/inovamar/info';

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="company-info-header">
        <img src={logo} alt="Logo Inovamar" className="footer-logo" />
        <div className="social-media">
          <SocialIconLink href={socialLinks.facebook} icon={faFacebook} />
          <SocialIconLink href={socialLinks.instagram} icon={faInstagram} />
          <SocialIconLink href={socialLinks.linkedin} icon={faLinkedin} />
        </div>
      </div>
      <div className="company-details">
        <p className="company-details-title">
          Inovamar - Escritório de Projetos
        </p>
        <p className="company-details-about">{companyAbout}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
