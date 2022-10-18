import React from 'react'

const StatusPresent = props => {
return <div className="prj-wrap">
      <div className="prj-wrap__left"></div>
      <div className="prj-wrap__right">
        <div className="prj-header-stat">
          {props.changeStatusFunc()}
        </div>
      </div>
    </div>
}

export default StatusPresent
