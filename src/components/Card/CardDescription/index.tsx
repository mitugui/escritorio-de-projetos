import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './CardDescription.css';
import { useState } from 'react';
import LinksModal from '../../LinksModal';
import CardInscription from '../CardInscription';
import Logo from '../Logo';

type Props = {
  title: string;
  description?: string;
  source?: string;
  links?: { link: string; title?: string }[];
  inscription?: string;
};

const CardDescription = ({
  title,
  description,
  source,
  links = [],
  inscription,
}: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <div className="card-mobile-layout">
        {description && <p className="card-description">{description}</p>}
        <CardInscription inscription={inscription} />
        <div className="card-bottom">
          {source && <Logo source={source} />}
          <div className="card-links">
            <button className="card-link" onClick={openModal}>
              <FontAwesomeIcon icon={faFile} />
              Documentos
            </button>
          </div>
        </div>
      </div>

      <div className="card-desktop-layout">
        <div className="card-description-container">
          {description && <p className="card-description">{description}</p>}
        </div>
        <div className="card-info-container">
          {source && <Logo source={source} />}
          <CardInscription inscription={inscription} />
          <div className="card-links">
            <button className="card-link" onClick={openModal}>
              <FontAwesomeIcon icon={faFile} />
              Documentos
            </button>
          </div>
        </div>
      </div>

      <LinksModal
        title={title}
        links={links}
        isOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default CardDescription;
