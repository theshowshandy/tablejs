import React, { useState } from "react";
import { addNewItem } from "../../api";
const Header = (props) => {
const [state,setState] = useState({
  name: '', 
  age: '',
})
  return (
    <div>
      <input placeholder={"Enter name"} onChange = {(e) => setState({age: state.age,name: e.target.value})}/>
      <input placeholder={"Enter age"} onChange = {(e) => setState({name: state.name,age: e.target.value})}/>

      <button
      className={"btn btn-dark"}
        onClick={() => {
         addNewItem(props.setFlag, props.flag,state);
        
         
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
