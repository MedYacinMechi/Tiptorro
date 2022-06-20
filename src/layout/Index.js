import React, { useEffect, useState, useLayoutEffect } from "react";
import Pages from "../route/Index";
import Sidebar from "./sidebar/Sidebar";
import Head from "./head/Head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import classNames from "classnames";
import menu from "./menu/MenuData";

const Layout = () => {
  const [mobileView, setMobileView] = useState();
  const [visibility, setVisibility] = useState(false);
  const [themeState] = useState({
    main: "default",
    header: "dark",
    skin: "light",
  });

  useEffect(() => {
    viewChange();
  }, []);

  useLayoutEffect(() => {
    if (visibility) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
    if (!visibility) {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [visibility]);

  useEffect(() => {
    document.body.className = `nk-body bg-white npc-default has-aside no-touch nk-nio-theme ${
      themeState.skin === "dark" ? "dark-mode" : " "
    }`;
    let apps = menu.find((item) => item.text === "Applications");
    let matched = apps.subMenu.find((sub) => {
      if (process.env.PUBLIC_URL + sub.link === window.location.pathname) {
        return sub;
      } else if (window.location.pathname.split("/")[2] === "app-file-manager") {
        return sub;
      }
    });
    if (matched) {
      document.body.classList.add("apps-only");
    } else {
      document.body.classList.remove("apps-only");
    }
  }, [window.location.pathname]);

  const toggleSidebar = (e) => {
    e.preventDefault();
    if (visibility === false) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  };

  const viewChange = () => {
    if (window.innerWidth < 1200) {
      setMobileView(true);
    } else {
      setMobileView(false);
      setVisibility(false);
    }
  };
  window.addEventListener("load", viewChange);
  window.addEventListener("resize", viewChange);

  const sidebarClass = classNames({
    "mobile-menu": mobileView,
    "nk-sidebar-active": visibility && mobileView,
  });

  return (
    <React.Fragment>
      <Head title="Loading" />
      <div className="nk-app-root">
        <div className="nk-main">
          <div className="nk-wrap">
            <Header
              sidebarToggle={toggleSidebar}
              setVisibility={setVisibility}
              fixed={true}
              theme={themeState.header}
            />
            <div className="nk-content">
              <div className="container wide-xl">
                <div className="nk-content-inner">
                  <Sidebar
                    sidebarToggle={toggleSidebar}
                    visibility={visibility}
                    mobileView={mobileView}
                    fixed
                    theme="light"
                    className={sidebarClass}
                  />
                  {visibility && mobileView && <div className="toggle-overlay" onClick={(e) => toggleSidebar(e)} />}
                  <div className="nk-content-body">
                    <Pages />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
