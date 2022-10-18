import React from "react";
import './status.scss'

const Status = (props) => {
const currentStatus = props.children.props.inputvalue.prjStatus

  return (
    <div className="prj-wrap">
      <div className="prj-wrap__left"></div>
      <div className="prj-wrap__right">
        <div className="prj-header-stat">
          {props.isChange ? (
            <>
              {props.children}
              <div
                className="prj-ok"
                onClick={() =>
                  props.dispatch(props.setStatus({ status: currentStatus }))
                }
              >
                Ok
              </div>
            </>
          ) : (
            <p className="prj-header-stat__status">{props.status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Status;
