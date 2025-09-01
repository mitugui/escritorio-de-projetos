import { cnpq, fundacaoAraucaria, funbio } from '../../../assets/inovamar/info';

type LogoProps = {
  source: string;
};

const Logo = ({ source }: LogoProps) => {
  return (
    <div className="info-item">
      {source === 'fundacao_araucaria' && (
        <img
          src={fundacaoAraucaria.logo}
          alt={fundacaoAraucaria.alt}
          className="logo"
        />
      )}
      {source === 'cnpq' && (
        <img src={cnpq.logo} alt={cnpq.alt} className="logo" />
      )}
      {source === 'funbio' && (
        <img src={funbio.logo} alt={funbio.alt} className="logo" />        
      )}
    </div>
  );
};

export default Logo;
