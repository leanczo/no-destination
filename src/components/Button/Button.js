import "./Button.css";

const Button = ({onClick}) => {
  return <div className="button-container">
    <input className="button" type="button" value="Press me" onClick={onClick} />
    </div>;
};

export default Button;