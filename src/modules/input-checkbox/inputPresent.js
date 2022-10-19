import React from "react";

const InputPresent = (props) => {
  return (
    <div className={"prj-block-input prj-block-input--check"}>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        {...props.field}
      />
      {props.children}
    </div>
  );
};

export default InputPresent;
