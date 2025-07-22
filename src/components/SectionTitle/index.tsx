import './sectionTitle.css'

interface SectionTitleProps {
    line1: string;
    span: string;
    line2: string;
}

const SectionTitle = ({ line1, span, line2 }: SectionTitleProps) => {
    return (
        <div>
            <h2 className="home-title-1">
                {line1} <span className="home-title-span">{span}</span>
            </h2>
            <h2 className='home-title-2'>{line2}</h2>
        </div>
    )
}

export default SectionTitle