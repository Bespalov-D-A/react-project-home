import React, { useEffect, useState } from "react";
import { useFormikContext, useField } from "formik";
import "./input-select.scss";
import InputPresent from "./input-present.js";
import { sortFunc } from "./input-func.js";
import ErrorMessage from "./../error/error.js";

const PrjFormInput = (props) => {
  const [cities, setCities] = useState(null);
  const newClass = props.inputclass ? props.inputclass : "";
  const [field, meta, helper] = useField(props);
  let newError = meta.touched && meta.error ? "error" : false;

  useEffect(() => {
    if (!cities) getCities();
  }, []);

  const getCities = () => {
    fetch("data/cities.json")
      .then((result) => result.json())
      .then((res) => sortFunc(res, setCities, "city", "population"))
      .catch((error) => console.log(error.message));
  };

  const newField = { ...field, onChange: (data) => changeSelect(data) };

  const changeSelect = (data) => {
    props.dispatch(props.setItemInputValue(data));
    helper.setValue(data);
  };

  return (
    <InputPresent
      className={"prj-input " + newClass}
      classNamePrefix="prj-select"
      inputId={props.name}
      field={newField}
      onChange={changeSelect}
      options={cities}
    >
      <ErrorMessage error={newError} meta={meta} />
    </InputPresent>
  );
};

export default PrjFormInput;
