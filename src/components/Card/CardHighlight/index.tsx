import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import './CardHighlight.css'

type CardHighlightProps = {
    inscription?: string
}

const CardHighlight = ({inscription}: CardHighlightProps) => {
    return (
        <div className='card-aside'>
            {
                inscription ? (
                    <div className="aside-info-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <div>
                            <span>Inscrição</span>
                            {inscription}
                        </div>
                    </div>
                ) : (
                    <div className="aside-info-item">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Data de inscrição não informada</span>
                    </div>
                )
            }
        </div>
    )
}

export default CardHighlight