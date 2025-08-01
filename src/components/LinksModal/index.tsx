import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './LinksModal.css';

type Link = {
  link: string;
  title?: string;
};

type LinksModalProps = {
  title: string;
  links: Link[];
  isOpen: boolean;
  closeModal: () => void;
};

const LinksModal = ({ title, links, isOpen, closeModal }: LinksModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Links Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="links-header">
        <h3 className="links-header-title">{title}</h3>
        <button onClick={closeModal} className="close-button">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      <div className="links">
        {links.map((link) => (
          <a
            href={link.link}
            className="link-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.title || link.link}
          </a>
        ))}
      </div>
    </Modal>
  );
};

export default LinksModal;
