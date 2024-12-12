import upArrow from "../../img/icons/up_arrow.svg";
import downArrow from "../../img/icons/down_arrow.svg";

import "./style.css";

const Sum = ({ data }) => {
  const divStyle = { backgroundColor: '#898290' }
  if (data > 0) {
    divStyle.backgroundColor = '#00CC99';
  }
  if (data < 0) {
    divStyle.backgroundColor = '#FC440F'
  }

  return (
    <div className="WhiteBorder">
      <div className="Sum" style={divStyle}>
        {(data !== 0) ? <img src={(data > 0) ? upArrow : downArrow} alt="arrow" /> : ""}
        <p>{data <= 0 ? data : `+${data}`}</p>
      </div>
    </div>

  );
}

export default Sum;
