import React from "react";
import { useField } from "formik";
import './input-select.scss'

const PrjFormInput = (props) => {
  const newClass = props.inputclass ? props.inputclass : "";
  const [field, meta] = useField(props);
  return (
    <div className={'prj-block-input prj-block-input--select'}>
      <select
        className={"prj-input " + newClass}
        id={props.name}
        type={props.type}
        {...field}
        {...props}
      >
        </select>
      {meta.touched && meta.error ? (
        <div className="prj-error">{meta.error}</div>
      ) : (
        null
      )}
    </div>
  );
};

export default PrjFormInput;
