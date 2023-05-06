import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../../routes/routesModel";
import { Outlet } from "react-router-dom";

const UseStateMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <NavItem
            label="Use-State"
            to={SANDBOX_ROUTES.USE_STATE}
            color="white"
          />

          <NavItem
            label="US-function"
            to={SANDBOX_ROUTES.USE_STATE_WITH_FUNCTION}
            color="white"
          />

          <NavItem
            label="US-object"
            to={SANDBOX_ROUTES.USE_STATE_WITH_OBJECT}
            color="white"
          />
          <NavItem
            label="US-complex object"
            to={SANDBOX_ROUTES.USE_STATE_WITH_COMPLEX_OBJECT}
            color="white"
          />

          <NavItem
            label="US-array of objects"
            to={SANDBOX_ROUTES.USE_STATE_WITH_ARRAY_OF_OBJECTS}
            color="white"
          />

          <NavItem
            label="US-Set Post"
            to={SANDBOX_ROUTES.USE_STATE_SET_POST}
            color="white"
          />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default UseStateMenu;
