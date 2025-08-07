import './Contact.css';
import IconLink from './IconLink';
import { contactLinks } from '../../../assets/inovamar/info';

const Contact = () => {
  return (
    <div className="contact">
      <p className="footer-title">Contato</p>
      {contactLinks.map((link, index) => (
        <IconLink
          key={index}
          icon={link.icon}
          linkText={link.linkText}
          link={link.link}
        />
      ))}
    </div>
  );
};

export default Contact;
