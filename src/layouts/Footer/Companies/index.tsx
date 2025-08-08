import './Companies.css';
import { companies } from '../../../assets/inovamar/info';

const Companies = () => {
  return (
    <div className="companies-container">
      {companies.map((company, index) => {
        return (
          <img
            key={index}
            src={company.logo}
            alt={company.alt}
            className="company"
            draggable="false"
          />
        );
      })}
    </div>
  );
};

export default Companies;
