import './CardHeader.css';

type Props = {
  source?: string;
  title?: string;
  initial_funding?: string;
};

const CardHeader = ({ title, initial_funding }: Props) => {
  return (
    <div className="card-header">
      {initial_funding && <span className="badge">{initial_funding}</span>}
      <div>{title && <h3 className="card-title">{title}</h3>}</div>
    </div>
  );
};

export default CardHeader;
