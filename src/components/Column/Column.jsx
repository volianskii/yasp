import ColumnElement from "../ColumnElement";

const Column = ({ name }) => {
  return (
    <div className="Column">
      <ColumnElement color='#4AB6E8' value="55" isTopRadius={true} isBottomRadius={false} />
      <ColumnElement color='#AA6FAC' value="69" isTopRadius={false} isBottomRadius={false} />
      <ColumnElement color='#E85498' value="34" isTopRadius={false} isBottomRadius={true} />
      <p>{name}</p>
    </div>
  );
}

export default Column;
