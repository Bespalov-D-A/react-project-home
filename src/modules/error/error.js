import React from "react";

const ErrorMessage = (props) => {
  return props.error ? (
    <div className="prj-error">{props.meta.error}</div>
  ) : null;
};

export default ErrorMessage;
