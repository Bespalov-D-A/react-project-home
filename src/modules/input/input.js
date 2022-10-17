import React from "react";

const Input = (props) => {
  return <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        className={"prj-input " + props.inputClass }
        placeholder={props.placeholder}
        type={props.type}
      />
};

export default Input;
