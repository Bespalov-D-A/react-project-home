import React from "react";
import Select from "react-select";

const InputPresent = (props) => {
  return (
    <div className={"prj-block-input prj-block-input--select"}>
      <Select
        className={props.className}
        classNamePrefix={props.classNamePrefix}
        inputId={props.inputId}
        value={props.field.value}
        onChange={props.onChange}
        options={props.options}
      />
      {props.children}
    </div>
  );
};

export default InputPresent;
