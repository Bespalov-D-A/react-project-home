import React, { useState } from "react";
import "./submit.scss";
import Moment from "react-moment";
import SubmitPresent from "./submit-present.js";

const SubmitComp = (props) => {
  const [isTurnOn, setIsTurnOn] = useState(null);

  const date = +new Date();

  const submitFunc = () => {
    setIsTurnOn(true);
  };

  return (
    <SubmitPresent submitFunc={submitFunc}>
      {isTurnOn ? (
        <Moment date={date} locale="ru" format="DD MMMM  YYYY в HH:mm:ss" />
      ) : (
        "Форма не заполнялась ранее"
      )}
    </SubmitPresent>
  );
};

export default SubmitComp;
