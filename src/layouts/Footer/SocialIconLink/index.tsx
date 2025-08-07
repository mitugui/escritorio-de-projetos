import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import './SocialIconLink.css';

type SocialIconLinkProps = {
  icon: IconProp;
  href: string;
};

const SocialIconLink = ({ href, icon }: SocialIconLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-anchor"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIconLink;
