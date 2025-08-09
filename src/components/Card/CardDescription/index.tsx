import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './CardDescription.css';
import { useState } from 'react';
import LinksModal from '../../LinksModal';
import CardInscription from '../CardInscription';

type Props = {
  title: string;
  description?: string;
  source?: string;
  links?: { link: string; title?: string }[];
  inscription?: string;
};

const CardDescription = ({ title, description, source, links = [], inscription }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      {description && <p className="card-description">{description}</p>}
      <CardInscription inscription={inscription} />
      <div className="card-bottom">
        <div className="card-links">
          <button className="card-link" onClick={openModal}>
            <FontAwesomeIcon icon={faFile} />
            Ver documentos
          </button>
        </div>

        <LinksModal
          title={title}
          links={links}
          isOpen={modalIsOpen}
          closeModal={closeModal}
        />

        {source && (
          <>
            <div className="info-item">
                            {source === 'fundacao_araucaria' && (
                                <img
                                    src="https://www.seti.pr.gov.br/sites/default/arquivos_restritos/files/imagem/2023-09/logofa.jpg"
                                    alt="Logo Fundação Araucária"
                                    className="logo"
                                />
                            )}
                            {source === 'cnpq' && (
                                <img
                                    src="https://portais.univasf.edu.br/nupecc/menu-lateral/pesquisas/construcoes-historicas-petrolina-pe/agradecimentos/logo-cnpq-nupecc.jpg/@@images/image.jpeg"
                                    alt="Logo CNPq"
                                    className="logo"
                                />
                            )}
                        </div>
          </>
        )}
      </div>
    </>
  );
};

export default CardDescription;
