import * as React from "react";

const TableRow = ({
  item,
  onChangeAge,
  onChangeName,
  onClickSave,
  onClickDelete,
}) => {
  const [disabled, setDisabled] = React.useState(true);
  return (
    <tr key={item._id}>
      <td>{item._id}</td>

      <td>
        <input
          defaultValue={item.data ? item.data.name : ""}
          disabled={disabled}
          onChange={(e) => onChangeName(e)}
        />
      </td>
      <td>
        <input
          defaultValue={item.data ? item.data.age : ""}
          disabled={disabled}
          onChange={(e) => onChangeAge(e)}
        />
      </td>
      <td>
        {!disabled ? (
          <button
            className={"btn btn-success"}
            onClick={() => {
              onClickSave(item._id);
              setDisabled(true);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className={"btn btn-secondary"}
            onClick={() => {
              setDisabled(false);
            }}
          >
            Edit
          </button>
        )}
        <button
          className={"btn btn-danger"}
          onClick={() => onClickDelete(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
