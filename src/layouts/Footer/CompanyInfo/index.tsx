import SocialIconLink from '../SocialIconLink';
import './CompanyInfo.css';
import logo from '../../../assets/inovamar/logo.png';
import {
  socialIconLinks,
  companyName,
  companyAbout,
} from '../../../assets/inovamar/info';
import Contact from '../Contact';

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div>
        <div className="company-info-header">
          <img src={logo} alt={'Logo ' + companyName} className="footer-logo" />
          <div className="social-media">
            {socialIconLinks.map((link, index) => (
              <SocialIconLink key={index} icon={link.icon} href={link.link} />
            ))}
          </div>
        </div>
        <div className="company-details">
          <p className="footer-title">{companyName}</p>
          <p className="company-details-about">{companyAbout}</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default CompanyInfo;
