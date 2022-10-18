import React from "react";
import StatusPresent from './status-present.js'
import "./status.scss";

const Status = (props) => {
  const currentStatus = props.children.props.inputvalue.prjStatus;
  
  const setNewStatus = () => {
            props.dispatch(props.setStatus({ status: currentStatus }))
            props.dispatch(props.setIsChange())
  }

  const changeStatusFunc = () => {
    return props.isChange ? (
      <>
        {props.children}
        <div
          className="prj-ok"
          onClick={() =>
              setNewStatus()
          }
        >
          Ok
        </div>
      </>
    ) : (
      <p className="prj-header-stat__status">{props.status}</p>
    );
  };

  return <StatusPresent changeStatusFunc={changeStatusFunc}/>
};

export default Status;
