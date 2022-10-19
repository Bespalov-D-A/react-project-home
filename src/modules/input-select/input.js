import React, { useEffect, useState } from "react";
import { useFormikContext, useField } from "formik";
import "./input-select.scss";
import Select from "react-select";
import { sortFunc } from './input-func.js'


const PrjFormInput = (props) => {
  const [cities, setCities] = useState(null);
  const newClass = props.inputclass ? props.inputclass : "";
  const [ field, meta, helper] = useField(props);


  useEffect(() => {
    if (!cities) getCities();
  }, []);

  const getCities = () => {
    fetch("data/cities.json")
      .then((result) => result.json())
      .then((res) => sortFunc(res, setCities, 'city', 'population'))
      .catch((error) => console.log(error.message));
  };


  const changeSelect = (data) => {
    helper.setValue(data)
  }

  return (
    <div className={"prj-block-input prj-block-input--select"}>
      <Select
        className={"prj-input " + newClass}
        classNamePrefix="prj-select"
        inputId={props.name}
        onChange={changeSelect}
        options={cities}
      />
      {meta.touched && meta.error ? (
        <div className="prj-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PrjFormInput;
