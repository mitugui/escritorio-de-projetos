import './SectionTitle.css';
import logo from '../../assets/inovamar/logo.png';
import raw_logo from '../../assets/inovamar/raw_logo.png';
import { companyName } from '../../assets/inovamar/info';

interface SectionTitleProps {
  line1: string;
  span: string;
  line2: string;
}

const SectionTitle = ({ line1, span, line2 }: SectionTitleProps) => {
  return (
    <div className="section-title">
      <img
        src={raw_logo}
        alt={'Logo' + companyName}
        className="title-logo title-logo-no-mobile"
      />
      <h2 className="title-text">
        <span className="home-title-1">{line1}</span>
        <br className="br-mobile" />
        <span className="home-title-span"> {span} </span>
        <span className="home-title-2">{line2}</span>
      </h2>
      <img
        src={logo}
        alt={companyName}
        className="title-logo title-logo-mobile"
      />
    </div>
  );
};

export default SectionTitle;
