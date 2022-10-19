import React from "react";

const SubmitFunc = (props) => {
  return (
    <>
      <button
        onClick={() => props.submitFunc()}
        type="submit"
        className="prj-btn"
      >
        Изменить
      </button>
      <p className="prj-input-desc prj-input-desc--btn">{props.children}</p>
    </>
  );
};

export default SubmitFunc;
