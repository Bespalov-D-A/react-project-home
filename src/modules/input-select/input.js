import React, { useEffect, useState } from "react";
import { useField } from "formik";
import "./input-select.scss";
import Select from "react-select";
import { sortFunc } from './input-func.js'

const PrjFormInput = (props) => {
  const [cities, setCities] = useState(null);

  useEffect(() => {
    if (!cities) getCities();
  }, []);

  const getCities = () => {
    fetch("data/cities.json")
      .then((result) => result.json())
      .then((res) => sortFunc(res, setCities, 'city', 'population'))
      .catch((error) => console.log(error.message));
  };

  const newClass = props.inputclass ? props.inputclass : "";
  const [field, meta] = useField(props);

  

  return (
    <div className={"prj-block-input prj-block-input--select"}>
      <Select
 //       components={{ Option: CustomOption }}
        className={"prj-input " + newClass}
        classNamePrefix="prj-select"
        id={props.name}
        type={props.type}
        {...field}
        {...props}
        options={cities}
      ></Select>
      {meta.touched && meta.error ? (
        <div className="prj-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default PrjFormInput;
