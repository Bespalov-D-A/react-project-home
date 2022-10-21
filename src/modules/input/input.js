import React from "react";
import { useField } from "formik";
import "./input.scss";
import InputPresent from "./input-present.js";
import ErrorMessage from "./../error/error.js";

const PrjFormInput = (props) => {
  const [field, meta, helper] = useField(props);
  let newClass = props.inputClass ? props.inputClass : "";
  let newError = meta.touched && meta.error ? "error" : false;

  const testFunc = (data) => {
    const inputValue = data.currentTarget.value;
    props.dispatch(props.setItemInputValue(inputValue));
    helper.setValue(inputValue);
  };

  const newField = {
    ...field,
    onChange: (data) => testFunc(data),
  };

  return (
    <InputPresent
      className={
        "prj-input " + `${newError ? "prj-input--error" : ""}` + newClass
      }
      id={props.name}
      type={props.type}
      field={newField}
    >
      <ErrorMessage error={newError} meta={meta} />
    </InputPresent>
  );
};

export default PrjFormInput;
