import React from "react";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import {ButtonGroup} from "reactstrap";
import Button from "../../components/button/Button";
import Menu from "../menu/Menu";
import Icon from "../../components/icon/Icon";

const Sidebar = ({ theme, className, visibility, sidebarToggle, mobileView }) => {
  const classes = classNames({
    "nk-aside toggle-screen-lg": true,
    "content-active": visibility,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  return (
    <div className={classes}>
      <SimpleBar className="nk-sidebar-menu">
      <div>
        <div className="form-icon form-icon-right">
          <Icon name="search"></Icon>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search for games"
        />
      </div>
      <ButtonGroup className="d-flex border rounded mt-1 mb-2" size="sm">
        <Button color="primary">All</Button>
        <Button>Today</Button>
        <Button>3hrs</Button>
        <Button>24hrs</Button>
      </ButtonGroup>
        <Menu sidebarToggle={sidebarToggle} mobileView={mobileView} />
      </SimpleBar>
    </div>
  );
};
export default Sidebar;
