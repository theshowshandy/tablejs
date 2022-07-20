import * as React from "react";
import { deleteItem, editItem } from "../../api";
import TableRow from "./tableRow";

const Table = (props) => {
  const [state, setState] = React.useState({
    disabled: true,
    isEditMode: false,
  });

  const [editData, setEditData] = React.useState({
    name: "",
    age: "",
  });

  const onClickButtonSave = (id) => {
    return (
      setState({
        ...state,
        disabled: true,
        isEditMode: false,
      }),
      editItem(id, editData.name, editData.age)
    );
  };

  const onChangeAge = (e) =>
    setEditData({ name: editData.name, age: e.target.value });

  const onChangeName = (e) =>
    setEditData({ age: editData.age, name: e.target.value });

  const onClickSave = (id) => onClickButtonSave(id);

  const onClickDelete = (id) => {
    deleteItem(props.setFlag, props.flag, id);
  };

  return (
    <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <TableRow
            key={item._id}
            item={item}
            onChangeAge={onChangeAge}
            onChangeName={onChangeName}
            onClickSave={onClickSave}
            onClickDelete={onClickDelete}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
