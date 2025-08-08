import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconLinkProps = {
  icon: IconProp;
  linkText: string;
  link: string;
};

const IconLink = ({ icon, linkText, link }: IconLinkProps) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FontAwesomeIcon icon={icon} />
        <span>{linkText}</span>
      </a>
    </>
  );
};

export default IconLink;
