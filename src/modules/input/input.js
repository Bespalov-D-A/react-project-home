import React from "react";
import { useField } from "formik";
import './input.scss'

const PrjFormInput = (props) => {
  const [field, meta] = useField(props);
  let newClass = props.inputClass ? props.inputClass : "";
  let newError = (meta.touched && meta.error) ? 'error' : false 
  return (
    <div className={'prj-block-input'}>
      <input
        className={"prj-input " + `${newError ? 'prj-input--error' : ''}` + newClass}
        id={props.name}
        type={props.type}
        {...field}
      />
      { newError ? (
        <div className="prj-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PrjFormInput;
