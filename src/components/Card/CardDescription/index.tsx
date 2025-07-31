import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import './CardDescription.css';

type Props = {
  description?: string;
  source?: string;
};

const CardDescription = ({ description, source }: Props) => {
  return (
    <>
      {description && <p className="card-description">{description}</p>}
      <div className="card-bottom">
        <div className="card-links">
          <a href="#" className="card-link">
            <FontAwesomeIcon icon={faFile} />
            Ver documentos
          </a>
        </div>
        {source && (
          <>
            {/* <div className="info-item">
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
                        </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default CardDescription;
