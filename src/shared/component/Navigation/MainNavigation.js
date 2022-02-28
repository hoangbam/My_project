import React, { useState } from "react";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  return (
    // cho phep return nhieu Element
    <React.Fragment>
      {drawerIsOpen ? (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks></NavLinks>
          </nav>
        </SideDrawer>
      ) : null}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/" style={{ textDecoration: "none" }}>
            Your Places
          </Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
