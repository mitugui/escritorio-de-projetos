import './Card.css';
import CardHeader from './CardHeader';
import CardDescription from './CardDescription';

type Link = {
  link: string;
  title?: string;
};

type Chamada = {
  title: string;
  description?: string;
  inscription?: string;
  initial_funding?: string;
  source?: string;
  links?: Link[];
};

type Props = {
  chamada: Chamada;
};

const ChamadaCard = ({ chamada }: Props) => {
  return (
    <div className="card">
      <div className="card-main-content">
        <CardHeader
          source={chamada.source}
          title={chamada.title}
          initial_funding={chamada.initial_funding}
        />
        <CardDescription
          description={chamada.description}
          source={chamada.source}
          title={chamada.title}
          links={chamada.links}
          inscription={chamada.inscription}
        />
      </div>
    </div>
  );
};

export default ChamadaCard;
