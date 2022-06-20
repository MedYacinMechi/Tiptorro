import React from "react";
import classNames from "classnames";
import Logo from "../logo/Logo";
import Button from "../../components/button/Button";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import {LanguageFlag} from "../../components/Component"
import English from "../../images/flags/uk-sq.png";
import EnglishFlag from "../../images/flags/uk.png";
import SpanishFlag from "../../images/flags/spanish.png";
import FrenchFlag from "../../images/flags/french.png";
import Toggle from "../sidebar/Toggle";
import { Link } from "react-router-dom";

const Header = ({ fixed, theme, className, sidebarToggle, setVisibility }) => {
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme === "white",
    [`is-${theme}`]: theme !== "white" && theme !== "light",
    [`${className}`]: className,
  });

  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }

  return (
    <div className={headerClass}>
      <div className="container-lg wide-xl">
        <div className="nk-header-wrap">
          <div className="nk-header-brand">
            <Logo />
          </div>
          <div className="nk-header-menu">
            <ul className="nk-menu nk-menu-main">
              <li
                className={`nk-menu-item ${currentUrl === process.env.PUBLIC_URL + "/" ? "active current-page" : ""}`}
              >
                <Link to={`${process.env.PUBLIC_URL}/`} className="nk-menu-link">
                  <span className="nk-menu-text">Sports Betting</span>
                </Link>
              </li>
              <li
                className={`nk-menu-item ${
                  currentUrl === process.env.PUBLIC_URL + "/" ? "active current-page" : ""
                }`}
              >
                <Link to={`${process.env.PUBLIC_URL}/_home`} className="nk-menu-link">
                  <span className="nk-menu-text">Live Betting</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="notification-dropdown" onClick={() => setVisibility(false)}>
                <Button color="primary">Login</Button>
              </li>
              <li className="user-dropdown" onClick={() => setVisibility(false)}>
                <Button color="white" outline className="btn-outline-primary btn-dim">Register</Button>
              </li>
              <li className="d-lg-none">
                <Toggle icon="menu" className="toggle nk-quick-nav-icon mr-n1" click={sidebarToggle} />
              </li>
              <li>
                <UncontrolledDropdown>
                  <DropdownToggle className="dropdown-toggle btn-round btn-icon btn-light lang">
                    <LanguageFlag className="xs" image={English}></LanguageFlag>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-sm">
                    <ul className="language-list">
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="language-item"
                        >
                          <img src={EnglishFlag} alt="" className="language-flag" />
                          <span className="language-name">English</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="language-item"
                        >
                          <img src={SpanishFlag} alt="" className="language-flag" />
                          <span className="language-name">Español</span>
                        </DropdownItem>
                      </li>
                      <li>
                        <DropdownItem
                          tag="a"
                          href="#dropdownitem"
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                          className="language-item"
                        >
                          <img src={FrenchFlag} alt="" className="language-flag" />
                          <span className="language-name">Français</span>
                        </DropdownItem>
                      </li>
                    </ul>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
