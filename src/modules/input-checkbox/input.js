import React from "react";
import ErrorMessage from "./../error/error.js";
import { useField } from "formik";
import "./input-checkbox.scss";
import InputPresent from "./inputPresent.js";

const PrjFormInputCheck = (props) => {
  const newClass = props.inputClass ? props.inputClass : "";
  const [field, meta, helper] = useField(props);
  let newError = meta.touched && meta.error ? "error" : false;

  const newField = { ...field, onChange: (data) => onChangeFunc(data) };

  const onChangeFunc = (data) => {
    const inputValue = data.currentTarget.checked;
    props.dispatch(props.setItemInputValue(inputValue));
    helper.setValue(inputValue);
  };

  return (
    <InputPresent
      className={"prj-input " + newClass}
      id={props.name}
      type={props.type}
      field={newField}
    >
      <ErrorMessage error={newError} meta={meta} />
    </InputPresent>
  );
};

export default PrjFormInputCheck;
