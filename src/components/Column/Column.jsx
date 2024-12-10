import ColumnElement from "../ColumnElement";

const Column = ({ name, data }) => {

  return (
    <div className="Column">
      <ColumnElement color='#4AB6E8' value={data.front} isTopRadius={true} isBottomRadius={false} />
      <ColumnElement color='#AA6FAC' value={data.back} isTopRadius={false} isBottomRadius={false} />
      <ColumnElement color='#E85498' value={data.db} isTopRadius={false} isBottomRadius={true} />
      <p>{name}</p>
    </div>
  );
}

export default Column;
