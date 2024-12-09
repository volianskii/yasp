const ColumnElement = ({ color, value, isTopRadius, isBottomRadius }) => {
  let borderRadius = '0px 0px 0px 0px';
  const height = `${value}px`;
  if (isTopRadius || isBottomRadius) {
    borderRadius = isTopRadius ? '10px 10px 0px 0px' : '0px 0px 10px 10px';
  }
  const divStyle = { backgroundColor: color, borderRadius: borderRadius, height: height }
  return (
    <div className="Column-element" style={divStyle}>
      <p>{value}</p>
    </div>
  );
}

export default ColumnElement;
