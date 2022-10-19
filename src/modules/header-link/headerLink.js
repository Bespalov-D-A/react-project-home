import React from "react";
import './headerLink.scss'

const HeaderLink = (props) => {
  return (
    <span className="prj-header-link">
      <a
        className="prj-header-link__link"
        onClick={() => props.dispatch(props.setIsChange())}
        href="#"
      >
        Сменить статус
      </a>
    </span>
  );
};

export default HeaderLink;
