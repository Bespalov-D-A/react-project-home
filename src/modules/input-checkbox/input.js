import React from "react";
import { useField } from "formik";
import './input-checkbox.scss'

const PrjFormInputCheck = (props) => {
  const newClass = props.inputClass ? props.inputClass : "";
  const [field, meta] = useField(props);
  return (
    <div className={'prj-block-input prj-block-input--check'}>
      <input
        className={"prj-input " + newClass}
        id={props.name}
        type={props.type}
        {...field}
      />
      {meta.touched && meta.error ? (
        <div className="prj-error">{meta.error}</div>
      ) : (
        null
      )}
    </div>
  );
};

export default PrjFormInputCheck;
