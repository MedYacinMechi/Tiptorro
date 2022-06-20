import React from "react";

const Content = ({ ...props }) => {
  return (
    <div className="nk-content-wrap">
      <div className="wide-md mx-auto">{props.children}</div>
    </div>
  );
};
export default Content;
