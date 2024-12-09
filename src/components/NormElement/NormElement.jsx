const NormElement = ({ value }) => {
  const height = `${value}px`;
  const divStyle = { height: height }
  return (
    <div>
      <div className='Column-element norm' style={divStyle}>
        <div className="value-background">
          <p>{value}</p>
        </div>
      </div>
      <p>норматив</p>
    </div>
  );
}

export default NormElement;