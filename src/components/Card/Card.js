import "./Card.css";

const Card = ({text, hasToDestroy}) => {
    if (!hasToDestroy) return null;

    return (
        <div className="card">
            <p className="card_text" >{text}</p>
        </div>
    )
}
export default Card;