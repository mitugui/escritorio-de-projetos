import './Card.css'
import CardHeader from './CardHeader'
import CardDescription from './CardDescription'
import CardHighlight from './CardHighlight';
// import { useState } from 'react';

type Link = {
  link: string;
  title?: string;
};

type Chamada = {
  title?: string;
  description?: string;
  inscription?: string;
  initial_funding?: string;
  source?: string;
  links?: Link[];
};

type Props = {
  chamada: Chamada;
};

// const [linksModal, setLinksModal] = useState<boolean>(false);

// const toggleLinksModal = () => {
//   setLinksModal(!linksModal);
// }

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
        />
      </div>
      <CardHighlight 
        inscription={chamada.inscription}
      />
    </div>
  );
};

export default ChamadaCard;