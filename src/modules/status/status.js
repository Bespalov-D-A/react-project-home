import React from "react";

const Status = (props) => {
  return (
    <div className="prj-wrap">
      <div className="prj-wrap__left"></div>
      <div className="prj-wrap__right">
        <div className="prj-header-stat">
          {props.isChange ? (
            <>
              {props.children}
              <div className="prj-ok" onClick={() => props.dispatch(props.setStatus({status: 'sdsds'}))}>Ok</div>
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
