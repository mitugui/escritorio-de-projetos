import './CardInscription.css';

type CardInscriptionProps = {
  inscription?: string;
};

const CardInscription = ({ inscription }: CardInscriptionProps) => {
  return (
    <div className="card-inscription">
      {inscription ? (
        <div className="inscription-info-item">
            <p className='inscription-title'>{"INSCRIÇÃO".toUpperCase()}</p>
            <p className='inscription-value'>{inscription}</p>
        </div>
      ) : (
        <div className="inscription-info-item">
          <p className='inscription-value'>Data de inscrição não informada</p>
        </div>
      )}
    </div>
  );
};

export default CardInscription;
