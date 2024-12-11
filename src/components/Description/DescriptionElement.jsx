import "./style.css";

const DescriptionElement = ({ color, text }) => {
  const divStyle = { backgroundColor: color }

  return (
    <div className="Description">
      <div className="Brick" style={divStyle}>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default DescriptionElement;
